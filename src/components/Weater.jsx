import { useState } from "react";
import Water from "./Water";
import Weater_slide from "./Weater_slide";

const Weater = () => {
  const [water, setwater] = useState([false, false, false, false, false]);
  const change = (i) => {
    setwater((prev) => {
      const newPrev = [...prev];
      newPrev[i] = !newPrev[i];
      return newPrev;
    });
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "150px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>WATER</h1>
      <Weater_slide left={water.filter((v) => v).length * 60} />
      <div>
        {water.map((v, i) => (
          <Water change={() => change(i)} iswater={v}></Water>
        ))}
      </div>
    </div>
  );
};

export default Weater;
