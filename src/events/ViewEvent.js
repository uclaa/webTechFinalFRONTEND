import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewEvent() {


    const {id}=useParams()

    const[events,setEvent]=useState([]);

   

    const loadEventss= async () => {
        const results= await axios.get("http://localhost:8080/artists");
       setEvent(results.data);
    };

    const [event,setevent]=useState({
     
        
        eventName:"", 
        eventPlace:"",
        eventDate:"",
        eventTime:"",
        eventDescription:""
    })

    useEffect(()=>{
        
        loadEvent();
        
    },[]);

    


    const loadEvent = async ()=>{
        const result= await axios.get(`http://localhost:8080/event/${id}`);
        setevent(result.data);
    }

  return (
    <div className='Container bg-dark'>
        <div className='col'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-3'>Event Details</h2>

                <div className='card'>
                <div className='card-header'>Details of event : {event.eventName}

                <ul className='list-group list-group-flush'>
                    

                    <li className='list-group-item'>
                        <b>Venue:</b>
                        {event.eventPlace}

                    </li>

                    <li className='list-group-item'>
                        <b>Date:</b>
                        {event.eventDate}

                    </li>

                    <li className='list-group-item'>
                        <b>Time:</b>
                        {event.eventTime}

                    </li>

                    <li className='list-group-item'>
                        <b>Event Description:</b>
                        {event.eventDescription}

                    </li>

                    

                </ul>

                </div>
                </div>
            <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
            </div>

<br></br>

{/* <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

<table className="table border shadow table-hover">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">PERFORMING ARTISTS</th>
      
      
      
    </tr>
  </thead>
  </table>

  <tbody>

  {
        events.map((eventt,index) => (
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{eventt.artistName}</td>
      
      
      
      
     
    </tr>

        ))
    }
  </tbody>

</div> */}

            
            </div>
            </div>

            
  )
}
