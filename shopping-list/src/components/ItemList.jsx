import pen from "../img/pen.svg";
import check from "../img/check.svg";

function ItemList() {
  return (
    <div className="item-list">
      <select id="category">
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
      <div className="item-wrapper">
        <p className="item">Apples</p>
        <p className="expenses">50$</p>
        <div className="buttons">
          <div className="button green">
            <img src={check} alt="check mark icon"></img>
          </div>
          <div className="button blue">
            <img src={pen} alt="pencil icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
