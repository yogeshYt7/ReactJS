import React, { useState } from 'react';
import Cart from './Cart';

const Product = () => {
  const [product, setProduct] = useState({
    pname: 'Krabonn',
    pprice: 1375,
    pdesc: ['1.3mp Rear camera ', '1800 mAh Battery '],
  });

  const { pname, pprice, pdesc } = product;

  // Correct usage of useState for pqty
  const [pqty, setPqty] = useState(0);

  const handleIncrement = () => {
    setPqty(pqty + 1);
  };

  const handleDecrement = () => {
    setPqty(pqty - 1);
  };

  return (
    <div className="container">
      <div className="productblock">
        <h1>PRODUCT PAGE</h1>
        <img src="https://images.hindustantimes.com/tech/htmobile4/P12219/heroimage/karbonn-k4-mobile-phone-large-1.jpg" alt="" />
        <span>Product Name: {pname}</span>
        <span>Product Price: {pprice}</span>
        <span>
          Product Description:
          <ul>
            {pdesc.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </span>
        <span>
          Product Quantity:
          <button onClick={handleDecrement}>-</button>
          <span>{pqty}</span>
          <button onClick={handleIncrement}>+</button>
        </span>
      </div>

      <div className="cartblock">
        <Cart pqty={pqty} pname={pname} pdesc={pdesc} pprice={pprice} />
      </div>
    </div>
  );
};

export default Product;
