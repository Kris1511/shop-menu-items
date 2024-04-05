import React from "react";

const Categories = ({ categoires, fillterItem }) => {
  return (
    <div className="btn-container">
      {categoires?.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => fillterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
