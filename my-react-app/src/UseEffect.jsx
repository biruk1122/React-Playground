import { useEffect, useState } from "react"

function UseEffect() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    console.log("Event listener added")
  }, [])

  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}</p>
    </>
  )
}

export default UseEffect
