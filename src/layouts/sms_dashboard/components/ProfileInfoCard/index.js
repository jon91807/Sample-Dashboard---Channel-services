import React from 'react';
import { medicalproBranding } from '../medicalproBranding';

function ProfileInfoCard() {
  return (
    <div>
      <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
        10 APR, 2024
      </p>

      <div className="flex gap-4 border-b-1 border-color mt-6">
        {medicalproBranding.data.map((item) => (
          <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
            <p className="text-xs text-gray-400">{item.title}</p>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="border-b-1 border-color pb-4 mt-2">
        <p className="text-md font-semibold mb-2">Products</p>

        <div className="flex gap-4">
          {medicalproBranding.teams.map((item) => (
            <p
              key={item.name}
              style={{ background: item.color }}
              className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 border-t-1 border-color">
        <div className="mt-3">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-2 px-4 rounded">
            Proceed
          </button>
        </div>
        <p className="text-gray-400 text-sm">36 Recent Transactions</p>
      </div>
    </div>
  );
}

export default ProfileInfoCard;
