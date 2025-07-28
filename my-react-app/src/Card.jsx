import picture from "./assets/biruk.jpg"

function Card() {
  return (
    <div className="card">
      <img className="img" alt="profile picture image" src={picture}></img>
      <h2 className="card-title">Friendship Card</h2>
      <p className="card-text">A card for friends to strength our frienships</p>
    </div>
  )
}

export default Card
