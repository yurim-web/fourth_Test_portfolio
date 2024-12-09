import Date_calendar from "../components/Date_calendar";
import Date from "../components/Date_calendar";
import Name from "../components/Name";
import Photo from "../components/Photo";
import Todolist from "../components/Todolist";
import Weater from "../components/Weater";

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
      <Weater />
      <Date_calendar />
      <Todolist />
    </div>
  );
};

export default Left;
