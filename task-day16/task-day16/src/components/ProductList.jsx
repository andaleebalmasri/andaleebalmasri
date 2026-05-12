import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="products-container">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
