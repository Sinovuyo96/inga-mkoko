// import { render } from '@testing-library/react';
// import React from 'react'

// function ImageSlider() {

    
//     var slideIndex =1;
//     ShowSlides(slideIndex);

//     function plusSlides(n){
//         ShowSlides(slideIndex +=1);
//     }

//     function currentSlide(n){
//         ShowSlides(slideIndex = n);
//     }
// function ShowSlides(n) {
//             var i;
//             var slides = document.getElementsByClassName("mySlides");
//             var dots = document.getElementsByClassName("dot");
//             if (n > slides.length){
//                 slideIndex = 1;
//             }
//             if (n <1){
//                 slideIndex =slides.length}

//             for (i = 0; i<slides.length; i++){
//                 slides[i].style.display ="none";
//             }

//             for (i = 0; i <dots.length; i++){
//                 dots[i].className = dots[i].className.replace("actve", "");
//             }
//             slides[slideIndex-1].style.display ='block';
//             dots[slideIndex-1].className += "actve";
//             }

//     return(
//         <div className="container"> 
//             {/* <div className="mySlides fade">
//                 <div className="numberText">1/3</div>
//                 <img src="/images/progress.jpg" ></img>
//                 <div className="text">Caption text</div>
//             </div>*/}

//             <div className="mySlides fade">
//                 <div className="numberText">2/3</div>
//                 <img src="/images/work.jpg"></img>
//                 <div className="text">caption two</div>
//             </div> 

//             <div className="mySlides fade">
//                 <div className="numberText">3/3</div>
//                 <img
//               class="img-fluid rounded mb-4 mb-lg-0"
//               src="/images/logo.jpg"
//               alt=""
//             />
//                 <div className="text">Caption three</div>
//             </div>

//             {/* NEXT AND PREVIOUS BUTTONS */}
//             <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
//             <a className="next" onClick="plusSlides(1)">&#10095;</a>

//             {/* The "DOTS" */}
//             <div className="dots">
//                 <span className="dot" onClick="currentSlide(1)"></span>
//                 <span className="dot" onClick="currentSlide(2)"></span>
//                 <span className="dot" onClick="currentSlide(3)"></span>
//             </div>
//         </div>

        

//     );

//         }


// export default ImageSlider;