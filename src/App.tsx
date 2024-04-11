import { useState } from 'react'

type User = {
  name: string
  age: number
}

function App() {
  const [user, setUser] = useState<User>({ name: '1', age: 2 })
  const changeUser = () => {
    setUser({ name: '2', age: 3 })
  }
  // const [user, setUser] = useState<User>(() => ({ name: '1', age: 2 }))
  // const changeUser = () => {
  //   setUser(() => ({ name: '2', age: 3 }))
  // }
  // const [user, setUser] = useState<User>()
  // const changeUser = () => {
  //   setUser(undefined)
  // }

  return (
    <>
      app
      {user?.age}
      {user?.name}
    </>
  )
}

export default App
