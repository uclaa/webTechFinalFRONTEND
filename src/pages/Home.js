
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function Home() {

    const[events,setEvent]=useState([]);
    const[search,setSearch]=useState('');

    const {eventCode}=useParams()

    useEffect(() => {
        loadEvents();
    },[]);

    const loadEvents= async () => {
        const result= await axios.get("http://localhost:8080/event");
       setEvent(result.data);
    };

    const deleteEvent =async (eventCode) => {
        await axios.delete(`http://localhost:8080/event/${eventCode}`);
        loadEvents();
    }



  return (
    <div className="container bg-dark">
        <div className='py-4'>



        <input type='text' className='form-control' placeholder='search event'  onChange={(e)=>setSearch(e.target.value)}/>
        <br></br>


            <table className="table border shadow table-hover">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">EVENT CODE</th>
      <th scope="col">EVENT NAME</th>
      <th scope="col">PLACE</th>
      <th scope="col">DATE</th>
      <th scope="col">TIME</th>
      <th scope="col">EVENT DESCRIPTION</th>
      
      
      <th scope="col">ACTION</th>
      
    </tr>
  </thead>
  <tbody>

    {
        events.filter((eventt)=> {
            return search.toLowerCase === '' ? eventt : eventt.eventName.toLowerCase().includes(search);
        })
        .map((eventt,index) => (
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{eventt.eventCode}</td>
      <td>{eventt.eventName}</td>
      <td>{eventt.eventPlace}</td>
      <td>{eventt.eventDate}</td>
      <td>{eventt.eventTime}</td>
      <td>{eventt.eventDescription}</td>
      <td>
        <Link className='btn btn-outline-success mx-2' to={`/ViewEvent/${eventt.eventCode}`}>View</Link>
        <Link className='btn btn-outline-primary mx-2' to={`/EditEvent/${eventt.eventCode}`}>Modify</Link>
        <button className='btn btn-danger mx-2' onClick={()=>deleteEvent(eventt.eventCode)}>Delete</button>
      </td>
      
     
    </tr>

        ))
    }

    
  </tbody>
</table>

        </div>

    </div>
  )
}
