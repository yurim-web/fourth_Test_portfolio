import Left from "./layout/Left";
import Right from "./layout/Right";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1484278786775-527ac0d0b608?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        gap: "50px",
      }}
      className="App"
    >
      <Left />
      <Right />
    </div>
  );
}

export default App;
