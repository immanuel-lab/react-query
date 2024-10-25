// import Abort from "./components/Abort"
// import Datafetch from "./components/Datafetch"
// import Effectasync from "./components/Effectasync"
// import Login from "./components/Login"
// import Register from "./components/Register"
// import Scroll from "./Framer Motions/Scroll"
// import Query from "./components/query"

// import Grid from "./components/Grid"

// import Debounce from "./components/Debounce"
// import Dragdrop from "./components/Dragdrop"
// import Dragdrop2 from "./components/Dragdrop2"
// import FileUpload from "./components/FileUpload"
// import Resizewindow from "./components/resizewindow"
// import Memocallback from "./components/Memocallback"
// import Searchcaraousal from "./components/Searchcaraousal"

// import Page from "./Framer Motions/Page1"
import { BrowserRouter, Route, Routes } from "react-router-dom";
//  import Flex from "./components/Flex"

// import Debouncetwo from "./components/Debouncetwo"
// import Debounce3 from "./components/Debounce3"

// import Address from "./components/Address"

// import Callbacks from "./components/Callbacks"

// import  Oneback from "./callbacks/Oneback"
// import Twocallback from "./callbacks/Twocallback"

// import Notifications1 from "./components/Notifications1"
// import Infinitescroll from "./components/Infinitescroll"
// import Infinitescroll2 from "./components/Infinitescroll2"

import FileUpload from "./components/FileUpload";
import InfiniteTask from "./components/InfiniteTask";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <p className='text-center text-red-500 text-3xl'>POKEMON</p> */}
      {/* <Query/> */}
      {/* <Datafetch/> */}
      {/* <Effectasync/> */}

      {/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Register/>} />
  <Route path="/login" element={<Login/>} />
</Routes>

</BrowserRouter>  */}
      {/* <Searchcaraousal/> */}
      {/* <Debounce/> */}
      {/* <Dragdrop/> */}
      {/* <Dragdrop2/> */}

      {/* <Debouncetwo/> */}

      {/* <Debounce3/> */}

      {/* <FileUpload/> */}
      {/* <Resizewindow/> */}

      {/* <Memocallback/> */}
      {/* <Register/> */}
      {/* <Scroll/> */}
      {/* <Abort/> */}

      {/* <Page/> */}

      {/* <Flex/> */}

      {/* <Grid/> */}

      {/* <Address/> */}

      {/* <Oneback/> */}

      {/* <Twocallback/> */}

      {/* <Notifications1/> */}

      {/* <Infinitescroll/> */}
      {/* <Infinitescroll2/> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<InfiniteTask />} />
          <Route path="/fileupload" element={<FileUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
