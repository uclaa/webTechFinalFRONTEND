import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditEvent() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [event,setevent]=useState({
     
        
        eventName:"", 
        eventPlace:"",
        eventDate:"",
        eventTime:"",
        eventDescription:""
    })
    const{eventName,eventPlace,eventDate,eventTime,eventDescription}=event


    const onInputChange=(e)=>{

        setevent({...event, [e.target.name]:e.target.value});
    };


    useEffect(()=>{
        loadEvent();
    },[]);

    const onSubmit= async (e)=>{

        e.preventDefault();
        await axios.put(`http://localhost:8080/event/${id}`, event);
        navigate("/")

    };

    const loadEvent = async ()=>{
        const result= await axios.get(`http://localhost:8080/event/${id}`);
        setevent(result.data);
    }



  return (
    

    <div className='Container bg-dark'>
        <div className='col'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-3'>Edit an Event</h2>

                <form onSubmit={(e)=>onSubmit(e)}>


                <div className='mb-3'> 
                    <label htmlFor='eventName' className='form-label'>Event Name</label>
                    <input type='text' className='form-control' placeholder='Enter the event name' name='eventName' value={eventName} onChange={(e)=>onInputChange(e)}/>

                </div>

                <div className='mb-3'> 
                    <label htmlFor='eventPlace' className='form-label'>Venue</label>
                    <input type='text' className='form-control' placeholder='Enter the event venue' name='eventPlace' value={eventPlace} onChange={(e)=>onInputChange(e)}/>

                </div>

                <div className='mb-3'> 
                    <label htmlFor='eventDate' className='form-label'>Date</label>
                    <input type='text' className='form-control' placeholder='2024-12-02 format' name='eventDate' value={eventDate} onChange={(e)=>onInputChange(e)}/>

                </div>

                <div className='mb-3'> 
                    <label htmlFor='eventTime' className='form-label'>Time</label>
                    <input type='text' className='form-control' placeholder='16:23 PM format' name='eventTime' value={eventTime} onChange={(e)=>onInputChange(e)}/>

                </div>

            

                <div className='mb-3'> 
                    <label htmlFor='eventDescription' className='form-label'>Event Description</label>
                    <input type='text' className='form-control' placeholder='Describe the event' name='eventDescription' value={eventDescription} onChange={(e)=>onInputChange(e)}/>

                </div>

                
                <button type='submit' className='btn btn-outline-success'>Register</button>

                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>


              </form>  
                


            </div>

        </div>

    </div>

  )
}
