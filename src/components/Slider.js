import React, {useState} from "react";
//import SliderComponent from './SliderComponent.js'
//import {css,jsx} from "@emotion/core"

// const Slider = ({content}) = ()=>{
// <div>
//     css={css`
//         height:100%;
//     width:100%; 
//     background-image:url(`${content}`);
//     backgroung-size:cover;
//     background-repeat: no-repeat;
//     backgroud-position:center;
//     `}

// </div>
// }

/**
 * @function Slider
 */

 const Slider = () => {
     const getWidth =() => Window.innerWidth

     const  [setState, useState] = useState({
         translate : 0;
         transition: 0.45;
     })

     const {translate, transition} = state
     return(
         <div>
            
         </div>
     )

 }
// export default Slider