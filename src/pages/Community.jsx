import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';

// community page component
export default function Community() {
  const post = {
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
  };
  return (
    <Layout>
      <Header headerText="Community" />
      {/* Write your code here */}
      <div className="w-full flex flex-col items-center gap-[10px] p-[10px] bg-white overflow-y-scroll">
        <Post className="" post={post} />
        <Post className="" post={post} />
        <Post className="" post={post} />
        <Post className="" post={post} />
        <Post className="" post={post} />
        <Post className="" post={post} />
      </div>
    </Layout>
  );
}
