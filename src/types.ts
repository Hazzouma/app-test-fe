export interface Post {
  id: number;
  author: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface FeedPostProps extends Post {
  onLike?: (postId: number, newLikeCount: number) => void;
  onComment?: (postId: number, commentText: string) => void;
}
