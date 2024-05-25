import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'

function Expensedelete() {

    const navigate = useNavigate();
    const {user} = useParams();

    const [delexp, setdelexp] = useState([]);

    useEffect(() => {
      axios.delete(`http://localhost:4000/deleteitem/${user}`).then((res)=>
      {
        setdelexp(res.data);
        console.log(res.data);
      })
     
    }, [])



    const handlesubmit = () =>
    {
      alert("Deleted successfully");
    }
    


  return (
    <div>
         <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Deleted successfully</Modal.Title>
        </Modal.Header>

      

        <Modal.Footer>
          <Link to={'/tableexp'}><Button variant="secondary">Close</Button></Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
  )
}

export default Expensedelete