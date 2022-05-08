import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';

const Categories = () => {
  //   const [catData, setcatData] = useState(CategoryData);

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

  //   const [users, setusers] = useState([]);

  useEffect(() => {
    // const getUser = async () => {
    //     const response = await axios.get(
    //       `https://jsonplaceholder.typicode.com/users/${id}`
    //     );
    //     console.log(response.data);
    //     setUdata(response.data);
    //   };
    //   getUser();

    const categoriesdata = async () => {
      const response = await axios.get(
        // 'https://nick.wpweb.co.in/api/categories.php'
        '/api/categories.php'
      );
      console.log(response.data);
      setjsonCatData(response.data);
    };

    categoriesdata();

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((json) => setusers(json));
  }, []);
  //   console.log(users);

  //   const [id, name, image, Action] = catData;

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
            {/* <nav aria-label="Page navigation example">
              <ul class="pagination  ms-3">
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    5
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
