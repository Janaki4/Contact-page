import Parent from "./parent";
import Header from "../item/Header";
import NavBar from "./NavBar";

function Top() {
  return (
    <div>
      <NavBar />
      <Header />
      <Parent />
    </div>
  );
}

export default Top;
