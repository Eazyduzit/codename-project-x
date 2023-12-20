const user = {
  name: "Marius Skjellerud",
  imageSrc: "/image001.png",
  imageSize: 180,
}

const Avatar = () => {
  return (
    <img
      className="avatar"
      src={user.imageSrc}
      alt=""
      style={{
        width: user.imageSize,
        height: user.imageSize,
        borderRadius: 100,
        objectFit: "cover",
      }}
    />
  )
}
export default Avatar
