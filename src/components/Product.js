import "../styles.css";
import { InventoryContext } from "../data/inventoryContext";
import { useContext } from "react";

export default function Product({ product }) {
  const { deleteProduct, setEditing, updateProduct } = useContext(
    InventoryContext
  );

  function handleCheckbox() {
    updateProduct({
      ...product,
      inStock: !product.inStock
    });
  }

  return (
    <div className="product">
      <div className="taskItem">
        <label>
          <input
            type="checkbox"
            checked={product.inStock}
            onChange={handleCheckbox}
          />
        </label>
        {product.inStock ? <del>{product.name}</del> : product.name}
      </div>
      <div className="buttonContainer">
        <button className="edit-btn" onClick={() => setEditing(product.id)}>
          edit
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteProduct(product.id)}
        >
          remove
        </button>
      </div>
    </div>
  );
}
