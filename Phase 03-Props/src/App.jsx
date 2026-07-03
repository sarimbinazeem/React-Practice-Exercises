import ProductCard from './components/ProductCard'
import React from 'react'

const App = () => {

    const products = [
    {
      id: 1,
      name: "Mouse",
      price: 2000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Keyboard",
      price: 4500,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Laptop",
      price: 120000,
      category: "Electronics",
    },
    {
      id: 4,
      name: "Chair",
      price: 15000,
      category: "Furniture",
    },
  ];

  return (
  
      <div className="productContainer">
        {products.map((product) =>
        (
          <ProductCard key={product.id} name={product.name} price={product.price} category={product.category} />
        ) )}
      </div>
  
  )
}

export default App
 