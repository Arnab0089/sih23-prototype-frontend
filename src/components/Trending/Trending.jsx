import { useState } from 'react';
import Post from '../Post/Post.jsx';
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
    setShowAllPosts(!showAllPosts);
  };

  return (
    <div className="trending-component w-full flex flex-col rounded-lg gap-2">
      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="font-semibold">Trending Community Posts</h2>
        {!showAllPosts && (
          <p
            className="font-bold rounded text-red-700 cursor-pointer"
            onClick={handleSeeAllClick}
          >
            See All
          </p>
        )}
        {showAllPosts && (
          <p
            className="font-bold rounded text-red-700 cursor-pointer"
            onClick={handleSeeAllClick}
          >
            See Less
          </p>
        )}
      </div>
      <div className="flex flex-row w-full justify-center">
        <ul className="trending-list flex flex-col gap-3 w-full">
          {displayedPosts.map((post) => (
            <li key={post.id} className="trending-item w-full">
              <Post className="" post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
