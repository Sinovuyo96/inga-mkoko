// import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import emailjs from 'emailjs-com'
import "../App.css"
// const [loader] = useState(false);

//npm install emailjs-com --save

export default function Contact () {
 

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6x6pm3u', 'template_7eu991h', e.target, 'user_3gINCvpf8lPhdGJCiDhhU')
      .then((result) => {
          console.log(result.text);
          alert("Message has been Submitted");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return(
      
      <div>
        <form className="form" onSubmit={sendEmail}>
        <h4>Please Contact Us </h4>

        {/* <label>Name</label> */}
        <input name="name" placeholder="Name" className="inputs" type ="text"/>

        {/* <label>Email</label> */}
        <input name="email" placeholder="Email" className="inputs" type="text"/>
 
          {/* <label>Subject</label> */}
        <input name="subject" placeholder="Enter Subject" className="inputs" type="text"/>
     

        {/* <label>Message</label> */}
          <textarea type="text" placeholder="Your Message"  name="message" className="inputs"/>
        

        <input type="submit" className="sbtn" value="Submit">
        </input>

        
      {/* <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button> */}
      </form>
      <div>
      <div className="cont" class="social">
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
    );
  }


