import Layout from '../layouts/Layout';
import Trending from '../components/Trending/Trending.jsx';
import Welcome from '../components/Welcome/welcome.jsx';
import SearchBar from '../components/Searchbar/SearchBar.jsx';


// home page component
export default function Home() {
	const trendingPosts = [
		{ id: 1, profilePicture: 'https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png', author: 'Geetanjali', username: 'geetanjali26', comments: '46', retweets: '18', likes: '363', time: '3h', title: 'More power to all women!' },
		{ id: 2, profilePicture: 'https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png', author: 'Ranvijay', username: 'ranvijay27', comments: '47', retweets: '19', likes: '364', time: '4h', title: 'Sunai de raha hain, behra nahi hu main!' },
		{ id: 3, profilePicture: 'https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png', author: 'Balbir', username: 'balbir28', comments: '48', retweets: '20', likes: '365', time: '5h', title: 'Papa papa papa!' },
	];

	return (
		<Layout>
			<h1>Home</h1>
			{/* Write your code here */}
			<SearchBar />
			<Welcome />
			<Trending posts={trendingPosts} />
		</Layout>
	);
}
