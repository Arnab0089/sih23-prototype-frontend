import Layout from '../layouts/Layout';
import Header from '../components/Header/Header.jsx';
import ProfileAbout from '../components/ProfileAbout/ProfileAbout.jsx';
import { AchievementBadges } from '../components/Badges/AchievementBadges.jsx';
import MyPost from '../components/MyPosts/MyPost.jsx';

// user profile page component
export default function Profile() {
  const userProfile = {
    profilePicture:
      'https://i.pinimg.com/originals/24/ca/51/24ca51edd82d5828340f6a87edbbb529.jpg',
    userName: 'Zendaya',
    userId: 'zendaya10',
    userBio:
      'Zendaya Maree Stoermer Coleman is an American actress and singer.',
    location: 'California, US',
    joinedMonth: 'May',
    joinedYear: '2023',
    verified: true,
  };

  return (
    <Layout>
      <Header headerText="Profile" />
      <ProfileAbout user={userProfile} />
      <AchievementBadges />
      <MyPost />

      {/* Write your code here */}
    </Layout>
  );
}
