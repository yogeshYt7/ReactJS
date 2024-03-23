

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  // Fetch product details based on productId

  return (
    <div>
      <h2>Product Detail Page</h2>
      {/* Display product details */}
    </div>
  );
};

export default ProductDetail;
