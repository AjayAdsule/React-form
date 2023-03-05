import React,{useState} from 'react'


export default function Array()
// i am doing here object changing
// i am giving value to person and then change with spread opretor
{ const [person, setperson] = useState({
    name: 'Ajay',
    age: 20,
    message:"I am lerning blockchain"
})
const change=()=>{
    setperson({...person,message:"Ajay is lerning blockchain"})
}
  return (
    <div>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button onClick={change}>click here</button>
    </div>
  )
}
