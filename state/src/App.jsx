import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Array from './Array'
import Effect from './Effect'
import Ren from './Ren'
import Ter from './Ter'
import Size from './Size'
import Form from './Form'
import Useref from './Useref'
import Forms from './Forms'
import Prac from './Prac'
function App() {
 const [value, setvalue] = useState(0)

  return (
    <>
      {/* <h1>{value}</h1>
      <button onClick={()=>setvalue(value+1)}>click</button>
      <button onClick={()=> setvalue(value-1)}>Decrement</button>
      <button onClick={()=> setvalue(0)}>clear</button> */}
      {/* <Array></Array> */}
      {/* <Effect></Effect> */}
      {/* <Ren></Ren> */}
      {/* <Ter></Ter> */}
      {/* <Size></Size> */}
      {/* <Form></Form> */}
      {/* <Forms></Forms> */}
      <Useref></Useref>
      {/* <Prac></Prac> */}

    </>
  )
}

export default App
