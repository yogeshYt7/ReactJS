import React, { useEffect, useState } from 'react';

const Cart = (props) => {
  const { pname, pprice, pqty } = props;
  const [totalCart, setTotalCart] = useState(pqty * pprice);

  useEffect(() => {
    // Update totalCart whenever pqty or pprice changes
    setTotalCart(pqty * pprice);
  }, [pqty, pprice]);

  return (
    <>
      <h1>CART PAGE</h1>
      <span>ProductName: {pname} </span> <br />
      <span>Product Price: {pprice} </span> <br />
      <h3>TOTAL CART RS: {totalCart}</h3>
    </>
  );
};

export default Cart;
