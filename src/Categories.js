import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="text-center my-4">
      {categories.map((category, index) => {
        return (
          <Link to={`/categories/${category}`} key={index}>
            <button
              type="button"
              key={index}
              className="btn btn-outline-danger me-3"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
