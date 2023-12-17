import { faClock, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

// trending community post component for home page
export default function Trending({ posts }) {

	const [showAllPosts, setShowAllPosts] = useState(false);
	const displayedPosts = showAllPosts ? posts : [posts[0]];
	const handleSeeAllClick = () => {
		setShowAllPosts(true);
	};

	return (
		<div className="trending-component flex flex-col bg-pink-200 w-screen h-auto items-center justify-center max-w-[384px] mx-auto rounded-md">
			<div className="flex flex-row items-center justify-between w-full p-1">
				<h2 className="font-semibold">Trending Community Posts</h2>
				{!showAllPosts && (
					<p className="font-bold rounded text-red-700 cursor-pointer" onClick={handleSeeAllClick}>See All</p>
				)}
			</div>
			<div className="flex flex-row">
				<ul className="trending-list">
					{displayedPosts.map(post => (
						<li key={post.id} className="trending-item py-5">

							<div className="flex flex-row">

								<img src={post.profilePicture} alt="Profile picture" className="flex w-1/6 rounded-full ml-2 mr-1 shadow-md" />

								<div className="ml-1 mr-2 w-full">
									<div className="post-header flex flex-row font-bold">
										<span className="post-author">{post.author}</span>
										<span className="post-username mx-1 text-gray-600">@{post.username}</span>
										<span className="post-time ml-auto text-gray-500">{post.time}</span>
									</div>

									<div className="post-content flex flex-row">
										<p className="post-title font-medium">{post.title}</p>
									</div>

									<div className="post-footer flex flex-row justify-between">
										<span className="post-stats">
											{post.comments}
											<FontAwesomeIcon icon={faMessage} className="text-gray-500 mx-2" /></span>
										<span className="post-stats">
											{post.retweets}
											<FontAwesomeIcon icon={faMessage} className="text-gray-500 mx-2" /></span>
										<span className="post-stats">
											{post.likes}
											<FontAwesomeIcon icon={faMessage} className="text-gray-500 mx-2" /></span>
										<span className="post-stats">
											<FontAwesomeIcon icon={faMessage} className="text-gray-500 mx-2" /></span>
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