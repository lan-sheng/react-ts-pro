type Props = {
  className: string
  title: null
  children: React.ReactNode
}

function Button(props: Props) {
  return <button className={props.className}>{props.children}</button>
}
function App() {
  return (
    <>
      <Button className="btn" title={null}>
        111
      </Button>
      <Button className="btn" title={null}>
        <span>span</span>
      </Button>
    </>
  )
}

export default App
