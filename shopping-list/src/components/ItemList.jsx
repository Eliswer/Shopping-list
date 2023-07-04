import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { useState } from "react";

function ItemList() {
  const [select, setSelect] = useState("all");
  const allItems = useSelector((state) => state.newItem.itemsArray);

  let filteredItems;

  const getFilteredItems = (category = null) => {
    return allItems.filter((item) => category ? item.category === category : item.category === select);
  };

  if (select === "all") {
    filteredItems = allItems;
  } else {
    filteredItems = getFilteredItems();
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
        <option value="all">({allItems.length}) Show all</option>
        <option value="bakery-and-bread">({getFilteredItems('bakery-and-bread').length}) Bakery and bread</option>
        <option value="meat-and-seafood">({getFilteredItems('meat-and-seafood').length}) Meat and seafood</option>
        <option value="pasta-and-rice">({getFilteredItems('pasta-and-rice').length}) Pasta and rice</option>
        <option value="oils-and-sauces">({getFilteredItems('oils-and-sauces').length}) Oils and sauces</option>
        <option value="cereals">({getFilteredItems('cereals').length}) Cereals</option>
        <option value="soup-and-canned-goods">({getFilteredItems('soup-and-canned-goods').length}) Soup and canned goods</option>
        <option value="frozen-foods">({getFilteredItems('frozen-foods').length}) Frozen foods</option>
        <option value="dairy-products">({getFilteredItems('dairy-products').length}) Dairy products</option>
        <option value="snacks-and-sweets">({getFilteredItems('snacks-and-sweets').length}) Snacks and sweets</option>
        <option value="vegetables">({getFilteredItems('vegetables').length}) Vegetables</option>
        <option value="fruits">({getFilteredItems('fruits').length}) Fruits</option>
        <option value="non-alco-drinks">({getFilteredItems('non-alco-drinks').length}) Non-alco drinks</option>
        <option value="alcoholic-drinks">({getFilteredItems('alcoholic-drinks').length}) Alcoholic drinks</option>
      </select>
      {renderedItems.length ? renderedItems : null}
    </div>
  );
}

export default ItemList;
