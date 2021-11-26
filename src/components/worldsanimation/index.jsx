import React, { useState, useEffect, useRef } from "react";
import indexBy from "index-array-by";
import { csvParseRows } from "d3-dsv";

import Globe from "react-globe.gl";
import CustomGlobeImage from '../../assets/globe.png'

const COUNTRY = "United States";
const OPACITY = 0.1;

const airportParse = ([
  airportId,
  name,
  city,
  country,
  iata,
  icao,
  lat,
  lng,
  alt,
  timezone,
  dst,
  tz,
  type,
  source
]) => ({
  airportId,
  name,
  city,
  country,
  iata,
  icao,
  lat,
  lng,
  alt,
  timezone,
  dst,
  tz,
  type,
  source
});
const routeParse = ([
  airline,
  airlineId,
  srcIata,
  srcAirportId,
  dstIata,
  dstAirportId,
  codeshare,
  stops,
  equipment
]) => ({
  airline,
  airlineId,
  srcIata,
  srcAirportId,
  dstIata,
  dstAirportId,
  codeshare,
  stops,
  equipment
});

export const World = () => {
  const globeEl = useRef();
  const [airports, setAirports] = useState([]);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // load data
    Promise.all([
      fetch(
        "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat"
      )
        .then(res => res.text())
        .then(d => csvParseRows(d, airportParse)),
      fetch(
        "https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat"
      )
        .then(res => res.text())
        .then(d => csvParseRows(d, routeParse))
    ]).then(([airports, routes]) => {
      const byIata = indexBy(airports, "iata", false);

      const filteredRoutes = routes
        .filter(
          d =>
            byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)
        ) // exclude unknown airports
        .filter(d => d.stops === "0") // non-stop flights only
        .map(d =>
          Object.assign(d, {
            srcAirport: byIata[d.srcIata],
            dstAirport: byIata[d.dstIata]
          })
        )
        .filter(
          d =>
            d.srcAirport.country === COUNTRY && d.dstAirport.country !== COUNTRY
        ); // international routes from country

      setAirports(airports);
      // setRoutes(filteredRoutes);
    });
  }, []);

  useEffect(() => {
    // aim at continental US centroid
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });
  }, []);

  return (
    <Globe
      ref={globeEl}
      // globeImageUrl="https://1.bp.blogspot.com/-UUXaK5GCj-k/UcsKJRMgkVI/AAAAAAAACfM/sePP_H08JTQ/s1600/1.jpg"
      // globeImageUrl="https://i1.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2013/02/lightsnight-nasa-koreas.jpg?resize=470%2C282"
      globeImageUrl={CustomGlobeImage}
      // globeImageUrl="https://image.shutterstock.com/z/stock-photo-world-globe-planet-earth-d-rendering-stars-my-own-photo-elements-of-this-image-furnished-by-727455358.jpg"
      // globeImageUrl="https://image.shutterstock.com/image-vector/abstract-image-world-map-point-600w-773804731.jpg"
      // globeImageUrl="https://image.shutterstock.com/shutterstock/photos/172229204/display_1500/stock-photo-city-lights-europe-elements-of-this-image-furnished-by-nasa-172229204.jpg"
      // globeImageUrl=""
      showAtmosphere={false}
      arcsData={routes}
      arcLabel={d => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`}
      arcStartLat={d => +d.srcAirport.lat}
      arcStartLng={d => +d.srcAirport.lng}
      arcEndLat={d => +d.dstAirport.lat}
      arcEndLng={d => +d.dstAirport.lng}
      arcDashLength={0.5}
      arcDashGap={1}
      arcDashInitialGap={() => Math.random()}
      arcDashAnimateTime={4000}
      // arcColor={d => [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`]}
      // arcsTransitionDuration={0}
      arcStroke={null}
      arcColor={() => "#88602333"}
      pointsData={airports}
      pointColor={() => "orange"}
      pointAltitude={0}
      pointRadius={0.02}
      pointsMerge={true}
    />
  );
};
