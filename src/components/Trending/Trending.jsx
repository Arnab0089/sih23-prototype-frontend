import { useState } from 'react';
// import { Post } from "../Post/Post";
import {
  FaRegComment,
  FaRegCaretSquareUp,
  FaRegHeart,
  FaShareAlt,
} from 'react-icons/fa';

// trending community post component for home page
export default function Trending({ posts }) {
  const [showAllPosts, setShowAllPosts] = useState(false);
  const displayedPosts = showAllPosts ? posts : [posts[0]];
  const handleSeeAllClick = () => {
    setShowAllPosts(true);
  };

  return (
    <div className="trending-component flex flex-col bg-foreground-element-2 p-2 rounded-lg">
      <div className="flex flex-row items-center justify-between w-full p-1">
        <h2 className="font-semibold">Trending Community Posts</h2>
        {!showAllPosts && (
          <p
            className="font-bold rounded text-red-700 cursor-pointer"
            onClick={handleSeeAllClick}
          >
            See All
          </p>
        )}
      </div>
      <div className="flex flex-row">
        <ul className="trending-list flex flex-col gap-2">
          {displayedPosts.map((post) => (
            <li key={post.id} className="trending-item py-5">
              <div className="flex flex-row">
                <img
                  src={post.profilePicture}
                  alt="Profile picture"
                  className="flex w-1/6 rounded-full h-min ml-2 mr-1 shadow-md"
                />

                <div className="ml-1 mr-2 w-full">
                  <div className="post-header flex flex-row font-bold">
                    <span className="post-author">{post.author}</span>
                    <span className="post-username mx-1 text-gray-600">
                      @{post.username}
                    </span>
                    <span className="post-time ml-auto text-gray-500">
                      {post.time}
                    </span>
                  </div>

                  <div className="post-content flex flex-row my-1">
                    <p className="post-title font-medium">{post.title}</p>
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
  );
}
