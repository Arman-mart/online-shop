import React from 'react';
import Product from './Components/Product'
import {products} from './data/products'

function App() {
  return (
    <div className="App">
        <Product product={products[0]} />
    </div>
  );
}

export default App;
