import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedPage from './FeedPage';

describe('FeedPage Component', () => {
  it('renders the feed page with posts', () => {
    render(<FeedPage />);
    
    // Check if the header is rendered
    expect(screen.getByText("Feed")).toBeInTheDocument();
    expect(screen.getByText(/Stay connected/i)).toBeInTheDocument();
    
    // Check if create post box is rendered
    expect(screen.getByPlaceholderText(/What's on your mind/i)).toBeInTheDocument();
    
    // Check if at least one post is rendered
    expect(screen.getByText(/Just finished an amazing hiking trip/i)).toBeInTheDocument();
  });
});