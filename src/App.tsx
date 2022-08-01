import React                 from 'react';
import Product               from './Components/Product'
import {IProduct}            from './types'
import axios                 from 'axios'
import                            './App.css'
import {useState, useEffect} from 'react';

function App() {
   const [products, setProducts] = useState<IProduct[]>([]);

   const fetchProdcts = async () => {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
        setProducts(response.data)
  }


  useEffect(() => {
      fetchProdcts();
  },[])



  return (
    <div className="App">
      { products.map(product => <Product product={product} key={product.id} />) }
    </div>
  );
}

export default App;
