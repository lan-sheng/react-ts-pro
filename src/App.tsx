import { useState } from 'react'

type User = {
  name: string
  age: number
}

function App() {
  const [user, setUser] = useState<User | null>(null)
  const changeUser = () => {
    setUser({
      name: 'zhangsan',
      age: 18,
    })
    setTimeout(() => {
      setUser(null)
    }, 1000)
  }
  return (
    <>
      app
      {user?.age}
      {user?.name}
      <button onClick={changeUser}>change user</button>
    </>
  )
}

export default App
