import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="text-center my-4">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="btn btn-outline-danger me-3"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
