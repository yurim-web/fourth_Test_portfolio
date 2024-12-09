const Weater_slide = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        padding: "10px",
        position: "relative",
      }}
    >
      <span
        style={{
          transition: "all 0.3s",
          position: "absolute",
          left: props.left,
          top: 0,
        }}
      >
        💛
      </span>
    </div>
  );
};

export default Weater_slide;
