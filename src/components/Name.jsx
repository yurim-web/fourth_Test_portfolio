import { HomeIcon } from "@radix-ui/react-icons";
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
      <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
        <input
          type="text"
          style={{ border: "none" }}
          placeholder="이름 입력!"
          onChange={change}
        />
        <HomeIcon onClick={click}>설정</HomeIcon>
      </div>

      <p>{displayname}님 환영합니다!</p>
    </div>
  );
};

export default Name;
