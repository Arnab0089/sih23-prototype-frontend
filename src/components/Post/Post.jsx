import React from 'react';
import { PiArrowFatDown } from 'react-icons/pi';
import { PiArrowFatUp } from 'react-icons/pi';
import { PiChatTeardropDots } from 'react-icons/pi';
import { PiUserCircle } from 'react-icons/pi';

export default function Post() {
  return (
    <div className="flex flex-col items-start gap-[10px] p-[10px] bg-foreground-element-2 rounded-lg overflow-hidden">
      <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
        <PiUserCircle className="!relative !w-[32px] !h-[32px]" />
        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-primary-text text-xl">
          This is an temporary title of the post.
        </p>
      </div>
      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-primary-text text-lg">
        This is where the main content of the post will be. It is here just as
        an example.
      </p>
      <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
        <PiArrowFatUp className="!relative !w-[32px] !h-[32px]" />
        <PiArrowFatDown className="!relative !w-[32px] !h-[32px]" />
        <PiChatTeardropDots className="!relative !w-[32px] !h-[32px]" />
      </div>
    </div>
  );
}
