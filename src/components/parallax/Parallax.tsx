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
    <div className="parallax-header">
      <img className="parallax-background" src={imgSrc1} alt={`photo of ${description1}`} />
      <img className="parallax-foreground" src={imgSrc2} alt={`photo of ${description2}`} />
      <h1 className="parallax-title">{title}</h1>
    </div>
  )
}
export default Parallax
