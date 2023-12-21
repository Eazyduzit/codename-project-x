import Avatar from "../avatar/Avatar"
import "./Parallax.css"

const Parallax = () => {
  return (
    <div className="ParallaxWrapper">
      <header>
        <img className="background" src="mountain1.jpg" alt="mountain range" />
        <img className="foreground" src="trees1.png" alt="pine trees" />
        <h1 className="title">Welcome!</h1>
      </header>
      <section>
        <Avatar />
      </section>
    </div>
  )
}
export default Parallax
