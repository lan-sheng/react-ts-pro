import { useEffect, useRef } from 'react'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  const timerId = useRef<number | undefined>(undefined)

  useEffect(() => {
    inputRef.current?.focus()

    timerId.current = setInterval(() => {
      console.log('hello world')
    }, 1000)

    return () => {
      clearInterval(timerId.current)
    }
  }, [])
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  )
}

export default App
