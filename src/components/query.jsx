import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GridLoader } from "react-spinners";

function Query() {
  const getItems = async () => {
    const response = await fetch("http://localhost:50000/items");
    // console.log(response);
    return response.json();
  };

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
    cacheTime: 1000 * 60 * 60, // 1 hour
    // keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  console.log(data);
  return (
    <>
      {isError && (
        <p className="text-center text-4xl text-red-600">{error.message}</p>
      )}

      {isLoading && (
        <div className="flex justify-center items-center min-h-screen">
          {<GridLoader size={10} color="#36d7b7" />}
        </div>
      )}

      <ul className="mt-4">
        {data?.map((item) => (
          <li
            key={item.id}
            className="text-center text-green-700 flex justify-center"
          >
            <div className="flex flex-col items-center mb-5 border border-blue-600 w-1/3">
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Query;
