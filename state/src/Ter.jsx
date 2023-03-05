import React,{useState} from 'react'

export default function Ter() {
    const [name, setname] = useState("")
    const [but, setbut] = useState(false)
  return (
    <div>
      <h1>{name || 'Blockchain'}</h1>
      <h2>{!name && "react"}</h2>
      <button onClick={(()=>setbut(!but))}>check error</button>
      {but && <h2>error...</h2>}
      {but ? (<p>Blockchain is future</p>):(<p>Blockchain is future doubtful</p>)}
    </div>
  )
}
