import React, { useState } from 'react';
import YogaPoseFeedback from '../components/YogaPoseFeedback';
import Wrapper from '../components/Wrapper';

const Test = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const exercises = [
  //   { id: 1, name: 'Exercise 1', avatar: 'exercise1.jpg' },
  //   { id: 2, name: 'Exercise 2', avatar: 'exercise2.jpg' },
  //   { id: 3, name: 'Exercise 3', avatar: 'exercise3.jpg' },
  // ];

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  return (

    <Wrapper>
      <YogaPoseFeedback/>
    </Wrapper>

  );
};

export default Test;
