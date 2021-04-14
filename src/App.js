import React, {useState} from 'react'
import './App.css'

const App = () => {

  // for more than 2 shapes
  const[shape,setShape] = useState("box")
  const shapeChanger = () => {
      const shapeDeterminant = Math.floor(Math.random() * 7);
      if (shapeDeterminant === 0) { setShape("box")};
      if (shapeDeterminant === 1) { setShape("circle")};
      if (shapeDeterminant === 2) { setShape("triangle")};
      if (shapeDeterminant === 3) { setShape("parallelogram")};
      if (shapeDeterminant === 4) { setShape("star-five")};
      if (shapeDeterminant === 5) { setShape("hexagon")};
      if (shapeDeterminant === 6) { setShape("heart")};
    }


    
  return (
    <div className="App">
        <span className={shape}></span>
            <br />
            <br />
            <button onClick={shapeChanger}>Click me!</button>
    </div>
  )
}


// for 2 shapes

// const [shape,setShape] = useState(true)
//     const [box,setBox] = useState('box')
//     let changeShape = () => {
//       setShape( !shape)
//       setBox(!box)
//}

//       return (
//         <div className="App">
//             <span className={shape ? 'box' : 'circle'}></span>
//             <br />
//             <br />
//             <button onClick={changeShape}>Click me!</button>
//             <br/>
//         </div>
//       )
export default App
