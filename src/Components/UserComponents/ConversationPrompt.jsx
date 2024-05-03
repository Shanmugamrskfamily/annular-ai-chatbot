import React, { useState } from 'react';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";


function ConversationPrompt({ placeholderText, onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      onSendMessage({user:message});
      setMessage('');
    }
  };

  return (
    <div className='bg-white'>
    <div className="flex items-center border  border-gray-300 rounded-lg">
      <textarea
        type="text"
        placeholder={placeholderText}
        value={message}
        onChange={handleMessageChange}
        className="flex-1 outline-none px-2"
      />
      <button onClick={handleSendClick} className="ml-2">
      <PaperAirplaneIcon className="h-6 w-6 text-gray-500" />
      </button>
    </div>
    <p className='text-center text-lg'>Annular Chat AI ©Annular Technologies</p>
    </div>
  );
}

export default ConversationPrompt;