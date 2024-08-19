import React, { useEffect, useRef, useState } from 'react';

const ResizeWindow = () => {

  // to resize window
//   useEffect(() => {
//     setTimeout(() => {
//     //   const popup = window.open('', '_blank', 'width=200,height=200');
//     //   if (popup) {
//     //     popup.focus();
//     //   }
//     //
//     window.open('', '_blank', 'width=200,height=200');
//      }, 3000
//     );
//   },[]);

// to automatically click button when loaded and change colur
  const [clicked, setClicked] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    setTimeout(() => {
      buttonRef.current.click();
    }, 3000);
  }, [buttonRef]);

  return (
    <>
      <p>Hello there</p>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`${clicked ? 'bg-purple-500' : 'bg-green-500'} p-2`}
      >
        click me
      </button>
    </>
  );
};

export default ResizeWindow;




