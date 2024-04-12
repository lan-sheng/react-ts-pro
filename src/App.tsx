type Props = {
  className: string
  title: null
}

function Button(props: Props) {
  return <button className={props.className}></button>
}
function App() {
  return (
    <>
      app
      <Button className="btn" title={null} />
    </>
  )
}

export default App
