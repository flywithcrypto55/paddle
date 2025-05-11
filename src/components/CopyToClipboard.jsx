import React, { useState } from 'react';

const CopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "CA-Coming Soon..";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className='flex items-center justify-center gap-2 bg-purple-300 p-2'>
      <span className='text-xs font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-center'>{textToCopy}</span>
      <button onClick={handleCopy} style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Copy">
        {copied ? (
          // ✅ Checkmark icon
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" viewBox="0 0 24 24">
            <path d="M20.285 6.708l-11.285 11.292-5.285-5.292 1.414-1.416 3.871 3.874 9.871-9.876z" />
          </svg>
        ) : (
          // 📋 Copy icon
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#333" viewBox="0 0 24 24">
            <path d="M16 1h-12c-1.104 0-2 .896-2 2v14h2v-14h12v-2zm3 4h-12c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm0 16h-12v-14h12v14z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CopyToClipboard;
