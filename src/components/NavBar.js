import React from "react";
import "../styles/NavBar.css";
import Card from "./Card";
function NavBar() {
  return (
    <>
      <Card className="navbar">
        <span className="box setting"></span>
        <span className="box profile"></span>
      </Card>
    </>
  );
}

export default NavBar;
