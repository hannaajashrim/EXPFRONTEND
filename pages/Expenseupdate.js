import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form, Link, useNavigate, useParams } from 'react-router-dom'

function Expenseupdate() {

    const navigate = useNavigate();

    const [editlist, seteditlist] = useState([])
    const {user} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/getsinglelist/${user}`).then((res)=>
        {
            seteditlist(res.data);
            console.log(res.data);
        })
     
    }, [])


    const [type, settype] = useState(editlist.type);
    const [name, setname] = useState(editlist.name);
    const [amount, setamount] = useState(editlist.amount);
    

    const handlesubmit = () =>
    {
        axios.put(`http://localhost:4000/updateitem/${user}`,{
        type,
        name,
        amount
      })
        .then((res)=>
        {
            console.log(`Item with ID ${user} updated`);
        })
        navigate('/tableexp')
    }

  return (
    <div>


    <Form onSubmit={handlesubmit}>


      <Form.Group className="mb-3" controlId="formBasicamount">
        <Form.Control type="text" placeholder="Enter type" value={editlist.type} onChange={(e)=>settype(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiccategory">
        <Form.Control type="text" placeholder="Enter Expense name" value={editlist.name} onChange={(e)=>setname(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicamount">
        <Form.Control type="number" placeholder="Enter the amount" value={editlist.amount} onChange={(e)=>setamount(e.target.value)}/>
      </Form.Group>

      <Link to={'/tableexp'}><Button variant="primary" type="submit">
        Back 
      </Button></Link>
     
      <Link to={'/tableexp'}><Button variant="primary" type="submit">
        Edit 
      </Button></Link>
    </Form>

    </div>
  )
}

export default Expenseupdate