export interface User {
  id: number;
  username: string;
  displayName: string;
  avatarUrl: string;
  followersCount: number;
  followingCount: number;
}

export interface Media {
  type: "image" | "video";
  url: string;
}

export interface TwitterPost {
  id: number;
  user: User;
  content: string;
  timestamp: string; // Assuming ISO 8601 format
  likes: number;
  retweets: number;
  replies: number;
  media?: Media[]; // Media is an optional array
}
export const twitterPosts:TwitterPost[] = [
  {
    id: 1,
    user: {
      id: 123,
      username: "user123",
      displayName: "User 123",
      avatarUrl: "https://example.com/avatar123.jpg",
      followersCount: 1000,
      followingCount: 500,
    },
    content: "This is a sample tweet. #example #twitter",
    timestamp: "2024-02-25T12:30:00Z",
    likes: 20,
    retweets: 10,
    replies: 5,
    media: [
      {
        type: "image",
        url: "https://example.com/image1.jpg",
      },
      {
        type: "video",
        url: "https://example.com/video1.mp4",
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 456,
      username: "user456",
      displayName: "User 456",
      avatarUrl: "https://example.com/avatar456.jpg",
      followersCount: 500,
      followingCount: 200,
    },
    content: "Check out this cool article! #article #news",
    timestamp: "2024-02-25T13:45:00Z",
    likes: 15,
    retweets: 5,
    replies: 2,
    media: [
      {
        type: "image",
        url: "https://example.com/image2.jpg",
      },
    ],
  },
  // Add more posts as needed
  {
    id: 3,
    user: {
      id: 789,
      username: "user789",
      displayName: "User 789",
      avatarUrl: "https://example.com/avatar789.jpg",
      followersCount: 2000,
      followingCount: 1500,
    },
    content: "Just posted a new blog article! Check it out. #blog #writing",
    timestamp: "2024-02-25T15:20:00Z",
    likes: 30,
    retweets: 8,
    replies: 3,
    media: [
      {
        type: "image",
        url: "https://example.com/image3.jpg",
      },
      {
        type: "image",
        url: "https://example.com/image4.jpg",
      },
    ],
  },
  // Add more posts as needed
];
