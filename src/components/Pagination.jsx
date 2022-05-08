import React, { useState, useEffect } from 'react';

const Pagination = ({ showPerPage, onPaginationChange, total, buttons }) => {
  console.log(showPerPage);

  const [counter, setcounter] = useState(1);

  const [numberofButtons, setnumberofButtons] = useState(
    // Math.ceil(total / showPerPage)
    7
  );

  useEffect(() => {
    console.log('object');
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const buttonClick = (type) => {
    if (type === 'prev') {
      if (counter === 1) {
        setcounter(1);
      } else {
        setcounter(counter - 1);
      }
    } else if (type === 'next') {
      if (Math.ceil(total / showPerPage) === counter) {
        setcounter(counter);
      } else {
        setcounter(counter + 1);
      }
    }
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination  ms-3">
          {new Array(numberofButtons).fill('').map((el, index) => {
            return (
              <>
                <li
                  class={`page-item ${index + 1 === counter ? 'active' : null}`}
                >
                  <p
                    class="page-link"
                    href=""
                    onClick={() => setcounter(index + 1)}
                  >
                    {index + 1}
                  </p>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
