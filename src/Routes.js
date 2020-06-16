
import React from 'react';
import {
  Route
} from "react-router-dom";

import FileUpload from 'pages/FileUpload';

const Routes = () => {
  return (
    <div className="container bwm-container">
      <Route exact path="/">
        <FileUpload />
      </Route>
    </div>
  )
}

export default Routes;