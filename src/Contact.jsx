import React, { useState } from 'react';


const Contact= () =>{
  const [data,setData] = useState({ fullname:"",fathername:"",mobileno:"" , mail:"",  msg:"", })
  
  const InputEvent = (event) =>{
    const {name,value} =event.target;
    setData((preVal) =>{
      return{
        ...preVal,
        [name]:value,
      }
    })
  }

 const formSubmit = (e) =>{
  e.preventDefault(); 
  alert(`My name is ${data.fullname}.My Father name is ${data.fathername}.My Mobile no is ${data.mobileno}
  . My email adress is ${data.mail} and my msg is ${data.msg}`)
 }
 

 
  return(
    <>
      <div className="my-5">
        <h1 className="text-center ">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div classNam="row">
       <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} >
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" 
  class="form-control"
   id="exampleFormControlInput1"
   name="fullname" value={data.fullname} onChange={InputEvent}  
  placeholder="Enter your name..."/>

  <br/>
  <label for="exampleFormControlInput1" class="form-label">Father Name</label>
  <input type="text"
   class="form-control"
   id="exampleFormControlInput1"  
   name="fathername" value={data.fathername} onChange={InputEvent}
  placeholder="Enter Your Father Name..."/>

  <br/>
  <label for="exampleFormControlInput1" class="form-label">Mobile No</label>
  <input type="number"
   class="form-control" 
  id="exampleFormControlInput1" 
  name="mobileno" value={data.mobileno} onChange={InputEvent} 
  placeholder="Your mobile num..."/>

  <br/>
  <label for="exampleFormControlInput1" class="form-label">Your Email Adress</label>
  <input type="email" 
  class="form-control"
   id="exampleFormControlInput1" 
   name="mail" value={data.mail} onChange={InputEvent}
   placeholder="name@example.com"/>

  <br/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1"  name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
</div>
          <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form><br/>
       </div>
        </div>
      </div>
    </>
  )
}

export default Contact;