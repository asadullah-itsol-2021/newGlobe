import React, { createRef, useEffect } from "react";
import Globe from "react-globe.gl";
import CustomGlobeImage from "../../assets/globe.png";
import CustomGlobeImage1 from "../../assets/imageNew.jpg";

export default function NewGlobe(props) {
  const w = window.innerWidth;
  const shiftFactor = 0.4;
  const shiftAmmount = shiftFactor * w;
  let pVal = [1];

  let globeEl = createRef();
  useEffect(() => {
    if (globeEl) {

      globeEl.current
        .controls()
        .update((globeEl.current.controls().autoRotateSpeed = 0.5));
      globeEl.current
        .controls()
        .update((globeEl.current.controls().autoRotate = true));

      globeEl.current.controls().addEventListener("start", () => {
        globeEl.current.resumeAnimation();
      });
      // alert('ccc')
    }
  }, [globeEl]);

  setTimeout(() => {
    if (globeEl) {
      // alert('settt')
      console.log(globeEl.current, "setttGlobeee");
      // globeEl.current.resumeAnimation()

      // globeEl.current.controls().addEventListener('start',
      //     () => { globeEl.current.resumeAnimation() }
      // );
    }
  }, 2000);

  return (
    <div
      style={{
        marginLeft: `-${shiftAmmount}px`,
        // backgroundColor:'#000'
      }}
    >
   
   
      {/* <p style={{color:'#fff',position:'absolute',marginTop:'150px',marginLeft:'250px',cursor:'pointer'}} onClick={_=>alert('Marker 1')}>Marker 1</p>
          <p style={{color:'#fff',position:'absolute',marginTop:'180px',marginLeft:'550px',cursor:'pointer'}} onClick={_=>alert('Marker 1')}>Marker 2</p>
          <p style={{color:'#fff',position:'absolute',marginTop:'330px',marginLeft:'750px',cursor:'pointer'}} onClick={_=>alert('Marker 1')}>Marker 3</p>
           */}
  
        <Globe

          ref={globeEl}
          style={{ marginLeft: "50px", position: "fixed" }}
          width={w + shiftAmmount}
          globeImageUrl={CustomGlobeImage}
          pointsData={[{ name: "uzair" }]}
          backgroundColor="rgba(0,0,0,0)"
          // backgroundColor="#000"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          animateIn={true}
          // onArcHover={_ => globeEl.current.controls().autoRotate}
        ></Globe>

    </div>
  );
}
