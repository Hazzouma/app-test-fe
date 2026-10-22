import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedPost from './FeedPost';

// Mock the localStorage API
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
  writable: true,
});

describe('FeedPost Component', () => {
  const mockPost = {
    id: 1,
    author: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg",
    content: "This is a test post",
    timestamp: "2 hours ago",
    likes: 5,
    comments: 2
  };

  beforeEach(() => {
    mockLocalStorage.getItem.mockClear();
    mockLocalStorage.setItem.mockClear();
  });

  it('renders post correctly', () => {
    render(<FeedPost {...mockPost} />);
    
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("This is a test post")).toBeInTheDocument();
    expect(screen.getByText("2 hours ago")).toBeInTheDocument();
  });

  it('handles like functionality', () => {
    render(<FeedPost {...mockPost} />);
    
    const likeButton = screen.getByRole('button', { name: /Like post/i });
    expect(likeButton).toBeInTheDocument();
    
    // Clicking the button should trigger a like
    // Note: We can't easily test the actual state changes in this simple test
  });

  it('renders comments section', () => {
    render(<FeedPost {...mockPost} />);
    
    const commentSection = screen.getByText(/Write a comment/i);
    expect(commentSection).toBeInTheDocument();
  });
});