import Product from "./Product";
import { useContext, useState } from "react";
import { InventoryContext } from "../data/inventoryContext";
import { categories } from "../data/categories";
import { filter, sort } from "../utils/helpers";

export default function ProductList() {
  const { products } = useContext(InventoryContext);

  //Local state for tracking filter and sorting selections
  const [filterSelection, setFilterSelection] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [inStockFilter, setInStockFilter] = useState(false);

  let displayedProducts = sort(products, sortOrder);
  displayedProducts = filter(displayedProducts, filterSelection, inStockFilter);

  return (
    <div>
      <div className="products">
        {displayedProducts.map((p) => (
          <Product product={p} />
        ))}
      </div>
    </div>
  );
}
