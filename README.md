# Mutations
```
mutation {
  createProduct(input: {name: "Widget4", description: "Another widget for your garden", price: 30, inventory: 50, soldout: SOLDOUT, stores: [{name: "Pasadena"}, {name: "Ventura"}]}) {
    id
    name
    price
    inventory
    stores {name}
  }
  
  createProduct(input: {name: "Widget5", description: "Fifth widget for your garden", price: 64, inventory: 100, soldout: ONSALE, stores: [{name: "Los Angeles"}]}) {
    id
    name
    price
    inventory
    stores {name}
  }
  
  updateProduct(input: {id: "653baac0efac44c705144d0c", price: 50, stores: [{name: "Pasadena"}, {name: "Ventura"}]}) {
    id
    name
    price
    inventory
    stores {name}
  }
  
  deleteProduct(id: "653baac0efac44c705144d0c")
}
```
# Queries
```
query {
  getProduct(id: "fdsfsdfsdf") {
    id
    name
    stores {
      name
    }
    price
    inventory
    
  }
  
  # Aliases
  widget1: getProduct(id: "653cac214ca0c29f64ef5ade") {
    ...widgetFragment
  }
  widget2: getProduct(id: "653cad439996e2052b09f64f") {
    ...widgetFragment
  }
  
  getAllProducts {
    id
    name
    price
  }
}
```
# Fragments
```
fragment widgetFragment on Product {
  name
  price
  description
  soldout
}
```
