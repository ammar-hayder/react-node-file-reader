import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">File Parser</Link>
    </nav>
  )
}


export default Header;