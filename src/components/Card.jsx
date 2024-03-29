import React from 'react';

const Card = ({ imageSrc, title, subtitle, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="mr-4">
        <img src={imageSrc} className="w-16 " alt="Card Icon" />
      </div>
      <div>
        <h2 className="text-sm text-gray-400 font-semibold font-poppins">{title}</h2>
        <h3 className="text-xl text-black font-bold font-poppins">{subtitle}</h3>
        <p className="mt-2 text-gray-700 text-xs font-poppins">{description}</p>
      </div>
    </div>
  );
};

export default Card;
