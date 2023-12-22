import "./Stacking.css"
import Avatar from "../avatar/Avatar"

interface StackingProps {
  text: string
}

const Stacking: React.FC<StackingProps> = ({ text }) => {
  return (
    <>
      <Avatar
        name="Marius"
        imageSrc="/images/image001.png"
        text="Jeg er en React og Typescript utvikler, i frontend.."
      />
      <div className="stacking-card">
        <p className="stacking-paragraph">{text}</p>
      </div>
    </>
  )
}
export default Stacking
