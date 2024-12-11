import Clock from "../components/Clock";
import Weather_information from "../components/Weather_information";
import { etc_Css } from "../styles/etc_Css";

const Right = () => {
  return (
    <div style={etc_Css.right_box}>
      <Clock />
      <Weather_information />
    </div>
  );
};

export default Right;
