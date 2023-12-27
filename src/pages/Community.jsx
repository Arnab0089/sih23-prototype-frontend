import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';

// community page component
export default function Community() {
  return (
    <Layout>
      <Header headerText="Community" />
      {/* Write your code here */}
      <div className="w-full flex flex-col items-center gap-[10px] p-[10px] bg-white overflow-y-scroll">
        <Post className="" />
        <Post className="" />
        <Post className="" />
        <Post className="" />
        <Post className="" />
        <Post className="" />
      </div>
    </Layout>
  );
}
