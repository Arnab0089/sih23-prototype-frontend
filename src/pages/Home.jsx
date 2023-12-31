import Layout from '../layouts/Layout';
import Header from '../components/Header/Header.jsx';
import Trending from '../components/Trending/Trending.jsx';
import Welcome from '../components/Welcome/Welcome.jsx';
import SearchBar from '../components/Searchbar/SearchBar.jsx';
import MapComponent from '../components/Map/Map.jsx';

// home page component
export default function Home() {
  const trendingPosts = [
    {
      id: 1,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5S5928kiNaJ0bM5keDodBrk2p2Ce22HkGQ&usqp=CAU',
      user: 'Geetanjali',
      username: 'geetanjali26',
      comments: '46',
      downvotes: '18',
      upvotes: '363',
      time: '3h',
      title: 'More power to all women!',
    },
    {
      id: 2,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStavLoSzNk309zTkctHbJDSru4jGw_gkQ3zg&usqp=CAU',
      user: 'Ranvijay',
      username: 'ranvijay27',
      comments: '47',
      downvotes: '19',
      upvotes: '364',
      time: '4h',
      title: 'Sunai de raha hain, behra nahi hu main!',
    },
    {
      id: 3,
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3a1kkTDVkwrUAWbiDxVNh-p9UPoZWzcqng&usqp=CAU',
      user: 'Balbir',
      username: 'balbir28',
      comments: '48',
      downvotes: '20',
      upvotes: '365',
      time: '5h',
      title: 'Papa papa papa!',
    },
  ];

  return (
    <Layout>
      {/* Write your code here */}
      <Header headerText="Home" />
      <div className="flex flex-col gap items-center gap-5 p-3">
        <SearchBar />
        <Welcome />
        <MapComponent
          className="w-full h-[300px] rounded-lg"
          styles={{ width: '100%' }}
        />
        {/*height & width are must for map whether in styles or className*/}
        <Trending posts={trendingPosts} />
      </div>
    </Layout>
  );
}
