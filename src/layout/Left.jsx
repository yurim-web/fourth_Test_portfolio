import Clear from "../components/Clear";
import Date_calendar from "../components/Date_calendar";
import Name from "../components/Name";
import Photo from "../components/Photo";
import Todolist from "../components/todolist/Todolist";
import Weater from "../components/Water/Weater";
import { etc_Css } from "../styles/etc_Css";

const Left = () => {
  return (
    <div style={etc_Css.left_box}>
      <div style={etc_Css.left_contents}>
        <Name />
        <Photo />
      </div>
      <Weater></Weater>
      <Date_calendar />
      <Todolist />
      <Clear />
    </div>
  );
};

export default Left;
