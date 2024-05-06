import React, { useState } from 'react';

function Convert() {
  const [text, setText] = useState('');

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Read the file content as text
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        setText(fileContent);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h1>Document Converter</h1>
      <input type="file" onChange={handleFileChange} />
      <div>
        <h2>Text Extracted from Document:</h2>
        <pre>{text}</pre>
      </div>
    </div>
  );
}

export default Convert;
