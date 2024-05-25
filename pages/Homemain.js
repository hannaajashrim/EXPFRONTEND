import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Homemain.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { default as api } from "../Store/apiSlice";
import UserContext from "../contexts/UserContext";

function Homemain() {
  const { user } = useContext(UserContext);
  const { data: categories } = api.useGetcategoriesQuery();

  const navigate = useNavigate();

  const [type, settype] = useState("");
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");

  const handlesubmit = async (sub) => {
    sub.preventDefault();
    if (user) {
      const { data } = await axios.post("http://localhost:4000/createlist", {
        type,
        name,
        amount,
        user: user._id,
      });
      if (data.success) {
        navigate("/tableexp");
      } else {
        alert("failed");
      }
    } else {
      navigate("/login");
    }
  };

 
  return (
    <div className="form max-w-sm mx-auto w-96">
      <Form onSubmit={handlesubmit}>
        <div className="grid gap-4">
          <Form.Select
            className="mt-5 form-input"
            aria-label="Default select example"
            defaultValue="savings"
            onChange={(e) => settype(e.target.value)}
          >
            {categories?.map((cat) => (
              <option key={cat.type} value={cat.type}>
                {cat.type}
              </option>
            ))}
          </Form.Select>
          <div className="input-group grid gap-4">
            <Form.Group className="form-input" controlId="formBasicamount">
              <Form.Control
                className="nameinput"
                type="name"
                placeholder="Enter the name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                name="name"
              />
            </Form.Group>
          </div>

          <div className="input-group grid gap-4">
            <Form.Group className="mb-3" controlId="formBasicamount">
              <Form.Control
                className="nameinput"
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                name="amount"
              />
            </Form.Group>
          </div>

          <div className="submit-btn">
            <Button
              className="border py-2 text-white bg-indigo-900 w-full"
              type="submit"
            >
              Add Expense
            </Button>
          </div>

          <Link to={"/tableexp"}>
            <Button
              className="border py-2 text-white bg-indigo-900 w-full"
              type="submit"
            >
              Go Back
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Homemain;
