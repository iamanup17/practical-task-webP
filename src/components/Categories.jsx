import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';

const Categories = () => {
  const [jsonCatData, setjsonCatData] = useState([]);

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
    const categoriesdata = async () => {
      const response = await axios.get('/api/categories.php');
      console.log(response.data);
      setjsonCatData(response.data);
    };

    categoriesdata();
  }, []);

  return (
    <div>
      <div className="container cat-container">
        <div className="category-row row p-2 ">
          <div className="">
            <h2 className="ms-3 my-3">Categories</h2>
            <table>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
              {jsonCatData.slice(Page.start, Page.end).map((item) => {
                const { id, name, email, image, Action } = item;
                return (
                  <>
                    <tr>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>
                        <img
                          src={image}
                          alt="failed to load"
                          style={{ width: '100px', height: '100px' }}
                        />
                      </td>
                      <td>
                        <NavLink to={`/categorydetails/${id}`}>
                          <button className="btn btn-primary">VIEW</button>
                        </NavLink>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>

            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={jsonCatData.length}
              buttons={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
