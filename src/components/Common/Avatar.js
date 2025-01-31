import React from 'react';

const Avatar = ({ src, size = 'md', hasStory = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${hasStory ? 'p-0.5 border-2 border-pink-500 rounded-full' : ''}`}>
      <img
        src={src || '/api/placeholder/40/40'}
        alt="Avatar"
        className={`${sizeClasses[size]} rounded-full object-cover`}
      />
    </div>
  );
};

export default Avatar;