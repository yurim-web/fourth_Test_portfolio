import { useEffect, useState } from "react";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // 1초마다 현재 시간 업데이트
  }, []);

  const hours = dateTime.getHours(); // 시간 (24시간제)
  const minutes = dateTime.getMinutes(); // 분
  const seconds = dateTime.getSeconds(); // 초

  return (
    <div>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
};

export default Clock;
