import React from 'react';
import {
  PiClock,
  PiArrowFatDown,
  PiUserCircleLight,
  PiArrowFatUp,
  PiChatTeardropDots,
  PiShareNetwork,
} from 'react-icons/pi';

export default function Post({ post }) {
  return (
    <div className="w-full flex flex-col items-start gap-[10px] p-[10px] bg-foreground-element-2 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          {/*<PiUserCircleLight className="!relative !w-[36px] !h-[36px]" />*/}
          <img
            src={post.profilePicture}
            alt={post.user}
            className="object-cover w-10 h-10 rounded-full"
          />
          <p className="">
            {post.user} <span className="text-gray-500">@{post.username}</span>{' '}
            posted
          </p>
        </div>
        <PiShareNetwork className="!relative !w-[25px] !h-[25px] justify-self-end" />
      </div>
      <p className="font-normal text-primary-text text-lg">{post.title}</p>

      <div className="w-full flex flex-row-reverse justify-between">
        <div className="flex flex-row-reverse items-center gap-3">
          <div className="flex items-center rounded-full border-2 p-1 gap-0.5">
            <PiArrowFatUp className="!relative !w-[25px] !h-[25px]" />
            <p>{post.upvotes}</p>
          </div>
          <div className="flex items-center rounded-full border-2 p-1 gap-0.5">
            <PiArrowFatDown className="!relative !w-[25px] !h-[25px]" />
            <p>{post.downvotes}</p>
          </div>
          <div className="flex items-center rounded-full border-2 p-1 gap-0.5">
            <PiChatTeardropDots className="!relative !w-[25px] !h-[25px]" />
            <p>{post.comments}</p>
          </div>
        </div>
        <div className="flex items-center rounded-full border-2 p-1 gap-0.5">
          <PiClock className="!relative !w-[25px] !h-[25px]" />
          <p>{post.time}</p>
        </div>
      </div>
    </div>
  );
}
