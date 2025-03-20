import React from 'react';

export default function ProfileCard() {
  return (
    <div className="w-[300px] bg-[#f5f5f5] border border-[#e0e0e0] rounded-[8px] p-4 mx-auto">
      <img
        src="https://via.placeholder.com/100"
        alt="avatar"
        className="w-[100px] h-[100px] rounded-full mx-auto"
      />
      <h2 className="text-[20px] font-bold text-black text-center mt-4">
        Matti Meikäläinen
      </h2>
      <p className="text-[14px] text-[#666] text-center mt-2">
        Full-stack developer, passionate about coding and coffee
      </p>
      <div className="flex justify-center mt-4 mb-5">
        <button className="w-[120px] bg-[#1976d2] text-white rounded-[4px] py-2">
          Contact Me
        </button>
      </div>
    </div>
  );
}
