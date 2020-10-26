// import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "../App.css"



class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = [{name:''},
    this.state = {surname:''},
    this.state = {message:''}]
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleChange(event){

  }

  handleSubmit(event){
    alert('submitted: + this.state.Submit')
    event.preventDefault();

  }


  render(){
    return(
      <form>
        Name
        <input placeholder="type name" className="inputs" type ="text" value={this.state.name} onChange={this.handleChange()}>
        </input>
        <br/>

        Surname
        <input placeholder="type surname" className="inputs" type="text" value={this.state.surname} onChange={this.handleChange}>
        </input>
        <br/>
        <label>
          <input type="text" placeholder="message" className="inputs" value={this.state.message} onChange={this.handleChange}>
          </input>
        </label>

        <input type="submit" className="sbtn" value="Submit">
        </input>
      </form>
    );
  }
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

export default Contact
