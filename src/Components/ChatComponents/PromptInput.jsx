// PromptInput.js
import React, { useState } from 'react';

const PromptInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="flex-grow px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Type something..."
      />
      <button type="submit" className="ml-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
      </button>
    </form>
  );
};

export default PromptInput;
