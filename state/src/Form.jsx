import React,{useState,useEffect} from 'react'

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([])
  
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(name,email)
    
  }
 




  return (
    <>
      <form onSubmit={handlesubmit} >
        <div className="form-control" >
            <label htmlFor="FirstName">Name : </label>
            <input type="text" id="firstname" name="firstname" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="Email">Email : </label>
            <input type="text" id="Email" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type='submit' >click here</button>

        </div>
      </form>
    </>
  )
}
