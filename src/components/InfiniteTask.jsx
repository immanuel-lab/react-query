import React, { useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

function InfiniteTask() {
  const fetchItems = async ({ pageParam = 0 }) => {
    const response = await axios.get(
      `http://localhost:8000/product-categories?page=${pageParam}`
    );
    console.log(response.data);
    return response.data;
  };

  let previousPage;
  let executedCount = 0;
  let currentPage = 1;

  const getNextPageParam = useCallback((lastPage) => {
    if (!lastPage.next) {
      return undefined;
    }

    const url = new URL(lastPage.next);
    const page = url.searchParams.get("page");

    executedCount++;
    console.log(`getNextPageParam executed ${executedCount} times`);

    if (page !== previousPage) {
      console.log(`New page: ${page}`);
      previousPage = page;
      currentPage = parseInt(page);
    }

    return parseInt(page);
  }, []);

  const { data, error, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["items"],
      queryFn: fetchItems,
      refetchOnWindowFocus: false,
      initialPageParam: 1,

      getNextPageParam,
    });

  return (
    <div className="flex flex-col items-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p className="text-red-500">{error?.message || "An error occurred"}</p>
      ) : (
        data?.pages?.map((page) =>
          page.results.map((item) => (
            <div key={item.id}>
              <p className="text-blue-800 text-lg text-center">
                {" "}
                {item.category_name}
              </p>
              <img src={item.category_image} width="300" height="20" />
            </div>
          ))
        )
      )}

      <div className="mt-4 mb-4">
        {hasNextPage ? (
          <button
            className="bg-blue-600 p-2 text-white"
            onClick={fetchNextPage}
          >
            Load more
          </button>
        ) : (
          <button disabled className="bg-gray-600 p-2 text-white">
            Load more
          </button>
        )}
      </div>
    </div>
  );
}

export default InfiniteTask;
