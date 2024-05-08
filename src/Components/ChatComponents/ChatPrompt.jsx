// ChatPrompt.js

import React, { useRef, useEffect } from 'react';

const ChatPrompt = ({ onSubmit, placeholder }) => {
  const textareaRef = useRef(null);

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      const lines = textareaRef.current.value.split('\n').length;
      const lineHeight = 20; 
      const newHeight = `${lines * lineHeight}px`;
      textareaRef.current.style.height = newHeight;
    }
  };

  useEffect(() => {
    handleTextareaChange();
  }, []); 

  return (
    <div>
      <textarea
        ref={textareaRef}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        onChange={handleTextareaChange}
      />
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={() => onSubmit(textareaRef.current.value)}
      >
        Submit
      </button>
    </div>
  );
};

export default ChatPrompt;
