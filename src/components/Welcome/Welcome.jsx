import React from 'react';

const Welcome = () => {
  return (
    <>
      <div className="w-full px-2">
        <div className="font-poppins text-[#A13131] ">
          <div className="text-2xl font-semibold">
            Welcome{' '}
            <span style={{ fontFamily: 'Courgette' }} className="text-3xl">
              Sharmili
            </span>
            ,
          </div>
          <div className="text-xl font-medium ">To a safer world !</div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
