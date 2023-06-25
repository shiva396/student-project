import React, { useState } from 'react';

const VideoHoverPlay = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-card relative w-64 h-48 ${isHovered ? 'cursor-pointer' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-full h-full object-cover" src="../assets/jobit.png" alt="Card Image" />

      {isHovered && (
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="../assets/vids/sdg.mp4" autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoHoverPlay;
