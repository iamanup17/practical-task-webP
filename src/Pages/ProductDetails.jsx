import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [productdata, setproductdata] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get('/api/products.php');
      console.log(response.data);
      setproductdata(response.data[id - 1]);
      console.log(productdata);
    };
    getProduct();
  }, []);

  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="row text-center d-flex justify-content-center ">
        <div className="card col-10 col-md-4 mt-5 d-flex flex-column justify-content-center align-items-center p-3 m-2">
          <img
            src={productdata.image}
            alt="joker"
            style={{ width: '300px', height: '200px' }}
          />
          <br />
          <h4>{productdata.title}</h4>
          <h5 className="text-center">
            {' '}
            Description :{productdata.description}
          </h5>
          <div>
            <h6>
              Price : {productdata.price} {productdata.currency}{' '}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
