function AddItem({ height }) {
  return (
    <div className="add-item">
      <div className="inputs-wrapper" style={{ height: height + "px" }}>
        <div className="input">
          <label htmlFor="name">Item name</label>
          <input id="name" />
        </div>
        <div className="input">
          <label htmlFor="price">Price</label>
          <input id="price" />
        </div>
        <div className="input">
          <label htmlFor="category">Category</label>
          <select id="category" size="3">
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
        <button>Add Item</button>
      </div>
    </div>
  );
}

export default AddItem;
