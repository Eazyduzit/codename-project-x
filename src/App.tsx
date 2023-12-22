import "./App.css"
import Parallax from "./components/parallax/Parallax"

function App() {
  return (
    <div className="App">
      <Parallax
        imgSrc1="./images/mountain1.jpg"
        imgSrc2="./images/trees1.png"
        description1="mountain range"
        description2="pine trees"
        title="Velkommen!"
      />
    </div>
  )
}

export default App
