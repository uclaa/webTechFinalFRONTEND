import React, { useState } from 'react'


export default function CreateEvent() {

    const [event,setevent]=useState({
     
        eventCode:"",
        eventName:"", 
        eventPlace:"",
        date:"",
        time:"",
        eventDescription:""
    })
    const{eventCode,eventName,eventPlace,date,time,eventDescription}=event


    const onInputChange=(e)=>{

        setevent({...event, [e.target.eventCode]:e.target.value})
    }

  return (
    <div className='Container bg-dark'>
        <div className='col'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-3'>Register an Event</h2>


                <div className='mb-3'> 
                    <label htmlFor='eventCode' className='form-label'>Event Code</label>
                    <input type='text' className='form-control' placeholder='Enter the event code' name='eventCode' value={eventCode} onChange={(e)=>onInputChange(e)}/>

                </div>

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
                    <input type='date' className='form-control' name='eventDate' value={date} onChange={(e)=>onInputChange(e)}/>

                </div>

                <div className='mb-3'> 
                    <label htmlFor='eventTime' className='form-label'>Time</label>
                    <input type='time' className='form-control' name='eventTime' value={time} onChange={(e)=>onInputChange(e)}/>

                </div>

            

                <div className='mb-3'> 
                    <label htmlFor='eventDescription' className='form-label'>Event Description</label>
                    <input type='text' className='form-control' placeholder='Describe the event' name='eventDescription' value={eventDescription} onChange={(e)=>onInputChange(e)}/>

                </div>

                
                <button type='submit' className='btn btn-outline-success'>Register</button>

                <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>

                
                


            </div>

        </div>

    </div>
  )
}
