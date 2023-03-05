import React, {useEffect,useState} from 'react'

export default function Effect() {
    const [value, setValue] = useState(0)
    useEffect(()=>{
        console.log("useeffect is rendering")
        document.title=`new message ${value}`
    })
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>setValue(value+1)}>increment</button>
    </div>
  )
}
