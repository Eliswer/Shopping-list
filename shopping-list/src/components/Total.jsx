import { useSelector } from "react-redux";

function Total() {
  let total = 0;
  const allItems = useSelector((state) => state.newItem.itemsArray);
  allItems.map((item) => {
    total = Number(total) + Number(item.price);
    return total;
  });

  const itemsAmount = allItems.length;
  console.log(itemsAmount);

  return (
    <div className="total">
      <p>
        Your shopping total: <span style={{ fontSize: "22px" }}>{total}$</span>
      </p>
      <p>
        Your amount of items:{" "}
        <span style={{ fontSize: "22px" }}>{itemsAmount}</span>
      </p>
    </div>
  );
}

export default Total;
