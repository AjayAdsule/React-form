import { Password } from '@mui/icons-material';
import React, {useState} from 'react'

export default function Forms() {
    const [registration, setRegistration] = useState({
        name:"",
        Email:"",
        Mobile :"",
        Password:"",

    })
   
    const [people, setPeople] = useState([])
    const handler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name, value)
        setRegistration({...registration,[name]:value})
       
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
       
    }
  return (
    <>
      <h1>user registration</h1>
      <form onSubmit={handlesubmit} >
        <div >
            <label htmlFor="name">name : </label>
            <input type="text" name="name"
            value={registration.name}
             onChange={handler}/>
        </div>
        <div >
            <label htmlFor="name">Email : </label>
            <input type="text" name="Email" 
            value={registration.Email}
            onChange={handler}/>
        </div>
        <div >
            <label htmlFor="name">Mobile no : </label>
            <input type="text" name="Mobile"
            value={registration.Mobile}
            onChange={handler}/>
        </div>
        <div >
            <label htmlFor="name">password : </label>
            <input type="password" name="Password"
            value={registration.Password}
            onChange={handler}/>
        </div>
        <button type="submit">click</button>
      </form>
    </>
  )
}
