import { newItemsActions } from "./store/newItems";
import { useDispatch } from "react-redux";
import check from "../img/check.svg";

function ItemCard({ price, itemName }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(newItemsActions.removeItem(itemName));
  };

  return (
    <div className="item-wrapper">
      <p className="item">{itemName}</p>
      <p className="expenses">{price}$</p>
      <div className="buttons">
        <div className="button green" onClick={handleRemoveItem}>
          <img src={check} alt="check mark icon"></img>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
