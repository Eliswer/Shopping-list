import { useDispatch } from "react-redux";
import { newItemsActions } from "./store/newItems";
import { useState, useEffect } from "react";

function AddItem({ height }) {
  const [price, setPrice] = useState("");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [disabledFirstOption, setDisabledFirstOption] = useState(false);

  const dispatch = useDispatch();

  const addItemOnClick = () => {
    dispatch(
      newItemsActions.addNewItem({
        category: category,
        itemName: itemName,
        price: price,
      })
    );

    setPrice("");
    setItemName("");
  };

  useEffect(() => {
    if (price === "" || category === "" || itemName === "") {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
}, [price, itemName, category, disabledFirstOption]);

  return (
    <div className="add-item">
      <div className="inputs-wrapper" style={{ height: height + "px" }}>
        <div className="input">
          <label htmlFor="name">Item name</label>
          <input
            value={itemName}
            id="name"
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={price}
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="category">Category</label>
          <select
            menuIsOpen={true}
            value={category}
            id="category"
            size="3"
            onChange={(e) => {
              setCategory(e.target.value);
              setDisabledFirstOption(true);
            }}
          >
            <option disabled={disabledFirstOption}>SCROLL TO SELECT</option>
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
        </div>
        <button onClick={addItemOnClick} disabled={disabledBtn}>
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
