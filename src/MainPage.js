import React, { useState, useRef } from 'react';

function MainPage({ onLogout }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [posts] = useState([
    {
      id: 1,
      author: 'David Moshko',
      time: '2 hours ago',
      content: 'Welcome to the Moshko Family website! Great to have everyone here.',
      likes: 15,
      comments: 3,
      shares: 2
    },
    {
      id: 2,
      author: 'Sarah Moshko',
      time: '5 hours ago',
      content: 'Had an amazing family dinner today. Missing everyone who couldn\'t make it!',
      likes: 23,
      comments: 7,
      shares: 1
    },
    {
      id: 3,
      author: 'Michael Moshko',
      time: '1 day ago',
      content: 'Just finished my final exams! Ready for summer break 🎉',
      likes: 45,
      comments: 12,
      shares: 0
    }
  ]);

  const handlePhotoClick = () => {
    // Add a small delay to ensure the file dialog opens properly
    setTimeout(() => {
      fileInputRef.current.click();
    }, 100);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    fileInputRef.current.value = '';
  };

  return (
    <div className="main-page">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="header-title">Moshko Family</h1>
          </div>
          <div className="header-right">
            <span className="welcome-text">Welcome, Admin</span>
            <button className="logout-button" onClick={onLogout}>Log Out</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="feed-container">
          {/* Create Post */}
          <div className="create-post">
            <div className="create-post-header">
              <div className="user-avatar">A</div>
              <input type="text" placeholder="What's on your mind, Admin?" className="create-post-input" />
            </div>
            
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            
            {/* Image preview */}
            {selectedImage && (
              <div className="image-preview">
                <img src={selectedImage} alt="Selected" className="preview-image" />
                <button className="remove-image" onClick={removeImage}>✕</button>
              </div>
            )}
            
            <div className="create-post-actions">
              <button className="post-action" onClick={handlePhotoClick} title="Select photos from your computer">📷 Photo</button>
              <button className="post-action">🎥 Video</button>
              <button className="post-action">😊 Feeling</button>
            </div>
            <div className="photo-hint">
              <small>💡 Tip: When the file dialog opens, navigate to your Pictures folder to find your photos</small>
            </div>
          </div>

          {/* Posts Feed */}
          {posts.map(post => (
            <div key={post.id} className="post">
              <div className="post-header">
                <div className="post-user">
                  <div className="user-avatar">{post.author.charAt(0)}</div>
                  <div className="post-info">
                    <h3 className="post-author">{post.author}</h3>
                    <span className="post-time">{post.time}</span>
                  </div>
                </div>
                <div className="post-menu">⋯</div>
              </div>
              
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              
              <div className="post-stats">
                <span className="post-likes">👍 {post.likes}</span>
                <div className="post-stats-right">
                  <span className="post-comments">{post.comments} comments</span>
                  <span className="post-shares">{post.shares} shares</span>
                </div>
              </div>
              
              <div className="post-actions">
                <button className="action-button">👍 Like</button>
                <button className="action-button">💬 Comment</button>
                <button className="action-button">↗️ Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;