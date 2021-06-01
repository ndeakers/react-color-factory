
function Color({ color }) {
  console.log("color in Color", color);
  const style = { backgroundColor: color.hexCode }
  return (<div className="Color" style={style}>
    <h1>Look it's {color.name}</h1>
  </div>)
}

export default Color;