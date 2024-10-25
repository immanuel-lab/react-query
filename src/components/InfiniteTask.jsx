import React, { useMemo, useState, useEffect } from "react";

function InfiniteTask() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    // const url = "http://localhost:5000/items";
    const url = "https://my-json-server.typicode.com/typicode/demo/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}
export default InfiniteTask;
