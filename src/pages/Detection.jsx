import Layout from '../layouts/Layout';
import Header from '../components/Header/Header.jsx';
import MapComponent from '../components/Map/Mapcomponent.jsx';

// detection page component
export default function Detection() {
  return (
    <Layout>
      <Header headerText="Detection" />
      {/* Write your code here */}
      <MapComponent className="w-full h-[300px]" styles={{ width: '100%' }} />
    </Layout>
  );
}
