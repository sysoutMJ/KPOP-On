import React, { Component } from 'react';
import ProductRow from './ProductRow';
import CartContext from '../context/CartContext';

// This is from Chec/Commerce.js, an ecommerce API library
import { commerce } from '../lib/Commerce';


// Update this. This needs to be update in the newer way of how react does it.
// It should not be in const ProdcutList = () => {}

const tempProductList = () => {}

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    commerce.products.list().then((result) => {
      setProducts(result.data);
    });
  }, []);

  return (
    <div className="container main-content">
      {products.map(product => (
        <ProductRow 
          key={product.id}
          product={product}
          addProduct={addProductToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
