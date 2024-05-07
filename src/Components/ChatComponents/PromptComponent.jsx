import React, { useState } from 'react';
import { PaperClipIcon } from "@heroicons/react/24/solid";
import pdfToText from 'react-pdftotext'
import mammoth from 'mammoth';
import * as XLSX from 'xlsx';

const PromptComponent = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [fileContent, setFileContent] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const fileName = file.name;
    const fileFormat = fileName.split('.').pop();
    console.log('File Format:', fileFormat);
    
    if (fileFormat === 'txt') {
        const reader = new FileReader();
        reader.onload = (event) => {
            const value = event.target.result;
            console.log('File Content:', value);
            onSubmit({ user: value });
        };
        reader.readAsText(file);
    } else if (fileFormat === 'pdf') {
        try {
            const text = await pdfToText(file);
            onSubmit({ user: text });
        } catch (error) {
            console.error("Failed to extract text from pdf:", error);
        }
    } else if (fileFormat === 'docx' || fileFormat === 'doc') {
        const reader = new FileReader();
        reader.onload = async (event) => {
            const arrayBuffer = event.target.result;
            try {
                const result = await mammoth.extractRawText({ arrayBuffer });
                const text = result.value;
                onSubmit({ user: text });
            } catch (error) {
                console.error('Error reading docx file:', error);
            }
        };
        reader.readAsArrayBuffer(file);
    }
    else if (fileFormat === 'xls' || fileFormat === 'xlsx') {
      const reader = new FileReader();
      reader.onload = (event) => {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const excelContent = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          console.log('Excel Content:', excelContent);
          onSubmit({ user: excelContent });
      };
      reader.readAsArrayBuffer(file);
  }
};



  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileContent) {
      onSubmit({ user: fileContent });
      setFileContent('');
    } else {
      onSubmit({ user: inputValue });
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full space-x-2">
      <textarea
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <PaperClipIcon className="h-6 w-6 text-black" />
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".doc,.docx,.pdf,.txt,.xls,.xlsx"
          onChange={handleFileChange}
        />
      </label>
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default PromptComponent;
