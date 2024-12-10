// src/components/Loading.js
import React from 'react';
import { Lottie } from 'lottie-react';
import loadingAnimation from './loading.json'; // Adjust the path based on your project structure

const Loading = () => {
  return (
    <div className="loading-container">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default Loading; // Ensure you are using default export
