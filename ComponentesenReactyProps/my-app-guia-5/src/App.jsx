import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getImageUrl} from './utiles.js'

function Avatar({person,size}){
  return (
    <img
    className = "avatar"
    src = {getImageUrl(person)}
    alt={person.name}
    width ={size}
    height = {size}
    />
  )
}

export default function Profile(){
  return (
    <div>
      <Avatar
      size ={100}
      person = {{
        name:'Katasu yajamiks',
        imageid:'000x23x'
      }}
      />
      <Avatar
      size ={90}
      person = {{
        name:'kkuno',
        imageid:'343x31'
      }}/>
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0)
//   const increment = () => setCount((count) => count + 1)

// function MyButton(prop){
//     return(
//       <button onClick = {prop.Fn}>BOTTOM {prop.count}</button>
//     );
//   }
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>

//       <div className="card">
//         <MyButton count={count} Fn ={increment}/>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
