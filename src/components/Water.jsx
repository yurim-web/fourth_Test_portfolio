const Water = (props) => {
  return <span onClick={props.change}>{props.iswater ? "💦" : "❌"}</span>;
};

export default Water;
