import React,{useState,useEffect} from 'react'

export default function Size() {
    const [size, setSize] = useState(window.innerWidth)
    const checksize=()=>setSize(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", checksize)
        return ()=>{
            window.removeEventListener("resize",checksize)
        }
    })
  return (
    <div>
      <h1>Window Size</h1>
      <p>{size}</p>
    </div>
  )
}
