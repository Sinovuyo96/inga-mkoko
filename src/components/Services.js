import React from "react";

function Services() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/images/logo.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5" className="serv">
             <ul className="offers">
              <h3 class="font-weight-light">We offer the following services:</h3>
              <br/>
                <ol>-Landscape</ol>
                <ol>-Weed And Pest Control</ol>
                <ol>-Lawn Installation And Management</ol>
                <ol>-Mulching And Fertilization</ol>
                <ol>-Hardscaping</ol>
                <ol>-Pavement establishments</ol>
                <ol>-Retailing Walls</ol>       
          </ul>  
            <div>
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
    </div>
  );
}

export default Services;