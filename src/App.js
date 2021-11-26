import logo from "./logo.svg";
import "./App.css";
import {useRef} from 'react'
import SimpleGlobe from "./components/simpleGlobe";
import BlackGlobe from "./components/blackglobe";
import { World } from "./components/worldsanimation";
import NewGlobe from "./components/newglobe";
import CustomGlobeImage from "./assets/globe.png";
import * as THREE from "three"
import React, { Suspense, useState, useCallback } from "react"
// use-cannon is a hook around the cannon.js physics library: https://github.com/react-spring/use-cannon





const vs = `
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vNormal = normalMatrix * normal;
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fs = `
uniform sampler2D dayTexture;
uniform sampler2D nightTexture;

uniform vec3 sunDirection;

varying vec2 vUv;
varying vec3 vNormal;

void main( void ) {
  vec3 dayColor = texture2D( dayTexture, vUv ).rgb;
  vec3 nightColor = texture2D( nightTexture, vUv ).rgb;

  // compute cosine sun to normal so -1 is away from sun and +1 is toward sun.
  float cosineAngleSunToNormal = dot(normalize(vNormal), sunDirection);

  // sharpen the edge beween the transition
  cosineAngleSunToNormal = clamp( cosineAngleSunToNormal * 10.0, -1.0, 1.0);

  // convert to 0 to 1 for mixing
  float mixAmount = cosineAngleSunToNormal * 0.5 + 0.5;

  // Select day or night texture based on mix.
  vec3 color = mix( nightColor, dayColor, mixAmount );

  gl_FragColor = vec4( color, 1.0 );
}

`;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, 1, 1, 3000);
camera.position.z = 4;
scene.add( camera );

const directionalLight = new THREE.DirectionalLight( 0xaaff22, 1 );
directionalLight.position.set(0, 0, 0).normalize();
scene.add( directionalLight );

const textureLoader = new THREE.TextureLoader();

const uniforms = {
  sunDirection: {value: new THREE.Vector3(0.5,0.7,0) },
  dayTexture: { value: textureLoader.load( "https://i.imgur.com/dfLCd19.jpg" ) },
  nightTexture: { value: textureLoader.load( "https://i.imgur.com/MeKgLts.jpg" ) }
};

const material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  vertexShader: vs,
  fragmentShader: fs,
});

const mesh = new THREE.Mesh( new THREE.SphereGeometry( 0.75, 32, 16 ), material );
const sun = new THREE.Scene(new THREE.SphereGeometry( 1, 32 ,18))
scene.add( mesh );


const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
resize(true);
requestAnimationFrame(render);

function resize(force) {
  const canvas = renderer.domElement;
  const w = window.innerWidth;
  const h = window.innerHeight
  const width = w;
  const height = h;
  if (force || w !== width || 5 !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function render(time) {
  time *= 0.0003;  // seconds
  
  resize();
  
  // uniforms.sunDirection.value.x = Math.sin(time);
  // uniforms.sunDirection.value.y = Math.cos(time);

  // Note: Since the earth is at 0,0,0 you can set the normal for the sun
  // with
  //
  // uniforms.sunDirection.value.copy(sunPosition);
  // uniforms.sunDirection.value.normalize();


  mesh.rotation.x = time * 0
  mesh.rotation.y = time * 1;

  renderer.render(scene, camera);
requestAnimationFrame(render);

}










function App() {
  const wid = window.innerWidth;
  const [toggleValue, setToggleValue] = useState(true);
  
  return (
    
  // requestAnimationFrame(render)
  <div style={{height:100 , backgroundColor:'black' ,marginTop:-20 }}>
    <h5 style={{backgroundColor:'black' , }}>whiog</h5>
  </div>
    
  )
  
}

export default App;
