import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UrlInput = ({ onUrlChange }) => {
  const [urls, setUrls] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setUrls(value);
    validateUrls(value);
  };

  const validateUrls = (input) => {
    const urlPattern = /^((https?|ftp):\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}(\/\S*)?$/;
    const urlsArray = input.split(',').map(url => url.trim());
    const invalidUrls = urlsArray.filter(url => !urlPattern.test(url));

    if (invalidUrls.length > 0) {
      toast.error(`Invalid URLs: ${invalidUrls.join(', ')}`);
    } else {
      if (onUrlChange) {
        onUrlChange(urlsArray);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <textarea
        className="w-full h-32 p-2 resize-none border rounded focus:outline-none focus:border-blue-500"
        value={urls}
        onChange={handleChange}
        placeholder="Enter comma-separated URLs..."
        style={{ overflowY: 'scroll' }}
      />
    </div>
  );
};

export default UrlInput;
