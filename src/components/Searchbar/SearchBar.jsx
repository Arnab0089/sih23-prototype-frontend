import React from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
    return (
        <div className='absolute top-[71px] left-[10px] right-[10px]'>
            <div className="flex items-center rounded-xl bg-surface-level-1 box-border w-full max-w-[384px] mx-auto h-12 border-[1px] border-solid border-black relative">
                <IoSearch className="ml-2 w-6 h-6 opacity-40" />
                <input
                    type="text"
                    className="pl-2 pr-2 w-full h-full bg-transparent border-none outline-none font-semibold text-opacity-50"
                    placeholder="Search Cities"
                />
            </div>
        </div>
    );
};

export default SearchBar;

