import React, {useState} from 'react'
import { BsFillSquareFill } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';
import './App.css'

const App = () => {
    const [shape,setShape] = useState(<BsFillSquareFill />)
    let changeShape = () => {
      setShape( <BsCircle />)
}
  return (
    <div className="App">
      <h1>Changes text on click</h1>
                <br/>
                <h3>{shape}</h3>
                <br/>
                <button onClick={changeShape}>Click me!</button>
                <br/>
    </div>
  )
}

export default App
