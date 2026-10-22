import React, { useState, useEffect } from 'react';
import { FeedPostProps } from '../types';

const FeedPost: React.FC<FeedPostProps> = ({ 
  id,
  author, 
  avatarUrl, 
  content, 
  timestamp,
  likes = 0,
  comments = 0,
  onLike,
  onComment
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState<{id: number; text: string; author: string}[]>([]);

  // Load comments from localStorage when component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem(`post_comments_${id}`);
    if (savedComments) {
      try {
        setCommentsList(JSON.parse(savedComments));
      } catch (e) {
        console.error('Failed to parse comments from localStorage', e);
      }
    }
  }, [id]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (commentsList.length > 0) {
      try {
        localStorage.setItem(`post_comments_${id}`, JSON.stringify(commentsList));
      } catch (e) {
        console.error('Failed to save comments to localStorage', e);
      }
    }
  }, [commentsList, id]);

  const handleLike = () => {
    setLiked(!liked);
    const newLikeCount = liked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);
    
    // Call parent function if provided
    if (onLike) {
      onLike(id, newLikeCount);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(), // Simple ID generation
        text: commentText.trim(),
        author: "You" // For demo purposes, we'll just show "You"
      };
      
      const updatedCommentsList = [...commentsList, newComment];
      setCommentsList(updatedCommentsList);
      setCommentText('');
      
      // Call parent function if provided
      if (onComment) {
        onComment(id, commentText.trim());
      }
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
          <span>{commentsList.length}</span>
        </button>
        <button className="action-btn" aria-label="Share post">
          <span className="icon">🔗</span>
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        {commentsList.length > 0 && (
          <div className="existing-comments">
            {commentsList.map(comment => (
              <div key={comment.id} className="comment-item">
                <span className="comment-author">{comment.author}: </span>
                <span className="comment-text">{comment.text}</span>
              </div>
            ))}
          </div>
        )}
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
