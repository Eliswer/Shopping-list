import cart from "../img/cart.svg";

function Heading() {
  return (
    <div className="heading">
      <div className="title">
        <div className="green-circle">
          <img src={cart} alt="shopping cart" />
        </div>
        <h1>Shopping list</h1>
      </div>
    </div>
  );
}

export default Heading;
