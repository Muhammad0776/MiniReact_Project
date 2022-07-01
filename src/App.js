/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./index.css";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="container my-5 py-5">
        <div className="text-center">
          <h1 className="text-danger fw-bold border-bottom py-3">Our Menu</h1>
        </div>

        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
