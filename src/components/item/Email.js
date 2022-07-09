import { useState } from "react";
import "./Email.css";

function Email(props) {
  const [info, setInfo] = useState(false);
  const clicked = () => {
    setInfo(!info);
  };

  return (
    <button className="btn" onClick={clicked}>
      {!info ? "Contact" : props.email}
    </button>
  );
}

export default Email;
