import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const CategoryDetails = () => {
  const { id } = useParams();

  const [categorydata, setcategorydata] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get('/api/categories.php');
      console.log(response.data);
      setcategorydata(response.data[id - 1]);
      console.log(categorydata);
    };
    getCategory();
  }, []);

  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="row text-center d-flex justify-content-center ">
        <div className="card col-10 col-md-4 mt-5 d-flex flex-column justify-content-center align-items-center p-3 m-2">
          <img
            src={categorydata.image}
            alt="joker"
            style={{ width: '300px', height: '200px' }}
          />
          <br />
          <h4>{categorydata.name}</h4>
          <h5 className="text-center">
            {' '}
            Description :{categorydata.description}
          </h5>
          {/* <div>
            <h6>
              Price : {categorydata.price} {categorydata.currency}{' '}
            </h6>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
