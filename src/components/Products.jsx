import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';

const Products = () => {
  const [Loading, setLoading] = useState(false);
  const [search, setsearch] = useState('');
  const [category, setCategory] = useState('');

  const [jsonProData, setjsonProData] = useState([]);

  const [showPerPage, setshowPerPage] = useState(4);

  const [Page, setPage] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPage({ start: start, end: end });
    console.log(start, end);
  };

  useEffect(() => {
    const productsdata = async () => {
      const response = await axios.get('/api/products.php');
      console.log(response.data);
      setjsonProData(response.data);
      console.log(category);
    };

    productsdata();
  }, []);

  return (
    <div className="container cat-container">
      <div className="category-row row p-2 ">
        <div className="">
          <div className="pHeader">
            <h2 className="ms-3 my-3 left">Products</h2>
            <div className="right">
              <input
                type="text"
                placeholder="Search By Name"
                onChange={(e) => setsearch(e.target.value)}
              />

              <select
                name=""
                id=""
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                {jsonProData.map((item) => {
                  return <option>{item.title}</option>;
                })}
              </select>
            </div>
          </div>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>

            {Loading ? (
              <h4>Loading . . . . . . </h4>
            ) : (
              jsonProData
                .slice(Page.start, Page.end)
                .filter((value) => {
                  if (search === '') {
                    return value;
                  } else if (
                    value.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                })

                .filter((value) => {
                  if (category === '') {
                    return value;
                  } else if (
                    value.title.toLowerCase().includes(category.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                          <img
                            src={item.image}
                            alt=""
                            style={{ width: '100px', height: '100px' }}
                          />
                        </td>
                        <td>
                          <NavLink to={`/productdetails/${item.id}`}>
                            <button className="btn btn-primary">VIEW</button>
                          </NavLink>
                        </td>
                      </tr>
                    </>
                  );
                })
            )}
          </table>

          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={jsonProData.length}
            buttons={6}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
