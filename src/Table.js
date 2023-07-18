import "./Table.css";
import { useState } from "react";
const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div >
        <div className="table-container">
        <table className="table">
        <thead className="head">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody className="body">
          {currentItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
                <td>{item.dob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
     
      <br></br>
      <div className="buttons">
        <button onClick={prevPage}>Prev</button>
        <p>{currentPage}</p>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Table;
