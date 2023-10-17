import { useContext, useState } from "react";
import { InventoryContext } from "../data/inventoryContext";
import { nanoid } from "nanoid";
import { categories } from "../data/categories";

export default function ProductForm() {
  const {
    addProduct,
    setEditing,
    updateProduct,
    editing,
    products
  } = useContext(InventoryContext);

  //Check if value of editing is "new" or some id of a product
  let initialData = {
    name: "",
    price: 0,
    category: "",
    inStock: false
  };

  if (editing !== "new") {
    initialData = products.find(function (p) {
      return p.id === editing;
    });
  }

  const [product, setProduct] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addProduct({
        ...product,
        id: nanoid()
      });
    } else {
      updateProduct(product);
    }
  }

  function handleInput(e, field) {
    setProduct({ ...product, [field]: e.target.value });
  }

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Task:</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleInput(e, "name")}
          />
        </div>

        <div className="form-btns">
          <button className="cancel-btn" onClick={() => setEditing(null)}>
            Cancel
          </button>
          <button className="save-btn">Add Task</button>
        </div>
      </form>
    </div>
  );
}
