import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Main from "../../components/Screen/Main";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();

    if (password !== confirm) {
      setMessage("Password Missmatch");
    } else {
      setMessage(null);

      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);

        const { data } = await axios.post(
          "http://localhost:5000/api/users",
          { name, email, password },
          config
        );

        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data);
        setLoading(false);
      }
    }
  };

  return (
    <Main container={["xs"]}>
      <Form className="form" onSubmit={submitHandler}>
        {error && <div variant="danger">{error}</div>}

        {message && message}

        {loading && <div>Loading</div>}

        <Form.Group class="input" controlId="formName">
          <Form.Label class="label">Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group class="input" controlId="formBasicEmail">
          <Form.Label class="label">Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group class="input" controlId="formBasicPassword">
          <Form.Label class="label">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group class="input" controlId="formConfirmPassword">
          <Form.Label class="label">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirm}
            placeholder="Confirm Password"
            onChange={e => setConfirm(e.target.value)}
          />
        </Form.Group>

        <Button className="submit" variant="primary" type="submit">
          Submit
        </Button>
        <div>Already have account?</div>
      </Form>
    </Main>
  );
};

export default Signup;
