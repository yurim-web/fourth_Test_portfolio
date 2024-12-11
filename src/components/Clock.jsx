import { useEffect, useState } from "react";
import { etc_Css } from "../styles/etc_Css";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
  }, []);

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();

  return (
    <div style={etc_Css.clock}>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
};

export default Clock;
