import "./Details.css";

function Details(props) {
  return (
    <div className="detail">
      <h4>Address</h4>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.country}</p>
    </div>
  );
}

export default Details;
