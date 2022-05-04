import {Button, Form, Row} from "react-bootstrap";
import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        if(password !==confirm) {
            setMessage("Password Missmatch");
        } else {
            setMessage(null)

            try {
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                setLoading(true);

                const {data} = await axios.post(
                    "http://localhost:5000/api/users",
                    {name, email, password},
                    config
                );

                setLoading(false);
                localStorage.setItem("userInfo",JSON.stringify(data));
            } catch (error) {
                setError(error.response.data.message);
                setLoading(false);
            }


        }
    }

    return (
        <Form onSubmit={submitHandler}>
{error && <Alert variant="danger">{error}</Alert>}

{message && message}

{loading && <div>Loading</div>}

<Form.Group controlId="formName">
  <Form.Label>Name</Form.Label>
  <Form.Control
    type="name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    placeholder="Enter name"
    
  />
</Form.Group>

<Form.Group controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control
    type="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    placeholder="Enter email"
    
  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control
    type="password"
    value={password}
    placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
  />
</Form.Group>

<Form.Group controlId="formConfirmPassword">
  <Form.Label>Confirm Password</Form.Label>
  <Form.Control
    type="password"
    value={confirm}
    placeholder="Confirm Password"
    onChange={(e)=>setConfirm(e.target.value)}
  />
</Form.Group>

<Button variant="primary" type="submit">
  Submit
</Button>
<div>Already have account?</div>
</Form>
    );
}

export default Signup;