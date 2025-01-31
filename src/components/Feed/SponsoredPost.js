import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, ExternalLink } from 'lucide-react';

const SponsoredPost = () => {
  return (
    <article className="border border-gray-200 rounded-lg mb-6 bg-white">
      {/* Post Header */}
      <div className="flex items-center px-4 py-3">
        <img
          src="../images/shoe.jpg"
          alt="Nike"
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-3">
          <span className="font-semibold text-sm">nike</span>
          <span className="text-xs text-gray-500 block">Sponsored</span>
        </div>
        <button className="ml-auto text-gray-600">•••</button>
      </div>

      {/* Post Image */}
      <div className="relative pb-[100%]">
        <img
          src="../images/shoe.jpg"
          alt="Nike Air Max 2024"
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

        {/* Ad Content */}
        <div className="space-y-3 mb-4">
          <p className="text-sm">
            <span className="font-semibold mr-2">nike</span>
            Introducing the all-new Nike Air Max 2024. Experience unmatched comfort and style. 🔥
          </p>
          
          <div className="flex items-center text-xs text-gray-500">
            <span>15K likes</span>
          </div>

          {/* Call to Action */}
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-sm">$179.99</p>
              <p className="text-xs text-gray-500">Free shipping on orders over $100</p>
            </div>
            <a 
              href="#" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              Shop Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Product Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">#NikeAirMax</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">#JustDoIt</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">#SneakerHead</span>
        </div>
      </div>
    </article>
  );
};

export default SponsoredPost;