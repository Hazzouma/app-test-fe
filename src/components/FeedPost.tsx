import React, { useState } from 'react';
import { FeedPostProps } from '../types';

const FeedPost: React.FC<FeedPostProps> = ({ 
  author, 
  avatarUrl, 
  content, 
  timestamp,
  likes = 0,
  comments = 0 
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      console.log(`New comment: ${commentText}`);
      setCommentText('');
    }
  };

  return (
    <div className="feed-post">
      {/* Post Header */}
      <div className="post-header">
        <img src={avatarUrl} alt={author} className="avatar" />
        <div className="post-info">
          <span className="author-name">{author}</span>
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>

      {/* Post Content */}
      <div className="post-content">
        {content}
      </div>

      {/* Post Actions */}
      <div className="post-actions">
        <button 
          className={`action-btn ${liked ? 'liked' : ''}`}
          onClick={handleLike}
          aria-label={`Like post, ${likeCount} likes`}
        >
          <span className="icon">👍</span>
          <span>{likeCount}</span>
        </button>
        <button className="action-btn" aria-label="Comment on post">
          <span className="icon">💬</span>
          <span>{comments}</span>
        </button>
        <button className="action-btn" aria-label="Share post">
          <span className="icon">🔗</span>
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="comment-input"
          />
          <button type="submit" className="comment-submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default FeedPost;
