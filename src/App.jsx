import { useState , useCallback} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [noAllowed, setNoAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = ""
  },[length,noAllowed,charAllowed,setPassword])

  return (
   <div>
   <p className="text-4xl text-center text-white">Password Generator</p>
   </div>
  )
}

export default App
