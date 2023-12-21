import "./Avatar.css"

const user = {
  name: "Marius Skjellerud",
  imageSrc: "/image001.png",
}

const Avatar = () => {
  return (
    <div className="avatarWrapper">
      <img className="avatarImage" src={user.imageSrc} alt={`photo of ${user.name}`} />
      <p className="avatarTitle">Hei, mitt navn er Marius!</p>
      <p className="avatarParagraph">Jeg er en React og Typescript utvikler, i frontend..</p>
    </div>
  )
}
export default Avatar
