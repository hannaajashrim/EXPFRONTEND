import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Loginuser.css";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./contexts/UserContext";

function Loginuser() {
  const navigate = useNavigate();
  const { user,setUser } = useContext(UserContext);
  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submithandler = async (event) => {
    event.preventDefault();
    const disp = await axios.post("http://localhost:4000/loginn", {
      Email,
      Password,
    });
    setUser(disp.data.user)
    navigate('/tableexp')
  };

  useEffect(() => {
   if (user) {
    navigate('/tableexp')
   }
  }, [user])
  

  return (
    <div className="maincontainer">
      <div className="form_container">
        <div className="max-w-sm mx-auto w-96">
          <Form>
            <div className="grid gap-4">
              <Form.Group className="mt-5" controlId="formBasicEmail">
                {/* className='mailbox' */}
                <Form.Label className="textempswd">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <div className="input-group grid gap-4">
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  {/* className='pswbox' */}
                  <Form.Label className="textempswd">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </div>

              <div className="submit-btn">
                <Button
                  variant="primary"
                  type="submit"
                  className="border text-white bg-indigo-900 w-full"
                  onClick={submithandler}
                >
                  Login
                </Button>
                <br />
                <br />
              </div>

              <div className="submit-btn">
                <Link to={`/signup`}>
                  <Form.Text className="text_register">
                    Not a User? Click here to Register
                  </Form.Text>
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Loginuser;
