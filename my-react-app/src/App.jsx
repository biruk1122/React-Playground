import Button from "./Button"
import Card from "./Card"
import ColorPicker from "./ColorPicker"
import Counter from "./Counter"
import List from "./List"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import MyComponent from "./MyComponent"
import UpdateArrays from "./UpdateArrays"

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 97 },
    { id: 2, name: "orange", calories: 89 },
    { id: 3, name: "banana", calories: 80 },
    { id: 4, name: "mango", calories: 78 },
    { id: 5, name: "avocado", calories: 190 },
  ]

  const vegitables = [
    { id: 1, name: "potatoes", calories: 197 },
    { id: 2, name: "celery", calories: 19 },
    { id: 3, name: "carrots", calories: 20 },
    { id: 4, name: "corn", calories: 83 },
    { id: 5, name: "broccoli", calories: 40 },
  ]

  return (
    <div>
      <Card />
      <Student name="Biruk" age={28} isStudent={false} />
      <Student name="yared" age={29} isStudent={true} />
      <UserGreeting isLoggedIn={true} username="Biruk" />
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegitables.length > 0 ? (
        <List items={vegitables} category="Vegitables" />
      ) : null}
      <Button />
      <Counter />
      <ColorPicker />
      <MyComponent />
      <UpdateArrays />
    </div>
  )
}

export default App
