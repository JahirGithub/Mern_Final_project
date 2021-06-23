// import React from 'react';
// import '../../App.css';

// export default function Products() {
//   return <h1 className='products'>PRODUCTS</h1>;
// }


import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import './login.css';
import Axios from 'axios';
import jwt from 'jwt-decode';

import { useHistory } from 'react-router';
let Login = () => {


let history = useHistory();

    let [user, setUser] = useState({
        email: "", password: ""
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
        let { email, password } = user;

        if( email == "" || password == ""){
          window.alert("Please enter the input field");
          return;
      }

        Axios.post('/axioslogin', {
            email: email,
            password: password,

        }).then((result) => {
            console.log(result)
            if (result.data.access) {
                const token1 = result.data.access;
                localStorage.setItem('token', token1)
                let user = jwt(token1)
                console.log(user);

                window.alert("Login Sucessful")
                history.push('/FinalBoard')

            } else {
                if (result.data.message) {
                  setUser({email:"",mobile:"",password:""})
                    window.alert("Login Unsucessful")
                }

            }
        })

      }
  return (
    <div className="col-md-6">
      <h1>Welcome to Login Page</h1><br></br><br></br>
      <div>
        <form className='loginForm' method="POST">

          Please Enter Your  Email<br /><input type="text" placeholder="Enter email" name="email" value={user.email} onChange={handleInput} /><br /><br />


          {/* Mobile<br /><input type="text" placeholder="Enter Mobile" name="mobile" value={user.mobile} onChange={handleInput} /><br /><br /> */}
          Please Enter Your Password<br /><input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleInput} />

          <br />
          <br />
          <Button variant="primary" type="submit" onClick={userData}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}


export default Login;