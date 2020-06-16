import React from "react";

const ProgressComponent = (progress) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        aria-valuenow={progress.toString()}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: progress.toString() + "%" }}
      >
        {progress.toString()}%
      </div>
    </div>
  )
  
};

export default ProgressComponent;
