import Date_calendar from "../components/Date_calendar";
import Name from "../components/Name";
import Photo from "../components/Photo";
import Weater from "../components/Water/Weater";

const Left = () => {
  return (
    <div
      style={{
        width: "450px",
        height: "100%",
        backgroundColor: "#D4F6FF",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <Name />
        <Photo />
      </div>
      <Weater></Weater>
      <Date_calendar />
    </div>
  );
};

export default Left;
