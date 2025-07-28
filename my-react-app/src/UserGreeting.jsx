function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h2>Welcome {props.username}</h2>
  ) : (
    <h2>Please Loggedin First</h2>
  )
}

export default UserGreeting
