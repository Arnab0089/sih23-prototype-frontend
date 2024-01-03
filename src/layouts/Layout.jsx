import { useState } from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import NewPostModal from '../components/Modals/NewPost';

// base layout component for all pages in the app
export default function Layout({ children }) {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  return (
    <div className=" flex flex-col items-center justify-between h-screen min-h-screen">
      <div className="">
        <NewPostModal
          showNewPostModal={showNewPostModal}
          setShowNewPostModal={setShowNewPostModal}
        />
      </div>
      <main className="overflow-y-auto w-full h-full">{children}</main>
      <Navigation
        showNewPostModal={showNewPostModal}
        setShowNewPostModal={setShowNewPostModal}
      />
    </div>
  );
}
