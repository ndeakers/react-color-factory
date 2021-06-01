import React, { useState } from "react";
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';
import ColorList from "./ColorList"
import Color from "./Color"
import NewColorForm from "./NewColorForm";
import FindColor from "./FindColor"

function App({ colors }) {
  // state lives here
  const [colorList, setColorList] = useState(colors);
  console.log("colorList", colorList)

  function addColor(newColor) {
    console.log("add a color ran. newColor is", newColor);
    setColorList(currColors => [newColor, ...currColors,]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors" >
            <ColorList colorList={colorList} />
          </Route>
          <Route exact path="/colors/new" >
            <NewColorForm addColor={addColor} />
          </Route>
          <Route exact path="/colors/:color" >
            <FindColor colorList={colorList} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colors: [
    {
      name: "red",
      hexCode: "#ff0000"
    },
    {
      name: "blue",
      hexCode: "##0000FF"
    },
    {
      name: "Electric Blue",
      hexCode: "###7DF9FF"
    }
  ]
}





export default App;
