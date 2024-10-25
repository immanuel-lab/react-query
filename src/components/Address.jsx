// import React, { useState, useEffect } from 'react';

// function Address() {
//   const [ipAddress, setIpAddress] = useState('');
//   const [location, setLocation] = useState({});

//   useEffect(() => {
//     fetch('https://api.ipify.org?format=json')
//       .then(response => response.json())
//       .then(data => {
//         setIpAddress(data.ip);
//         fetch(`https://ip-api.com/json/${data.ip}`)
//           .then(response => response.json())
//           .then(data => setLocation(data));
//       });
//   }, []);

//   return (
//     <div>
//       <p>Public IP Address: {ipAddress}</p>
//       {location && (
//         <div>
//           <p>Location:</p>
//           <p>Country: {location.country}</p>
//           <p>Region: {location.region}</p>
//           <p>City: {location.city}</p>
//           <p>Latitude: {location.lat}</p>
//           <p>Longitude: {location.lon}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Address;



