import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Player name="Dani" club="Barca"></Player>
      <Player name="Messi" club="Miami"></Player>
      <Player name="Rolando" club="Al Naser"></Player>

    </>
  )
}

// const{name, club} = {name:"Dani", club:"Barca"}
function Player({name, club}){
  return(
    <div className="student">
      <h3>Name :{name} </h3>
      <p>Club : {club} </p>
    </div>
  )
}

export default App
