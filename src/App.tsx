import "./App.css"
import Parallax from "./components/parallax/Parallax"
import Stacking from "./components/stacking/Stacking"

function App() {
  return (
    <div className="App">
      <div className="parallax-wrapper">
        <Parallax
          imgSrc1="./images/mountain1.jpg"
          imgSrc2="./images/trees1.png"
          description1="mountain range"
          description2="pine trees"
          title="Velkommen!"
        />
        <Stacking />
      </div>
    </div>
  )
}

export default App
