import Email from "./Email";

function Contact(props) {
  return (
    <div>
      <h4>Contact Information</h4>
      <p> {props.cell}</p>
      <p> {props.phone}</p>
      {/* <p> {props.email}</p> */}
      <Email email={props.email} />
    </div>
  );
}

export default Contact;
