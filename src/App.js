import "./styles.css";
import Product from "./components/Product";
import ProductForm from "./components/ProductForm";
import { useState } from "react";
import { InventoryContext } from "./data/inventoryContext";
import ProductList from "./components/ProductList";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);

  function addProduct(product) {
    setProducts([...products, product]);

    //Remove the form after creating a product
    setEditing(null);
  }

  function updateProduct(product) {
    setProducts(
      products.map(function (p) {
        if (p.id === product.id) {
          return product;
        } else {
          return p; //just return the item unchanged
        }
      })
    );

    //Remve the form after creating a product
    setEditing(null);
  }

  function deleteProduct(id) {
    setProducts(
      products.filter(function (p) {
        return p.id !== id; //only keep products if the key is not equal to the id
      })
    );
  }

  return (
    <div className="App">
      <InventoryContext.Provider
        value={{
          products,
          addProduct,
          deleteProduct,
          updateProduct,
          setEditing,
          editing
        }}
      >
        <h2>Tisk your Task!</h2>
        {!editing ? (
          <>
            <ProductList />
            <button
              className="save-btn add-btn"
              onClick={() => setEditing("new")}
            >
              Add a Task!
            </button>
          </>
        ) : (
          <ProductForm />
        )}
      </InventoryContext.Provider>
    </div>
  );
}

const initialProducts = [];
