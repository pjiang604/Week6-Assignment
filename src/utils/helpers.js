export function filter(products, category, inStock = false) {
  if (category !== "" && inStock) {
    //there is a selection for category and inStock filter is CHECKED
    return products.filter((p) => p.category === category && p.inStock);
  }
  if (category !== "") {
    return products.filter((p) => p.category === category);
  }
  if (inStock) {
    // inStock === true
    return products.filter((p) => p.inStock);
  }
  return products;
}

export function sort(products, option) {
  switch (option) {
    case "1": {
      return products.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }
    case "2": {
      return products.sort((a, b) => a.price - b.price);
    }
    default: {
      return products;
    }
  }
}
