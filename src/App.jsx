import { useState } from "react";
import Title from "./components/Title.jsx";
import menu from "./Data/data.jsx";
import Menu from "./components/Menu.jsx";
import Categories from "./components/Categories.jsx";

// const tempCatagories = menu.map(item =>  item.category);
// const tempSet = new Set(tempCatagories);
// const tempItem = ["all", ...tempSet];     // yes we are going to change the array of values**
// console.log(tempItem);

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const [categoires, setCategories] = useState(allCategories);
  // console.log(catogires);

  const fillterItem = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setMenuItems(newItem);
    console.log(newItem);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categoires={categoires} fillterItem={fillterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
