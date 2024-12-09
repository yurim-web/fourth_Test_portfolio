import { useState } from "react";

const Todolist = () => {
  const [input, setinput] = useState("");
  const change = (e) => {
    setinput((prev) => e.target.value);
  };

  const [push, setpush] = useState([]);
  const click = () => {
    setpush((prev) => [...prev, input]);
  };

  const remove = (i) => {
    setpush((prev) => [...prev].filter((v, idx) => idx != i));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "10PX",
        overflow: "hidden",
      }}
    >
      <div style={{ margin: "20px" }}>
        <input type="text" onChange={change} />
        <button onClick={click}>추가하기</button>
        {push.map((v, i) => (
          <div>
            <span key={i}>{v}</span>
            <button onClick={() => remove(i)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
