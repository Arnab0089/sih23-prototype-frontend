import Layout from '../layouts/Layout';
import Header from '../components/Header/Header.jsx';
import MapComponent from '../components/Map/Map.jsx';

// detection page component
export default function Detection() {
  return (
    <Layout>
      <Header headerText="Detection" />
      {/* Write your code here */}
      <MapComponent className="w-full h-[calc(100vh-128px)]" styles={{ width: '100%' }} />
    </Layout>
  );
}
