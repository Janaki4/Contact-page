import Avatar from "./avatar";
import Contact from "./Contact";
import Details from "./Details";
import "./item.css";
function Item(props) {
  return (
    <div className="item">
      <Avatar pic={props.pic} />
      <h3>{props.name}</h3>
      <Details
        state={props.address.state}
        city={props.address.city}
        country={props.address.country}
      />
      <Contact email={props.email} phone={props.phone} cell={props.cell} />
    </div>
  );
}

export default Item;
