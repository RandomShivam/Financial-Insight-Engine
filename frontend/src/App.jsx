import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")  // call backend
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error: " + err))
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
    </div>
  )
}

export default App
