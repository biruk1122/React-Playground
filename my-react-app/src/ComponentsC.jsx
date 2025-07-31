import { useContext } from "react"
import ComponentD from "./ComponentsD"
import { UserContext } from "./ComponentsA"

function ComponentC() {
  const user = useContext(UserContext)
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Hello Again ${user}`}</h2>
      <ComponentD />
    </div>
  )
}

export default ComponentC
