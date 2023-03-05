
import React,{useState} from 'react'

export default function Prac() {
    const [registration, setRegistration] = useState({
        name: '',
        Email:"",
        Mobile:"",
        Password:"",
    })
    const [record, setRecord] = useState([])
    const changeHandler=(e)=>{
        const name =e.target.name;
        const value =e.target.value
        setRegistration({...registration,[name]:value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const newRecord={...registration, id:new Date().getTime().toString()}
        console.log(newRecord)
        setRecord([newRecord,record])
        console.log(record)
        setRegistration({name:"",Email:"", Mobile:"",Password:""})
        // setRegistration({name:"" ,Email:"",Mobile:"",Password:""})
        
    }
  return (
    <>
     <h1>I am practise the form</h1>
      <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name"
            value={registration.name}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="name">Email : </label>
            <input type="text" name="Email"
            value={registration.Email}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="name">Mobile : </label>
            <input type="text" name="Mobile"
            value={registration.Mobile}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="name">Password : </label>
            <input type="password" name="Password"
            value={registration.Password}
            onChange={changeHandler}
            />
        </div>
      <button type='submit'>submit</button>
      </form>
      {
        record.map((element)=>{
            return (
                <div className="pa" key={element.id}>
                    <p>{element.name}</p>
                    <p>{element.Email}</p>
                    <p>{element.Mobile}</p>
                    <p>{element.Password}</p>
                </div>
            )
        })
      }
    </>
  )
}
