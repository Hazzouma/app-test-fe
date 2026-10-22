import React from 'react';
import FeedPost from './FeedPost';
import { Post } from '../types';

const samplePosts: Post[] = [
  {
    id: 1,
    author: "John Doe",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    content: "Just finished an amazing hiking trip! The views were absolutely breathtaking. 🏔️ #hiking #nature #adventure",
    timestamp: "2 hours ago",
    likes: 42,
    comments: 8
  },
  {
    id: 2,
    author: "Sarah Smith",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    content: "Today's coffee was the best I've had all week! ☕️ What's your favorite morning brew?",
    timestamp: "4 hours ago",
    likes: 28,
    comments: 15
  },
  {
    id: 3,
    author: "Mike Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    content: "Working on a new React project with Vite. The development experience is incredible! 🚀 #react #vite #webdev",
    timestamp: "6 hours ago",
    likes: 67,
    comments: 23
  },
  {
    id: 4,
    author: "Emily Brown",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
    content: "Just discovered this amazing recipe for homemade pasta! 🍝 Recipe in my stories!",
    timestamp: "8 hours ago",
    likes: 35,
    comments: 12
  }
];

const FeedPage: React.FC = () => {
  // Handle like action
  const handleLike = (postId: number, newLikeCount: number) => {
    console.log(`Post ${postId} liked. New count: ${newLikeCount}`);
    // In a real app, this would update the backend or local state
  };

  // Handle comment action
  const handleComment = (postId: number, commentText: string) => {
    console.log(`New comment on post ${postId}: ${commentText}`);
    // In a real app, this would update the backend or local state
  };

  return (
    <div className="feed-page">
      {/* Page Header */}
      <header className="feed-header">
        <h1>Feed</h1>
        <p className="subtitle">Stay connected with your friends and community</p>
      </header>

      {/* Create Post Box */}
      <div className="create-post-box">
        <div className="create-post-header">
          <img src="https://i.pravatar.cc/150?img=60" alt="Your avatar" className="avatar" />
          <input 
            type="text" 
            placeholder="What's on your mind?" 
            className="create-post-input"
          />
        </div>
        <div className="create-post-actions">
          <button className="action-btn primary">Post</button>
          <button className="action-btn secondary">Photo</button>
          <button className="action-btn secondary">Video</button>
        </div>
      </div>

      {/* Feed Posts */}
      <main className="feed-main">
        {samplePosts.map((post) => (
          <FeedPost 
            key={post.id} 
            {...post} 
            onLike={handleLike}
            onComment={handleComment}
          />
        ))}
      </main>

      {/* Load More Button */}
      <div className="load-more-container">
        <button className="load-more-btn">Load more posts</button>
      </div>
    </div>
  );
};

export default FeedPage;
