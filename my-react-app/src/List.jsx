function List(props) {
  //fruits.sort((a, b) => a.name.localeCompare(b.name))//   ALPHABETICAL
  //fruits.sort((a, b) => b.name.localeCompare(a.name)) //REVERSE ALPHABETICAL
  //fruits.sort((a, b) => a.calories - b.calories) // NUMERICAL
  //fruits.sort((a, b) => b.calories - a.calories) //REVERSE NUMERIC

  //const lowCalFruits = fruits.filter((result) => result.calories > 100)

  const itemList = props.items

  const category = props.category
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}:&nbsp;<b>{item.calories}</b>
    </li>
  ))

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  )
}

List.defaultProps = {
  category: "category",
  items: [],
}

export default List
