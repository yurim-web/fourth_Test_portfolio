import { water_Css } from "../../styles/water_Css";

const Weater_slide = (props) => {
  return (
    <div style={water_Css.slide_box}>
      <span
        style={{
          transition: "all 0.3s",
          position: "absolute",
          left: props.left,
          top: 0,
        }}
      >
        💧
      </span>
    </div>
  );
};

export default Weater_slide;
