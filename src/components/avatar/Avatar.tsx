import "./Avatar.css"

interface AvatarProps {
  name: string
  imageSrc: string
  text: string
}

const Avatar: React.FC<AvatarProps> = ({ name, imageSrc, text }) => {
  return (
    <div className="avatar-wrapper stacking-card">
      <img className="avatar-image" src={imageSrc} alt={`photo of ${name}`} />
      <p className="avatar-title">{`Hei, mitt navn er ${name}!`}</p>
      <p className="avatar-paragraph">{text}</p>
    </div>
  )
}
export default Avatar
