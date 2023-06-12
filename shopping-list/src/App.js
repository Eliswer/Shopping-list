import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import ItemList from "./components/ItemList";
import Total from "./components/Total";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Heading />
        <AddItem />
      </div>
      <ItemList />
      <div className="bottom">
        <Total />
        <Footer />
      </div>
    </div>
  );
}

export default App;
