import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../../components/Alert";
import { useRouter } from "next/router";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      router.push("/");
    }
  }, [router, submit]);

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      setSubmit(true);

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      {error && <Alert variant="danger">{error}</Alert>}

      {loading && <div>Loading</div>}

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
