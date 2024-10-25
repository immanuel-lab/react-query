import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-around  mt-5">
      <Link to="/">
        <p>some text</p>
      </Link>
      <Link to="/fileupload">
        <p>fileupload</p>
      </Link>
    </div>
  );
}

export default Navbar;
