import React, { useState } from 'react';
import Sidebar from '../component/sidebar';
import '../css/WritePage.css';

const WritePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 1000;

  const handleContentChange = (e) => {
    const text = e.target.value;
    if (text.length <= MAX_CHARS) {
      setContent(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = () => {
    console.log({ title, content });
  };
  return (
    <div className="write-post-page">
      <Sidebar />
      <div className="content">
        <div className="write-container">
          <div className="title-input">
            <input
              type="text"
              placeholder="Hãy viết tiêu đề."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="content-input">
            <textarea placeholder="Hãy nhập nội dung." value={content} onChange={handleContentChange} />
            <div className="char-count">
              ({charCount} / {MAX_CHARS})
            </div>
          </div>

          <div className="button-container">
            <button onClick={handleSubmit}>sự hoàn thành</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePost;
