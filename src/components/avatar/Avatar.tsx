import "./Avatar.css"

const user = {
  name: "Marius Skjellerud",
  imageSrc: "/image001.png",
}

const Avatar = () => {
  return <img className="avatar" src={user.imageSrc} alt={`photo of ${user.name}`} />
}
export default Avatar
