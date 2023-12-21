import Avatar from "../avatar/Avatar"
import "./Parallax.css"

interface ImageTypes {
  imgSrc1: string
  imgSrc2: string
  description1: string
  description2: string
}

const images: ImageTypes = {
  imgSrc1: "./images/mountain1.jpg",
  imgSrc2: "./images/trees1.png",
  description1: "mountain range",
  description2: "pine trees",
}

const Parallax: React.FC = () => {
  return (
    <div className="parallaxWrapper">
      <header>
        <img
          className="parallaxBackground"
          src={images.imgSrc1}
          alt={`photo of ${images.description1}`}
        />
        <img
          className="parallaxForeground"
          src={images.imgSrc2}
          alt={`photo of ${images.description2}`}
        />
        <h1 className="parallaxTitle">Velkommen!</h1>
      </header>
      <Avatar />
    </div>
  )
}
export default Parallax
