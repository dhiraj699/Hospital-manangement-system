import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contactNumber: "",
    address: "",
  });

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-3xl font-bold underline">
        Hello Vite + React!
      </div>
    </>
  )
}

export default App
