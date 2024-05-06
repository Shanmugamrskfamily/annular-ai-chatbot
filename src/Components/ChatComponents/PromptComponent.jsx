import React, { useState } from 'react';

const PromptComponent = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({user:inputValue});
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        required
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default PromptComponent;
