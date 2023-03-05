import React, { useEffect, useRef, useState } from 'react'


export default function Useref() {
    const refcontainer= useRef(null)
    const div = useRef(null)
    const handler=(e)=>{
        e.preventDefault();
        console.log("i am checking handler")
        console.log(refcontainer.current.value)
        console.log(div.current)

    }
  return (
    <>
      <h1>use ref</h1>
      <form  onSubmit={handler}>
        <div>
            <input type="text" ref={refcontainer}/>
            <button type="submit">clicked here</button>
        </div>
      </form>
      <div ref={div}>Hello blockchain</div>
    </>
  )
}
