// import React, {useState} from "react";
// import SliderComponent from './SliderComponent.js'
// import Slide from './Slide'

// /**
//  * @function Slider
//  */

//  const Slider = () => {
//      const getWidth =() => Window.innerWidth

//      const  [setState, useState] = useState({
//          translate : 0;
//          transition: 0.45;
//      })

//      const {translate, transition} = state
//      return(
//          <div css = {SliderCSS}>
//              <SliderComponent
//              translate={translate}
//              transition={transition}
//              width ={getWidth()}
//              >
//             <Slide/>
//             </SliderComponent>
//          </div>
//      )
//  }

//  const SliderCSS =css`
//  position: relative;
//  height:100%;
//  width:100vw;
//  margin: 0 auto;
//  overflow: hidden;
//  `

// export default Slider