import React, { useState, useRef } from 'react';
import { PaperAirplaneIcon, PaperClipIcon } from "@heroicons/react/24/solid";

function ConversationPrompt({ placeholderText, onSendMessage }) {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null); // State to store the uploaded file
  const textareaRef = useRef(null); // Ref to textarea element
  const fileInputRef = useRef(null); // Ref to file input element

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    // Automatically adjust textarea height
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      onSendMessage({ user: message });
      setMessage('');
    } else if (file) {
      // Handle file upload here
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        onSendMessage({ file: text });
      };
      reader.readAsText(file);
      setFile(null); // Clear the file state after sending
    }
  };

  return (
    <div className='w-full bottom-0'>
      <div className="flex border border-gray-300 rounded-lg">
        <input
          ref={textareaRef}
          type="text"
          placeholder={placeholderText}
          value={message}
          onChange={handleMessageChange}
          className="flex-1 outline-none px-2 resize-none"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <label htmlFor="fileUpload" className="cursor-pointer">
          <PaperClipIcon className="h-6 w-6 text-gray-500" />
        </label>
        <button onClick={handleSendClick} className="ml-2">
          <PaperAirplaneIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      <p className='text-center text-lg'>Annular Chat AI ©Annular Technologies</p>
    </div>
  );
}

export default ConversationPrompt;
