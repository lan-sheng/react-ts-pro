import { useState } from 'react'

function App() {
  const [count, setCount] = useState(true)
  const change = () => setCount(!count)
  const [arr, setArr] = useState(['1', '2', '3', 4, 5, 6])
  const changeArr = () => {
    setArr([...arr, 4])
  }
  return (
    <>
      app
      {count}
      {arr}
    </>
  )
}

export default App
