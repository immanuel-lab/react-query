import React, { useRef, useState } from "react";

function FileUpload() {
  const [file, setFile] = useState([]);

  const fileRef = useRef(null);
  const handleUploadButtonClick = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFile((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (fileName) => {
    setFile((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <input
          type="file"
          // multiple
          hidden
          ref={fileRef}
          onChange={handleFileChange}
        />
        <button
          onClick={handleUploadButtonClick}
          className="bg-gray-300 p-2 rounded-lg"
        >
          Upload Files
        </button>
        <br></br>
        {file.length > 0 &&
          file.map((file1) => (
            <div className="flex flex-col" key={file1.name}>
              {file1.name} ({file1.size} bytes) {file1.type}
              <button
                onClick={() => handleRemoveFile(file1.name)}
                className="bg-red-500 text-white p-1 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FileUpload;
