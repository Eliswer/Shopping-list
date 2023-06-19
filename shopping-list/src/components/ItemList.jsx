import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

function ItemList() {
  const allItems = useSelector((state) => state.itemsArray);
  console.log(allItems);

  let renderedItems;

  if (allItems === undefined) {
    renderedItems = <ItemCard price={0} itemName={"Add new items"} />;
    console.log("undefined");
  } else {
    console.log("should be mapped");

    renderedItems = allItems.map((item) => {
      return <ItemCard price={item.price} itemName={item.itemName} />;
    });
  }

  return (
    <div className="item-list">
      <select id="category">
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
