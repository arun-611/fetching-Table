import Table from "./Table";
import "./App.css";

import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
      );
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="header">
        <h1>Employee Details</h1>
      </header>
      <Table data={data} />
      {/* <div>
      {data && data.map((item)=>{
        <div key={item.id}>{item.fname}</div>
      })}
    </div> */}
    </div>
  );
}

export default App;
