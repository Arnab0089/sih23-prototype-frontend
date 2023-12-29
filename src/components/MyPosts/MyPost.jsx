import React from 'react';
import {
  FaRegComment,
  FaRegCaretSquareUp,
  FaRegHeart,
  FaShareAlt,
} from 'react-icons/fa';

const MyPost = () => {
  const userCommonData = {
    id: 1,
    name: 'Zendaya',
    username: '@zendaya10',
    profilePicture:
      'https://i.pinimg.com/originals/24/ca/51/24ca51edd82d5828340f6a87edbbb529.jpg',
  };

  const posts = [
    {
      time: '4h',
      content: 'More power to all women!',
      comments: 46,
      retweets: 18,
      likes: 363,
    },

    {
      time: '3h',
      content: 'This is another post!',
      comments: 20,
      retweets: 10,
      likes: 150,
    },
  ];

  return (
    <>
      <h2 className="text-lg mx-4 my-2 text-primary-text font-bold">
        My Posts
      </h2>

      <div className="trending-component flex flex-col w-screen h-auto items-center justify-center max-w-[384px] mx-auto mb-10 rounded-md">
        <div className="flex flex-row">
          <ul className="trending-list flex flex-col gap-2">
            {posts.map((post, index) => (
              <li key={index} className="trending-item">
                <div className="flex flex-row justify-between bg-foreground-element-2 py-4 rounded-md">
                  <img
                    src={userCommonData.profilePicture}
                    alt="Profile picture"
                    className="flex w-1/6 h-min rounded-full object-cover mx-4"
                  />

                  <div className="ml-1 mr-2 w-full">
                    <div className="post-header flex flex-row font-bold">
                      <span className="post-author">{userCommonData.name}</span>
                      <span className="post-username mx-1 text-gray-600">
                        {userCommonData.username}
                      </span>
                      <span className="post-time ml-auto text-gray-500">
                        {post.time}
                      </span>
                    </div>

                    <div className="post-content flex flex-row my-1">
                      <p className="post-title font-medium">{post.content}</p>
                    </div>

                    <div className="post-footer flex flex-row justify-between">
                      <span className="post-stats flex flex-row justify-between">
                        {post.comments}
                        <FaRegComment className="text-gray-800 m-1" />
                      </span>
                      <span className="post-stats flex flex-row justify-between">
                        {post.retweets}
                        <FaRegCaretSquareUp className="text-gray-800 m-1" />
                      </span>
                      <span className="post-stats flex flex-row justify-between">
                        {post.likes}
                        <FaRegHeart className="text-gray-800 m-1" />
                      </span>
                      <span className="post-stats flex flex-row justify-between">
                        <FaShareAlt className="text-gray-800 m-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyPost;
