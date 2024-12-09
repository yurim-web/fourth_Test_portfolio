import { useState } from "react";

const Name = () => {
  const [name, setname] = useState("");
  const [displayname, setdisplayname] = useState("");

  const change = (e) => {
    setname(e.target.value);
  };
  const click = () => {
    setdisplayname(name);
  };

  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "white",
        border: "1px solid black",
        flex: 1,
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="이름 입력!"
          style={{ margin: "20px" }}
          onChange={change}
        />
        <button onClick={click}>설정</button>
      </div>

      <p>{displayname}</p>
    </div>
  );
};

export default Name;
