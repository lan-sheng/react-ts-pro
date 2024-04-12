type Props = {
  onGetMessage: (mes: string) => void
}

function Son({ onGetMessage }: Props) {
  return <button onClick={() => onGetMessage('子传父')}></button>
}
function App() {
  const getMsg = (mes: string) => {
    console.log(mes)
  }
  return (
    <>
      <Son onGetMessage={mes => console.log(mes)} />
      <Son onGetMessage={getMsg} />
    </>
  )
}

export default App
