import React from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import CustomGlobeImage1 from '../../assets/imageNew.jpg'


const myProps = {
    markerColorInverted: "#000aff",
    focus: {
        "New York": [40.73061, -73.935242] 
    }
};

const testProps = {
    size: [2000, 2000],
    animations: [],
    lookAt: [1.3521, 103.8198] ,
    cameraOptions: {
        autoRotateSpeed: 0.8,
        enableAutoRotate: true,
        maxPolarAngle: 1.1780972450961724,
        enableRotate: false,
        enableZoom: false
    },
    globeOptions: {
        enableBackground: false,
        enableClouds: false,
        enableGlow: true,
        glowCoefficient: 0.1,
        glowColor: "#999",
        glowPower: 4,
        glowRadiusScale: 0.15,
        texture: CustomGlobeImage1
        
    },
    lightOptions: {
        ambientLightColor: "#f3f3f3",
        pointLightIntensity: 0.4,
        pointLightPositionRadiusScales: [-1, 5, -1] 
    },
    markers: [
        {
            city: "Atlanta",
            coordinates: "[33.7489954, -84.3879824]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Boston",
            coordinates: "[42.3600825, -71.0588801]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Chicago",
            coordinates: "[41.8781136, -87.6297982]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Columbus",
            coordinates: "[39.9611755, -82.9987942]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Dallas",
            coordinates: "[32.7766642, -96.7969879]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Denver",
            coordinates: "[39.7392358, -104.990251]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Hillsboro",
            coordinates: "[45.5228939, -122.989827]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Houston",
            coordinates: "[29.7604267, -95.3698028]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Los Angeles",
            coordinates: "[34.0522342, -118.2436849]",
            hotspot: true,
            color: "#00a4b0",
            value: "2"
        },
        {
            city: "Miami",
            coordinates: "[25.7616798, -80.1917902]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Minneapolis",
            coordinates: "[44.977753, -93.2650108]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "New York",
            coordinates: "[40.7127837, -74.0059413]",
            hotspot: true,
            color: "#00a4b0",
            value: "2"
        },
        {
            city: "Newark",
            coordinates: "[40.735657, -74.1723667]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Philadelphia",
            coordinates: "[39.9525839, -75.1652215]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Phoenix",
            coordinates: "[33.4483771, -112.0740373]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "San Jose",
            coordinates: "[37.3382082, -121.8863286]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Seattle",
            coordinates: "[47.6062095, -122.3320708]",
            hotspot: true,
            color: "#00a4b0",
            value: "2"
        },
        {
            city: "Athens",
            coordinates: "[37.9838, 23.7275]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Tokyo",
            coordinates: "[35.6762, 139.6503]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "London",
            coordinates: "[51.5074, 0.1278]",
            hotspot: true,
            color: "#00a4b0",
            value: "2"
        },
        {
            city: "Lisbon",
            coordinates: "[38.7223, 9.1393]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Helsinki",
            coordinates: "[60.1699, 24.9384]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "amburg",
            coordinates: "[53.5511, 9.9937]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Frankfurt",
            coordinates: "[50.1109, 8.6821]",
            hotspot: true,
            color: "#00a4b0",
            value: "2"
        },
        {
            city: "Düsseldorf",
            coordinates: "[51.2277, 6.7735]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Dublin",
            coordinates: "[53.3498, 6.2603]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Copenhagen",
            coordinates: "[55.6761, 12.5683]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Budapest",
            coordinates: "[47.4979, 19.0402]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Bucharest",
            coordinates: "[44.4268, 26.1025]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Berlin",
            coordinates: "[52.52, 13.405]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Brussels",
            coordinates: "[50.8503, 4.3517]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Prague",
            coordinates: "[50.0755, 14.4378]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Paris",
            coordinates: "[48.8566, 2.3522]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Palermo",
            coordinates: "[38.1157, 13.3615]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Oslo",
            coordinates: "[59.9139, 10.7522]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Munich",
            coordinates: "[48.1351, 11.582]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Milan",
            coordinates: "[45.4642, 9.19]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Marseille",
            coordinates: "[43.2965, 5.3698]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Manchester",
            coordinates: "[53.4808, 2.2426]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Madrid",
            coordinates: "[40.4168, 3.7038]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Seoul",
            coordinates: "[37.5665, 126.978]",
            hotspot: true,
            color: "#00a4b0",
            value: "2"
        },
        {
            city: "Osaka",
            coordinates: "[34.6937, 135.5023]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "New Delhi",
            coordinates: "[28.6139, 77.209]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Mumbai",
            coordinates: "[19.076, 72.8777]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Kuala Lumpur",
            coordinates: "[3.139, 101.6869]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Kolkata",
            coordinates: "[22.5726, 88.3639]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Hyderabad",
            coordinates: "[17.385, 78.4867]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Hong Kong",
            coordinates: "[22.3193, 114.1694]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Chennai",
            coordinates: "[13.0827, 80.2707]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Bangalore",
            coordinates: "[12.9716, 77.5946]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Vienna",
            coordinates: "[48.2082, 16.3738]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Stockholm",
            coordinates: "[59.3293, 18.0686]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Sofia",
            coordinates: "[42.6977, 23.3219]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Tel Aviv",
            coordinates: "[32.0853, 34.7818]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Bogota",
            coordinates: "[4.711, 74.0721]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Fujairah",
            coordinates: "[25.1288, 56.3265]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Manama",
            coordinates: "[26.2235, 50.5876]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Dubai",
            coordinates: "[25.2048, 55.2708]",
            color: "#00a4b0",
            value: "1"
        },
        {
            city: "Taipei",
            coordinates: "[25.033, 121.5654]",
            hotspot: true,
            color: "#00a4b0",
            value: "2"
        },
        {
            city: "Singapore",
            coordinates: "[1.3521, 103.8198]",
            hotspot: true,
            color: "#00a4b0",
            value: "2"
        }
    ].map((i) => ({
        ...i,
        id: i.city,
        coordinates: i.coordinates
            .replace("[", "")
            .replace("]", "")
            .split(", ")
            .map(Number),
        color: myProps.markerColorInverted
    })),
    markerOptions: {
        enableTooltip: false,
        enableGlow: true,
        glowPower: 5,
        glowCoefficient: 0.2,
        offsetRadiusScale: 0
    }
};

const Globe = (props) => {
    return (
        <>
            <ReactGlobe
                {...props}
                options={{
                    // camera options (5)
                    cameraAutoRotateSpeed: testProps.cameraOptions.autoRotateSpeed,
                    enableCameraAutoRotate: testProps.cameraOptions.enableAutoRotate,
                    enableCameraRotate: testProps.cameraOptions.enableRotate,
                    enableCameraZoom: testProps.cameraOptions.enableZoom,
                    cameraMaxPolarAngle: testProps.cameraOptions.maxPolarAngle,
                    // globe options ()
                    enableGlobeGlow: testProps.globeOptions.enableGlow,
                    globeGlowCoefficient: testProps.globeOptions.glowCoefficient,
                    globeGlowColor: testProps.globeOptions.glowColor,
                    globeGlowPower: testProps.globeOptions.glowPower,
                    globeGlowRadiusScale: testProps.globeOptions.glowRadiusScale,
                    // marker options (5)
                    enableMarkerGlow: testProps.markerOptions.enableGlow,
                    markerOffsetRadiusScale: testProps.markerOptions.offsetRadiusScale,
                    enableMarkerTooltip: testProps.markerOptions.enableTooltip,
                    markerGlowCoefficient: testProps.markerOptions.glowCoefficient,
                    markerGlowPower: testProps.markerOptions.glowPower,
                    // light options (3)
                    ambientLightColor: testProps.lightOptions.ambientLightColor,
                    pointLightIntensity: testProps.lightOptions.pointLightIntensity,
                    pointLightPositionRadiusScales:
                        testProps.lightOptions.pointLightPositionRadiusScales
                }}
                globeCloudsTexture={CustomGlobeImage1}
                globeBackgroundTexture={null}
                globeTexture={CustomGlobeImage1}
                initialCoordinates={[0, -73.935242]} // USA
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: `canvas { filter: invert(1)} body { -webkit-font-smoothing: antialiased; text-rendering:optimizeLegibility; background-color: black }`
                }}
            />
        </>
    );
};

function BlackGlobe() {
    return (
        <Globe
            texture={testProps.globeOptions.texture}
            height="100vh"
            width="100vw"
            markers={testProps.markers}
        />
    );
}
export default BlackGlobe


