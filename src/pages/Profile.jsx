import Layout from '../layouts/Layout';
import Header from '../components/Header/Header.jsx';
import ProfileAbout from '../components/ProfileAbout/ProfileAbout.jsx';
import { AchievementBadges } from '../components/Badges/Achievement-Badges.jsx';

// user profile page component
export default function Profile() {
  const userProfile = {
    profilePicture:
      'https://media.vogue.co.uk/photos/64fed45cc5bc8fbcaf973bfa/2:3/w_2560%2Cc_limit/news1109_GettyImages-1500117177.jpg',
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
      <h1>Profile</h1>
      <AchievementBadges />
      {/* Write your code here */}
    </Layout>
  );
}
