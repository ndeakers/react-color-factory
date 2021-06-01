import { useState } from "react";
import { Link } from "react-router-dom";


function ColorList({ colorList }) {
  console.log("colorList in ColorList", colorList)
  // make state to add new color here

  // create a function to set state. pass to form


  return (
    <div>
      <h2>Welcome to the Color Factory, baybee</h2>
      <Link exact to="/colors/new">Add a Color!</Link>
      <h4>Please select a color</h4>
      <ul>
        {colorList.map(color => <li key={color.hexCode}>
          <Link exact to={`/colors/${color.name}`}>{color.name}</Link>
        </li>)}
      </ul>
    </div>
  )


}

export default ColorList;



