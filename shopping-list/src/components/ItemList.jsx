import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { useState } from "react";

function ItemList() {
  const [select, setSelect] = useState("all");
  const allItems = useSelector((state) => state.newItem.itemsArray);
  console.log(allItems);

  let filteredItems;

  if (select === "all") {
    filteredItems = allItems;
  } else {
    filteredItems = allItems.filter((item) => item.category === select);
  }

  let renderedItems;

  if (filteredItems.length === 0) {
    renderedItems = <ItemCard price={0} itemName={"Add new items"} />;
  } else {
    renderedItems = filteredItems.map((item) => {
      return (
        <ItemCard
          price={item.price}
          itemName={item.itemName}
          key={item.itemName}
        />
      );
    });
  }

  const handleSelectCategory = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="item-list">
      <select id="category" value={select} onChange={handleSelectCategory}>
        <option value="all">Show all</option>
        <option value="bakery-and-bread">Bakery and bread</option>
        <option value="meat-and-seafood">Meat and seafood</option>
        <option value="pasta-and-rice">Pasta and rice</option>
        <option value="oils-and-sauces">Oils and sauces</option>
        <option value="cereals">Cereals</option>
        <option value="soup-and-canned-goods">Soup and canned goods</option>
        <option value="frozen-foods">Frozen foods</option>
        <option value="dairy-products">Dairy products</option>
        <option value="snacks-and-sweets">Snacks and sweets</option>
        <option value="vegetables">Vegetables</option>
        <option value="fruits">Fruits</option>
        <option value="non-alco-drinks">Non-alco drinks</option>
        <option value="alcoholic-drinks">Alcoholic drinks</option>
      </select>
      {renderedItems}
    </div>
  );
}

export default ItemList;
