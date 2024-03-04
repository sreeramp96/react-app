import profilePic from "./assets/sreeram_MG_8214.jpg";

function Card() {
  return (
    <div className="">
      <img className="card-image" src={profilePic} alt="card image" />
      <h2 className="card-title">Sreeram</h2>
      <p className="card-text">A software Engineer</p>
    </div>
  );
}

export default Card;
