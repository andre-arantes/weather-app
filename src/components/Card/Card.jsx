import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const {
    location,
    current,
  } = data;
  return (
    <div>
      <div className="bg-white p-6 mt-10 dark:bg-[#181A1B] dark:text-white rounded-lg shadow-md min-w-[220px]">
        <div className="text-center">
          <span className="block text-xl font-bold dark:text-[#ACBDCD] text-slate-700">{location.name}</span>
          <span className="text-slate-400 dark:text-[#ACBDCD] text-sm font-medium">
            {`${location.region}, ${location.country}`}
          </span>
        </div>

        <div className="font-bold text-slate-700 dark:text-[#ACBDCD] flex justify-center mt-4 mb-2">
          <span className="text-8xl">{current.temp_c}</span>
          <span className="text-2xl mt-2">ºC</span>
        </div>

        <div className="flex justify-center flex-col items-center">
          <img src={current.condition.icon} alt="weather icon" />
          <span className="text-slate-700 dark:text-[#ACBDCD] font-medium">{current.condition.text}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
