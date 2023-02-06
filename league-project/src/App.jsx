import { useState } from 'react'

function App() {
  const [count, setCount] = useState("BEM VINDOS AO LEAGUE OF CÉSAR")

  return (
    <div>
        <h1> {count} </h1>
    </div>
  )
}

export default App
