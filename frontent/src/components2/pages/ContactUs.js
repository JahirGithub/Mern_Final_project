// import React from 'react';
// import '../../App.css';

// export default function ContactUs() {
//   return <h1 className='contact-us'>CONTACT</h1>;
// }


import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import './Singup.css';


let Signup = () => {


  let [user, setUser] = useState({
    email:"", mobile: "", password: ""
});

let name, value;

let handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
}

var userData = async (e) => {
    e.preventDefault();
    let {email,mobile,password} = user;

    if( email == "" || mobile == "" || password == ""){
      window.alert("Please enter the input field");
      return;
  }

    let res = await fetch("/newsignup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,mobile,password
        })
    });

    let newdata = await res.json();

    if (newdata.status === 402 || !newdata) {
        window.alert("Registration Unsucessful");
    } else {  
      setUser({email:"",mobile:"",password:""})
        window.alert("Registration Sucessful");
    }
}
  return (
    <div >
      <h1>Welcome to Sign up Page</h1><br></br><br></br>
      <div>
        <form className="singupForm" method="POST">

        Please Enter Your  Email<br /><input type="text" placeholder="Enter email" name="email" value={user.email} onChange={handleInput} /><br /><br />


        Please Enter Your Mobile<br /><input type="text" placeholder="Enter Mobile" name="mobile" value={user.mobile} onChange={handleInput} /><br /><br />
        Please Enter Your  Password<br /><input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleInput} /><br/><br/>
        {/* Enter Conform  Password<br /><input type="password" placeholder="Enter conform Password" name="conPassword" value={user.conPassword} onChange={handleInput} /><br/><br/> */}


          <Button variant="primary" type="submit" onClick={userData}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}


export default Signup;