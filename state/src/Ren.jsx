import React,{useEffect,useState} from 'react'

export default function Ren() {
    const [size, setsize] = useState(window.innerWidth)
    let resize=()=>{
        setsize(window.innerWidth)
    }
    useEffect(()=>{
        console.log('event is trigger')
        window.addEventListener(`resize`,resize)
        return(        
        window.addEventListener(`resize`,resize)
        )
    })
  return (
    <div>
      <h1>{size}</h1>
    </div>
  )
}
