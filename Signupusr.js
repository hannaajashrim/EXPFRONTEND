import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './Signupusr.css'
function Signupusr() {


    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const navigate = useNavigate();


    const submithandler=async(e)=>
    {
        e.preventDefault();
        const display=await axios.post('http://localhost:4000/signup',{Name,Email,Password})
        console.log(display.data);

        navigate('/');
    }


  return (
    <div className='body'>

<div className='form_containersign'>
<div className='max-w-sm mx-auto w-96'>

    <Form>
    <div className='grid gap-4'>

    <Form.Group className="mt-5"  controlId="formBasicName">
      {/* className='nameboxsign' */}
        <Form.Label className='text_emps'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={Name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <div className='input-group grid gap-4'>
      <Form.Group className="mt-1" controlId="formBasicEmail">
        <Form.Label className='text_emps'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      </div>

      <div className='input-group grid gap-4'>
      <Form.Group className="mt-1" controlId="formBasicPassword">
        <Form.Label className='text_emps'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      </div>

      <div className="submit-btn">
      <Link to={`/`}><Button variant="primary" type="submit" className='border text-white bg-indigo-900 w-full' onClick={submithandler}>Register</Button></Link><br/><br />
      </div>

      <div className="submit-btn">
      <Link to={`/login`}><Form.Text className="text_login text-white">
        Already Registered? Click here to Login
      </Form.Text></Link>
      </div>
      </div>
    </Form>
    </div>
    </div>

    </div>
  )
}

export default Signupusr