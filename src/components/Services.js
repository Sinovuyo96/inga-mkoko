import React from "react";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// const element = <FontAwesomeIcon icon={faCoffee} />
  // const element = <FontAwesomeIcon icon={["fab", "github"]} /> 

// library.add(fab, faCheckSquare, faCoffee)
function Services() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div className="img" class="col-lg-7">
          <img 
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/images/logo.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5" className="serv">
            
              <ul className="offers">
                <h2 class="font-weight-light">We Provide the following services:</h2>
                <br/>
                  <ol>-Landscape</ol>
                  <ol>-Weed And Pest Control</ol>
                  <ol>-Lawn Installation And Management</ol>
                  <ol>-Mulching And Fertilization</ol>
                  <ol>-Hardscaping</ol>
                  <ol>-Pavement establishments</ol>
                  <ol>-Retailing Walls</ol>       
            </ul>          
            {/* <ul><i class="fab fa-facebook"></i>
              <i class="far fa-envelope"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
            </ul> */}
            
            <div class="social">
          <a className="social" href="https://www.instagram.com/official_solani/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a className="social" href="https://www.facebook.com/ingah.mkoko.3/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a className="social" href="https://twitter.com/MkokoIngah" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a className="social" href="https://twitter.com/MkokoIngah" target="_blank"><i class="fa fa-phone" aria-hidden="true"></i>
          </a>
          <a className="social" href="https://twitter.com/MkokoIngah" target="_blank"><i class="fa fa-envelope-square" aria-hidden="true"></i></a>
          </div>
            </div> 
          
        </div>
      </div>
    </div>
  );
}

export default Services;