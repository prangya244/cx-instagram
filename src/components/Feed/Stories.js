import React, { useRef, useState } from 'react';

const Stories = () => {
  const storiesContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const stories = Array(16).fill().map((_, i) => ({
    id: i,
    username: `user${i}`,
    avatar: '../images/storypf.jpg',
  }));

  const handleNextClick = () => {
    const scrollAmount = 200; // Scroll by 200px
    storiesContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
    setScrollPosition((prev) => prev + scrollAmount);
  };

  const handlePrevClick = () => {
    const scrollAmount = 200; // Scroll by 200px
    storiesContainerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
    setScrollPosition((prev) => Math.max(prev - scrollAmount, 0)); // Prevent negative scrolling
  };

  return (
    <div className="mb-8 bg-white border border-gray-200 rounded-lg py-4 relative stories-container">
      {/* Stories Container */}
      <div
        ref={storiesContainerRef}
        className="flex gap-4 px-4 overflow-x-auto hide-scrollbar"
      >
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="w-16 h-16 rounded-full p-[2px] border-2 border-pink-500">
              <img
                src={story.avatar}
                alt={story.username}
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <span className="text-xs mt-1 truncate w-16 text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {scrollPosition > 0 && (
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 shadow-md focus:outline-none z-10"
          aria-label="Previous Stories"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Right Arrow */}
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 shadow-md focus:outline-none"
        aria-label="Next Stories"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Stories;
