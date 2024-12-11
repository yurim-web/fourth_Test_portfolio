import { etc_Css } from "../styles/etc_Css";

const Clear = () => {
  const clearStorage = () => {
    localStorage.clear();
    alert(
      "로컬 스토리지가 초기화되었습니다. 새로고침하시면 정보가 다 사라집니다"
    );
  };

  return (
    <button style={etc_Css.clear_btn} onClick={clearStorage}>
      로그아웃(로컬 스토리지 초기화)
    </button>
  );
};

export default Clear;
