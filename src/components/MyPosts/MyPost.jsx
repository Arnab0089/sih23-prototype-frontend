import React from 'react';
import Post from '../Post/Post.jsx';
import {
  FaRegComment,
  FaRegCaretSquareUp,
  FaRegHeart,
  FaShareAlt,
} from 'react-icons/fa';

const MyPost = () => {
  const posts = [
    {
      id: 1,
      profilePicture:
        'https://i.pinimg.com/originals/24/ca/51/24ca51edd82d5828340f6a87edbbb529.jpg',
      user: 'Zendaya',
      username: 'zendaya10',
      comments: 10,
      downvotes: '10',
      upvotes: 10,
      time: '1h',
      title: 'More power to all women!',
    },
    {
      id: 2,
      profilePicture:
        'https://i.pinimg.com/originals/24/ca/51/24ca51edd82d5828340f6a87edbbb529.jpg',
      user: 'Zendaya',
      username: 'zendaya10',
      comments: 20,
      downvotes: '20',
      upvotes: 20,
      time: '2h',
      title: 'More power to all men!',
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-lg my-2 mx-4 text-primary-text font-bold">
        My Posts
      </h2>

      <div className="my-post-component mb-10 rounded-md mx-4">
        <div className="flex w-full items-center justify-center">
          <ul className="flex flex-col gap-2 w-full">
            {posts.map((post, index) => (
              <li key={index}>
                <Post className="" post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
