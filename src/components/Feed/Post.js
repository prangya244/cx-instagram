import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

const Post = ({ post }) => {
  return (
    <article className="border border-gray-200 rounded-lg mb-6 bg-white">
      {/* Post Header */}
      <div className="flex items-center px-4 py-3">
        <img
          src={post.avatar}
          alt={post.username}
          className="max-w-8 max-h-8 rounded-full object-cover"
        />
        <span className="ml-3 font-semibold text-sm">{post.username}</span>
        <button className="ml-auto text-gray-600">•••</button>
      </div>

      {/* Post Image */}
      <div className="relative pb-[100%]">
        <img
          src={post.image}
          alt="Post content"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="px-4 pt-4">
        <div className="flex justify-between mb-4">
          <div className="flex gap-4">
            <Heart className="w-6 h-6 cursor-pointer" />
            <MessageCircle className="w-6 h-6 cursor-pointer" />
            <Share2 className="w-6 h-6 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Likes */}
        <div className="flex items-center mr-20">
            <span>Liked by <strong>SAP</strong> and <strong> 28,233 others</strong></span>
          </div>
        {/* Caption */}
        <p className="text-sm mb-4">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.caption}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <a href="#" className="text-xs text-blue-500">#BestRun</a>
        </div>
      </div>
    </article>
  );
};

export default Post;