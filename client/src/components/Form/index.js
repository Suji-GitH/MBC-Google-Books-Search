import React from "react";

function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search for your favorite books :) and view them or save them for later </h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Type in your Book Name Here..."
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        <span style={{color: "dodgerblue"}}>S</span>
        <span style={{color: "orangered"}}>e</span>
        <span style={{color: "gold"}}>a</span>
        <span style={{color: "dodgerblue"}}>r</span>
        <span style={{color: "limegreen"}}>c</span>
        <span style={{color: "orangered"}}>h</span>
      </button>
    </div>
  </form>
  </div>
);
}

export default Form;
