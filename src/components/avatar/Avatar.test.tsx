import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Avatar from "./Avatar"

describe("Avatar component", () => {
  const AvatarProps = {
    name: "Marius",
    imageSrc: "/images/image001.png",
    text: "Jeg er en React og Typescript utvikler, i frontend..",
  }

  it("renders with correct props", () => {
    render(<Avatar {...AvatarProps} />)

    // Check if the image and text elements are rendered
    expect(screen.getByAltText(`photo of ${AvatarProps.name}`)).toBeInTheDocument()
    expect(screen.getByText(`Hei, mitt navn er ${AvatarProps.name}!`)).toBeInTheDocument()
    expect(screen.getByText(AvatarProps.text)).toBeInTheDocument()
  })
})
