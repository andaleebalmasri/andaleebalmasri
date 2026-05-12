import { useState, useEffect } from "react";
import ItemCard from "./components/ItemCard";
import Controls from "./components/Controls";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [name, setName] = useState("Andaleeb");
  const [hours, setHours] = useState(10);
  const [field, setField] = useState("Education");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  // جلب المستخدمين
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users))
      .catch(err => console.error("خطأ:", err));
  }, []);

  // جلب المنتجات (أول 6 فقط)
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        const first6Products = data.products.slice(0, 6);
        setProducts(first6Products);
      })
      .catch(err => console.error("خطأ:", err));
  }, []);

  const increaseHours = () => setHours(hours + 1);
  const decreaseHours = () => setHours(hours - 1);
  const changeName = () => setName("New Volunteer");
  const reset = () => {
    setName("Andaleeb");
    setHours(10);
    setField("Education");
  };

  return (
    <div>
      <h1>hello</h1>

      {/* عرض المنتجات بطريقة جميلة */}
      <ProductList products={products} />

      <div className="app">
        <h1>Volunteer Profile</h1>

        <ItemCard
          name={name}
          hours={hours}
          field={field}
        />

        <Controls
          increase={increaseHours}
          decrease={decreaseHours}
          changeName={changeName}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default App;