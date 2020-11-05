import React from "react";




function Home() {
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
          <div class="col-lg-5" className="hom">
            {/* <h1 class="font-weight-light">Home</h1> */}
            <h2>About Company</h2>
            <p>
              We are a company that specializes in horticulture and diversity of plantings, 
              Seeding and Flowering. We cater for different services from the above mentioned. We seek 
              success on every job that we do, we have worked with different clients, with different project
               in different conditions, we cater for people who need Maintenance with plants, weed Maintenance.
            </p>
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
            
            {/* <span className="fa-layers fa-fw">
  <FontAwesomeIcon icon="square" color="green" />
  <FontAwesomeIcon icon="check" inverse transform="shrink-6" />
</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;