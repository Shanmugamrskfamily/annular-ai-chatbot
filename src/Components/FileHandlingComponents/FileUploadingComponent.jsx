import React, { useState } from 'react';
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

const FileUploadingComponent = (props) => {
    
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
      setCurrentPage(1);
      props.onFileUpload(files);
    };
  
    const handleRemoveFile = (index) => {
      const updatedFiles = [...selectedFiles];
      updatedFiles.splice(index, 1);
      setSelectedFiles(updatedFiles);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
      setCurrentPage(1);
      props.onFileUpload(files);
    };
  
    const totalPages = Math.ceil(selectedFiles.length / pageSize);
    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
  
    const displayFiles = selectedFiles.slice(startIdx, endIdx);
  
    return (
      <div className="w-full mx-auto" onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="flex w-full items-center justify-between border-b border-gray-300 mb-4 pb-2 gap-2">
          <div className='w-[90%]'>
            <label htmlFor="fileInput" className="cursor-pointer">
              <div className="border w-full border-dashed border-gray-400 rounded-lg p-4 flex">
                <span className='w-full text-2xl'><CloudArrowUpIcon className="h-12 w-12 text-gray-500" />Drag and drop files here</span>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept={props.allowedFileTypes}
                  onChange={handleFileChange}
                />
              </div>
            </label>
            <p className="text-sm text-gray-500 mt-1">Limited to {props.maxFileSize} per file</p>
          </div>
          <div className='w-[10%] items-center mb-5'>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={() => document.getElementById('fileInput').click()}
            >
              Browse files
            </button>
          </div>
        </div>
        <div>
          {displayFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
              <span>{file.name}</span>
              <button className="text-red-500" onClick={() => handleRemoveFile(startIdx + index)}>
                &#10006;
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            className={`text-sm ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500'} ${
              currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm text-gray-500">
            Showing page {currentPage} of {totalPages}
          </span>
          <button
            className={`text-sm ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500'} ${
              currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default FileUploadingComponent;
  