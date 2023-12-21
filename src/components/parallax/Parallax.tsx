import Avatar from "../avatar/Avatar"
import "./Parallax.css"

interface ParallaxProps {
  imgSrc1: string
  imgSrc2: string
  description1: string
  description2: string
  title: string
}

const Parallax: React.FC<ParallaxProps> = ({
  imgSrc1,
  imgSrc2,
  description1,
  description2,
  title,
}) => {
  return (
    <div className="parallaxWrapper">
      <header>
        <img className="parallaxBackground" src={imgSrc1} alt={`photo of ${description1}`} />
        <img className="parallaxForeground" src={imgSrc2} alt={`photo of ${description2}`} />
        <h1 className="parallaxTitle">{title}</h1>
      </header>
      <Avatar name="Marius" imageSrc="/images/image001.png" />
    </div>
  )
}
export default Parallax
