import React from 'react';
import {
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
        <div className='flex items-center gap-1'>
          <PiUserCircleLight className="!relative !w-[36px] !h-[36px]" />
          <p className="">{post.author} <span className="text-gray-500">@{post.username}</span> posted</p>
        </div>
        <PiShareNetwork className="!relative !w-[28px] !h-[28px] justify-self-end" />
      </div>
      <p className="font-normal text-primary-text text-xl">
        {post.title}
      </p>

      <div className="w-full flex flex-row-reverse items-center gap-3">
        <div className="flex items-center rounded-full border-2 p-1">
          <PiArrowFatUp className="!relative !w-[28px] !h-[28px]" />
          <p>{post.upvotes}</p>
        </div>
        <div className="flex items-center rounded-full border-2 p-1">
          <PiArrowFatDown className="!relative !w-[28px] !h-[28px]" />
          <p>{post.downvotes}</p>
        </div>
        <div className="flex items-center rounded-full border-2 p-1">
          <PiChatTeardropDots className="!relative !w-[28px] !h-[28px]" />
          <p>{post.comments}</p>
        </div>
      </div>
    </div>
  );
}
