import { useState } from "react"

function MyComponent() {
  const [car, setCar] = useState({ year: 2025, make: "Ford", model: "Limited" })

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }))
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }))
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }))
  }

  return (
    <div>
      <p>
        Your Favorite Car is: {car.year} {car.make} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange}></input>
      <input type="text" value={car.make} onChange={handleMakeChange}></input>
      <input type="text" value={car.model} onChange={handleModelChange}></input>
    </div>
  )
}

export default MyComponent
