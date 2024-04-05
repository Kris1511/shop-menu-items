import React from "react";

const Title = ({ text }) => {
  return (
    <div className="title">
      {text || "Default Menu"}
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
