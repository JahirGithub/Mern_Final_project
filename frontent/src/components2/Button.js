// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn2'>Login</button>
//     </Link>
//   );
// }

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
// import './component.css';

let Login=()=>{


    let [user, setUser] = useState({
        email:"", password: ""
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
        let {email,password} = user;

        let res = await fetch("/newlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });
 
        let newdata = await res.json();

        if (newdata.status === 402 || !newdata) {
            window.alert("Login Unsucessful");
        } else {  
            window.alert("Login Sucessful");
        }
   }
    return (
        <div className="col-md-6">
            <h1>Login Using JWT</h1><br></br><br></br>
            <div>
                <form method="POST">

                    Email<br /><input type="text" placeholder="Enter email" name="email" value={user.email} onChange={handleInput} /><br /><br />


                    {/* Mobile<br /><input type="text" placeholder="Enter Mobile" name="mobile" value={user.mobile} onChange={handleInput} /><br /><br /> */}
                    Password<br /><input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleInput} />

                    <br />
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