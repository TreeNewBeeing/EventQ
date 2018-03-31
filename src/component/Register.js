import React from 'react';
import {Link} from 'react-router';

class Register extends React.Component{

  constructor(props, context) {
        super(props, context);

        // Bind all functions so they can refer to "this" correctly
        this.registerAccount = this.registerAccount.bind(this);
    }

  registerAccount(e){
    // const access_code = document.getElementById("access_code").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const username = document.getElementById("username").value;
    const password_1 = document.getElementById("password_1").value;
    const password_2 = document.getElementById("password_2").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    // if(first_name==""||last_name==""||username==""||password_1==""||password_2==""){
    //     alert("Please fill in all required information!");
    //     e.preventDefault();
    // }
    // else if(password_1.length<8){
    //     alert("Password is too short! It has to be at least 8 characters!");
    //     e.preventDefault();
    // }
    // else if(password_1!=password_2){
    //     alert("Passwords do not match!");
    //     e.preventDefault();
    // }
    // else{
        console.log("A")
        const xhttp = new XMLHttpRequest();
        console.log(this.context);
        const history = this.props.history;
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                switch (xhttp.getResponseHeader('state')){
                    case 'success':
                        alert ("The account for " + username + " has been successfully created!");
                        history.push('/');
                        break;
                    default:
                        alert ("Registration Failed");
                        break;
                }

            }
        };
        xhttp.open('get', `/register?
            firstname=${first_name}&
            lastname=${last_name}&
            username=${username}&
            password=${password_1}&
            phone=${phone}&
            email=${email}
        `, true);
        xhttp.send();
    // }
  }

  render(){
    return (
      <div className="container">
        <div className="header" style={{width:350+"px", marginTop:0}}>
          <h2>Register An Account</h2>
        </div>
        <form method="get" action="/register">
          {/* <div className="input-group">
            <label>Access Code*</label>
            <input type="text" name="accesscode" id="access_code"></input>
          </div> */}
          <div className="input-group">
            <label>First Name*</label>
            <input type="text" name="first_name" id="first_name" placeholder=""></input>
          </div>
          <div className="input-group">
            <label>Last Name*</label>
            <input type="text" name="last_name" id="last_name" placeholder=""></input>
          </div>
          <div className="input-group">
            <label>Username*</label>
            <input type="text" name="username" id="username" placeholder=""></input>
          </div>
          <div className="input-group">
            <label>Password*</label>
            <input type="password" name="password_1" id="password_1" placeholder="xxxxxxxx"></input>
          </div>
          <div className="input-group">
            <label>Confirm Password*</label>
            <input type="password" name="password_2" id="password_2" placeholder="xxxxxxxx"></input>
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type="number" name="phone" id="phone" placeholder="(000)-000-0000"></input>
          </div>
          <div className="input-group">
            <label>Email*</label>
            <input type="email" name="email" id="email" placeholder="name@example.com"></input>
          </div>
          <p>By submitting this information, you indicate that you agree to EasyLineUp's <strong>Terms of Service</strong> and have read and understood our <strong>Privacy Policy</strong>.</p>
          <div className="input-group">
            <button type="button" className="btn" onClick={this.registerAccount}>Register</button>
          </div>
          <p>
            Already a Member? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    );
  }
}
export default Register;