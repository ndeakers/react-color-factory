import React, { useState } from "react";

function NewColorForm({ addColor }) {
  const [formData, setFormData] = useState({ name: "", hexCode: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    console.log("handleSubmit ran")
    evt.preventDefault();
    addColor(formData);
  }

  return (<div>
    <h3>Add a Color</h3>
    <form className="NewColorForm" onSubmit={handleSubmit}>
      <label htmlFor="color-input">Color Name:</label>
      <input id="color-input" name="name" value={formData.name} onChange={handleChange} />
      <label htmlFor="hexCode-input">HexCode:</label>
      <input id="hexCode-input" name="hexCode" value={formData.hexCode} onChange={handleChange} />
      <button type="submit">Add Color</button>
    </form>
  </div>)
}

export default NewColorForm;