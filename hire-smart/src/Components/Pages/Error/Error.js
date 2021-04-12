import React from "react";
import "./Error.css";
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <h1>Error 404</h1>
      <p>Sorry this page doesn't exist!</p>
      <Link to="/">
        Go back
      </Link>
    </div>
  );
};

export default Error;
