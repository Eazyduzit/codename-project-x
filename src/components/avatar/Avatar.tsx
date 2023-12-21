import "./Avatar.css"

interface AvatarProps {
  name: string
  imageSrc: string
}

const Avatar: React.FC<AvatarProps> = ({ name, imageSrc }) => {
  return (
    <div className="avatarWrapper">
      <img className="avatarImage" src={imageSrc} alt={`photo of ${name}`} />
      <p className="avatarTitle">{`Hei, mitt navn er ${name}!`}</p>
      <p className="avatarParagraph">Jeg er en React og Typescript utvikler, i frontend..</p>
    </div>
  )
}
export default Avatar
