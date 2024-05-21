import React from "react";

const Card = (props) => {
  const { image, name, types, abilities, handleDetail } = props;
  return (
    <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl mx-auto w-64 md:w-[20rem] h-auto md:h-full hover:scale-105 transition-duration-300 ease-in-out" onClick={handleDetail}>
      <img src={image} alt={name} className="w-64 md:w-full mx-auto" />
      <div className="px-6 py-4 text-sm md:text-base h-full">
        <h3 className="font-bold text-md md:text-xl mb-2">{name?.toUpperCase()}</h3>
        <div className="flex items-center text-gray-700">
          <p className="text-gray-700 text-xs md:text-md">Type:</p>
          {types?.map((type, index) => (
            <span key={index} className="ml-3 bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded">
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center text-gray-700 mt-2">
          <p className="text-gray-700 text-xs md:text-md">Abilities:</p>
          {abilities?.map((abilities, index) => {
            if (index === 0) {
              return (
                <span key={index} className="ml-3 bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded">
                  {abilities.ability.name}
                </span>
              );
            } else if (index == 2) {
              <span key={index} className="ml-3 bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded">
                ...
              </span>;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
