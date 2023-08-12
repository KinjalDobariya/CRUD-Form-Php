import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

function View() {

  const [Arr, setarr] = useState([]);
  const [status, setstatus] = useState(false);

  useEffect(() => {
    loadRecord();
    
  })

  const loadRecord = () =>{
    axios.get('http://localhost/phpdemoform/viewcontact.php')
      .then(function (result) {
        // handle success
        console.log(result.data);
        setarr(result.data);
        setstatus(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  } 

  const handleDelete = (contact_id) => {
    axios.get(`http://localhost/phpdemoform/deletecontact.php?id=${contact_id}`)
      .then(result => {
        console.log(result);
        loadRecord();
      })
      .catch(error => {
        console.log(error);
        alert("Error in Delete code")
      });

  };


  if (status) {


    return (
      <>

        <div>
          <h1>View Record...</h1>
        </div>

        <div className="tablearea">
          <Table striped bordered hover variant="secondary" className='w-75 text-center m-auto mt-4'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone</th>
                <th>Date</th>
                <th>City</th>
                <th>Address</th>
                <th>Hobby</th>
                <th>Gender</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Arr.map((item, index) => (

                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.phone}</td>
                  <td>{item.date}</td>
                  <td>{item.city}</td>
                  <td>{item.address}</td>
                  <td>{item.hobby}</td>
                  <td>{item.gender}</td>
                  <td> <Link to='' onClick={() => handleDelete(item.id)}><MdDelete className='icon'></MdDelete></Link></td>

                </tr>

              ))}


            </tbody>
          </Table>
        </div>



      </>
    );
  }
}

export default View;
