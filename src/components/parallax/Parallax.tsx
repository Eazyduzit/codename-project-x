import Avatar from "../avatar/Avatar"
import "./Parallax.css"

const images = {
  imgSrc1: "./mountain1.jpg",
  imgSrc2: "./trees1.png",
  description1: "mountain range",
  description2: "pine trees",
}

const Parallax = () => {
  return (
    <div className="ParallaxWrapper">
      <header>
        <img className="background" src={images.imgSrc1} alt={`photo of ${images.description1}`} />
        <img className="foreground" src={images.imgSrc2} alt={`photo of ${images.description2}`} />
        <h1 className="title">Welcome!</h1>
      </header>
      <section>
        <Avatar />
      </section>
    </div>
  )
}
export default Parallax
