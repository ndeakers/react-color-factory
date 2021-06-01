import React from "react";
import { Redirect, useParams, Link } from "react-router-dom"
import Color from "./Color"

function FindColor({ colorList }) {
  const { color } = useParams();
  console.log("colorList in FindColor", colorList);
  const colorInfo = colorList.find(curVal => curVal.name === color);
  console.log("colorInfo in FindColor", colorInfo);
  console.log("params", color);

  return (
    <div className="FindColor">
      { colorInfo ?
        <Color color={colorInfo}></Color>
        : <Redirect exact to="/colors" />}
      <Link exact to="/colors">Back to Color List</Link>
    </div>
  )
}

export default FindColor;