import React, { useEffect, useState } from "react";
import Item from "../item/item";
import axios from "axios";
import Card from "../Card/Card";

function Parent() {
  useEffect(() => {
    prms();
  }, []);

  const [datas, setDatas] = useState([]);
  const prms = async () => {
    const result = await axios.get("https://randomuser.me/api/?results=3");
    setDatas(result.data.results);
  };
  return (
    <Card>
      {datas.map((data) => (
        <Item
          name={data.name.first}
          pic={data.picture.large}
          address={data.location}
          phone={data.phone}
          cell={data.cell}
          email={data.email}
        />
      ))}
    </Card>
  );
}

export default Parent;
