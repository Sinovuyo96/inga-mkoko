// import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import emailjs from 'emailjs-com'
import "../App.css"
// const [loader] = useState(false);

//npm install emailjs-com --save

export default function Contact () {
  // constructor(props){
  //   super(props);
  //   this.state = [{name:''},
  //   this.state = {email:''},
  //   this.state = {subject:''},
  //   this.state = {message:''}]
  //   this.handleSubmit = this.handleSubmit.bind(this)
    
  // }

  // handleChange(event){

  // }

  // handleSubmit(event){
  //   alert('submitted: + this.state.Submit')
  //   event.preventDefault();

  // }

  // function sendEmail(e) {
  //   e.preventDefault();
    
  //   emailjs.sendForm('gmail', 'template_7eu991h', e.target,'user_3gINCvpf8lPhdGJCiDhhU')
  //   .then((result) => {
  //     console.Console.log(result.text);

  //   }, (error) => {
  //     console.log(error.text);
  //   });
  //   e.target.reset()
    
  // }

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


//   constructor(props) {
//     super(props);
//     this.state = {value: [""]};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
      
//   <div> 
//   <h1 class="font-weight-light">Connect with us and Send an Email:</h1>
  
  

//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <input type="text" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         {/* <label>
//           <input type="text" placeholder="Surname" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <label>
//           <input type="text" placeholder="Message" value={this.state.value} onChange={this.handleChange} />
//         </label> */}
//         <input type="submit" value="Submit" />
//       </form>

      
//         <div> 
//           <h1 className="social">Find us on social media:</h1>
        
//         </div>
//       </div>
//     );
//   }
// }


// function Contact() {
//   return (
//     <div className="contact">
//       <div class="container">
//         <div class="row align-items-center my-5">
//           <div class="col-lg-7">
//             <img
//               class="img-fluid rounded mb-4 mb-lg-0"
//               src="http://placehold.it/900x400"
//               alt=""
//             />
//           </div>
//           <div class="col-lg-5">
//             <h1 class="font-weight-light">Contact Us</h1>
//             <form>
//   <label>
  
//     <input type="text" placeholder="Name" />
    
//     <input type="text" placeholder ="Surname" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

