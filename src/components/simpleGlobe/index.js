import React, { useState } from "react";
import ReactGlobe from "react-globe";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";


function markerTooltipRenderer(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
}

let defaultMarkers = [
    {
        id: 1,
        city: 'Singapore',
        color: 'red',
        coordinates: [1.3521, 103.8198],
        value: 50,
      },
      {
        id: 2,
        city: 'New York',
        color: 'blue',
        coordinates: [40.73061, -73.935242],
        value: 25,
      },
      {
        id: 3,
        city: 'San Francisco',
        color: 'orange',
        coordinates: [37.773972, -122.431297],
        value: 35,
      },
      {
        id: 4,
        city: 'Beijing',
        color: 'gold',
        coordinates: [39.9042, 116.4074],
        value: 0,
      },
      {
        id: 5,
        city: 'London',
        color: 'green',
        coordinates: [51.5074, 0.1278],
        value: 80,
      },
]

const options = {
  markerTooltipRenderer
};

function SimpleGlobe() {
  const randomMarkers = defaultMarkers.map((marker) => ({
    ...marker,
    value: Math.floor(Math.random() * 100)
  }));
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(markerTooltipRenderer(marker));
  }
  function onDefocus(previousFocus) {
    setEvent({
      type: "DEFOCUS",
      previousFocus
    });
    setDetails(null);
  }

  return (
    <div>
      {details && (
        <div
          style={{
            background: "white",
            position: "absolute",
            fontSize: 20,
            bottom: 0,
            right: 0,
            padding: 12
          }}
        >
          <p>{details}</p>
          <p>
            EVENT: type={event.type}, position=
            {JSON.stringify(event.pointerEventPosition)})
          </p>
        </div>
      )}
      <div style={{ padding: 32 }}>
        <button onClick={() => setMarkers(randomMarkers)}>
          Randomize markers
        </button>
        <button disabled={markers.length === 0} onClick={() => setMarkers([])}>
          Clear markers
        </button>
        <button
          disabled={markers.length === randomMarkers.length}
          onClick={() =>
            setMarkers([...markers, randomMarkers[markers.length]])
          }
        >
          Add marker
        </button>
        <button
          disabled={markers.length === 0}
          onClick={() => setMarkers(markers.slice(0, markers.length - 1))}
        >
          Remove marker
        </button>
      </div>
      <ReactGlobe
        height="100vh"
        markers={markers}
        options={options}
        width="100vw"
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
    </div>
  );
}
export default SimpleGlobe
