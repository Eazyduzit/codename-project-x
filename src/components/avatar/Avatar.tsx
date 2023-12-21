import "./Avatar.css"

interface AvatarTypes {
  name: string
  imageSrc: string
}

const user: AvatarTypes = {
  name: "Marius",
  imageSrc: "/images/image001.png",
}

const Avatar: React.FC = () => {
  return (
    <div className="avatarWrapper">
      <img className="avatarImage" src={user.imageSrc} alt={`photo of ${user.name}`} />
      <p className="avatarTitle">{`Hei, mitt navn er ${user.name}!`}</p>
      <p className="avatarParagraph">Jeg er en React og Typescript utvikler, i frontend..</p>
    </div>
  )
}
export default Avatar
