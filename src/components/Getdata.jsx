import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

function Getdata() {

    const[data,setData]=useState([])
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const url = `http://localhost:5000/items?page=${page}&limit=10`;
    
    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(newData => {
            console.log('Fetched data:', newData);
            if (newData && newData.length > 0) {
              if (data.length === 0) {
                setData(newData);
              } else {
                setData([...data, ...newData]);
              }
              if (newData.length < 10) {
                setHasMore(false);
              }
            } else {
              setHasMore(false);
            }
          })
          .catch(error => console.error('Error fetching data:', error));
      }, [page]);

      const fetchMoreData = () => {
        if (!hasMore) return;
        setPage(page + 1);
      };


  return (
    <div className='flex flex-col items-center '>
        <h1 className='text-2xl text-[#ab1e17] mt-3'>infinite scroll</h1>
     
     <div className='mt-5'>
        <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        >
     {  data.map((item, index) => (
          <div key={index}>
            <div className='text-2xl border px-4 py-3 mb-3'>
                 {item.id}<br></br>
                {item.name}<br></br>
                {item.category}<br></br>
                {item.price}<br></br>
                {item.quantity}
                </div>
          </div>
        ))}
       </InfiniteScroll>

                
     </div>
    </div>
  )
}

export default Getdata
