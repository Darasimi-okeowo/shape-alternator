import React, {useState} from 'react'
import './App.css'

const App = () => {
    const [shape,setShape] = useState(true)
    let changeShape = () => {
      setShape( !shape)
}
  return (
    <div className="App">
        <span className={shape ? 'box' : 'circle'}></span>
        <br />
        <br />
        <button onClick={changeShape}>Click me!</button>
        <br/>
    </div>
  )
}

export default App
