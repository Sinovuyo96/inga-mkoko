import React from "react";




function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/images/inga.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            {/* <h1 class="font-weight-light">Home</h1> */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a href="https://github.com/Sinovuyo96" ><i class="fa fa-github" aria-hidden="true"></i>
          </a>
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