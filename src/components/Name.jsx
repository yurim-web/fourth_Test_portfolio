import { MdOutlineLogin } from "react-icons/md";
import { useState, useEffect } from "react";
import { name_Css } from "../styles/name_Css";

const Name = () => {
  const [name, setname] = useState("");
  const [displayname, setdisplayname] = useState("YOUR NAME");

  useEffect(() => {
    const savedDisplayName = localStorage.getItem("displayname");
    if (savedDisplayName) {
      setdisplayname(savedDisplayName);
    }
  }, []);

  const change = (e) => {
    setname(e.target.value);
  };

  const click = () => {
    setdisplayname(name);
    localStorage.setItem("displayname", name);
  };

  return (
    <div style={name_Css.name_box}>
      <div style={name_Css.name_innerbox}>
        <div style={name_Css.name_innerbox2}>
          <input
            type="text"
            style={name_Css.input}
            placeholder="이름을 입력하세요"
            onChange={change}
          />
          <MdOutlineLogin onClick={click}>설정</MdOutlineLogin>
        </div>
        <h1 style={name_Css.name_title}>{displayname}</h1>
      </div>
    </div>
  );
};

export default Name;
