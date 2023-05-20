import React, { useState } from 'react';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const exercises = [
    { id: 1, name: 'Exercise 1', avatar: 'exercise1.jpg' },
    { id: 2, name: 'Exercise 2', avatar: 'exercise2.jpg' },
    { id: 3, name: 'Exercise 3', avatar: 'exercise3.jpg' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mt-36">
      <button
        onClick={toggleDropdown}
        className="bg-gray-300 px-4 py-2 rounded-md focus:outline-none"
      >
        Select Exercise
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                // Handle exercise selection here
              }}
            >
              <img
                className="w-8 h-8 rounded-full object-cover mr-2"
                src={exercise.avatar}
                alt={`Avatar for ${exercise.name}`}
              />
              <span>{exercise.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Test;
