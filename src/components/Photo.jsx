const Photo = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        border: "1px solid black",
        flex: 1,
        borderRadius: "10px",
        textAlign: "center",
        padding: "20px 0px",
      }}
    >
      <span style={{ color: "white", fontWeight: 700 }}>HELLO!</span>
    </div>
  );
};

export default Photo;
