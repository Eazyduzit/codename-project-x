import "./Avatar.css"

interface AvatarProps {
  name: string
  imageSrc: string
}

const Avatar: React.FC<AvatarProps> = ({ name, imageSrc }) => {
  return (
    <div className="avatar-wrapper stacking-card">
      <img className="avatar-image" src={imageSrc} alt={`photo of ${name}`} />
      <p className="avatar-title">{`Hei, mitt navn er ${name}!`}</p>
      <p className="avatar-paragraph">Jeg er en React og Typescript utvikler, i frontend..</p>
    </div>
  )
}
export default Avatar
