import { useState } from "react";
import Weater_slide from "./Weater_slide";
import Water from "./Water";
import { water_Css } from "../../styles/water_Css";

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
    <div style={water_Css.water_box}>
      <div style={water_Css.water_innerbox}>
        <h1 style={water_Css.title}>Water Score</h1>
        <Weater_slide left={water.filter((v) => v).length * 60} />
        <div style={water_Css.innerbox_2}>
          {water.map((v, i) => (
            <Water change={() => change(i)} iswater={v}></Water>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weater;
