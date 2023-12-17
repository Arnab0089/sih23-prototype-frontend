import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';

// base layout component for all pages in the app
export default function Layout({ children }) {
  return (
    <div className=" flex flex-col items-center justify-between h-screen min-h-screen">
      <Header />
      <main className="overflow-y-auto w-full">{children}</main>
      <Navigation />
    </div>
  );
}
