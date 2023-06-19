import pen from "../img/pen.svg";
import check from "../img/check.svg";

function ItemCard({ price, itemName }) {
  return (
    <div className="item-wrapper">
      <p className="item">{itemName}</p>
      <p className="expenses">{price}$</p>
      <div className="buttons">
        <div className="button green">
          <img src={check} alt="check mark icon"></img>
        </div>
        <div className="button blue">
          <img src={pen} alt="pencil icon"></img>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
