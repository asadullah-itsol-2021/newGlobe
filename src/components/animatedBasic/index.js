import React, { useState } from "react";
import Globe from 'react-globe.gl';




const BasicGlobe = ()=>{
    return(
        <Globe
        pointsData={myData}
      />
    )
}
export default BasicGlobe