import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import './App.css';

function Signup() {

    let [user, setUser] = useState({
        email:"",mobile:"",password:""
    });

    let data, value;

    let inputData = (main) => {
        console.log(main);
        data = main.target.data;
        value= main.target.value;

        setUser({...user, [data]:value});
    }

    return (
        <div className="col-md-6">
            <h1>Login Using JWT</h1><br></br><br></br>
            <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={user.data} onChange={inputData} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile" value={user.data} onChange={inputData} />
                    <Form.Text className="text-muted">
                        We'll never share your mobile otp with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={user.data} onChange={inputData} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
            </div> 
        </div>
    )
}

export default Signup;