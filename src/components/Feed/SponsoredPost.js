import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, ExternalLink } from 'lucide-react';

const SponsoredPost = () => {
  return (
    <article className="border border-gray-200 rounded-lg mb-6 bg-white">
      {/* Post Header */}
      <div className="flex items-center px-4 py-3">
        <img
          src="../images/logo-black 3.png"
          alt="BestRun"
          className="max-w-8 max-h-8 rounded-full object-cover"
        />
        <div className="ml-3">
          <span className="font-semibold text-sm">BestRun</span>
          <span className="text-xs text-gray-500 block">Sponsored</span>
        </div>
        <button className="ml-auto text-gray-600">•••</button>
      </div>

      {/* Post Image */}
      <div className="relative pb-[100%]">
        <img
          src="../images/Insta1.png"
          alt="Best run"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-[#001f3f] text-white text-start py-3 text-sm font-semibold">
          <a href="https://fashion-us.cu2qdtboy0-public1-p16-public.model-t.cc.commerce.ondemand.com/fashion-us/en/c/RF2000/women" 
          className="block px-4" target="_blank" 
    rel="noopener noreferrer">Shop Now</a>
          
        </div>
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
        {/* Post Actions */}
      {/* <div className="px-4 pt-4">
        <div className="flex justify-center mb-4">
          <img
            src="../images/Like, comment, send, collect.png"
            alt="Post Actions"
            className="w-full h-auto object-contain"
          />
        </div> */}
        {/* <div className="px-4 pt-4">
        <div className="flex justify-between mb-4">
          <button onClick={() => console.log('Liked!')}>
            <img src="../images/like.png" alt="Like" className="w-6 h-6" />
          </button>
          <button onClick={() => console.log('Comment!')}>
            <img src="../images/comment.png" alt="Comment" className="w-6 h-6" />
          </button>
          <button onClick={() => console.log('Sent!')}>
            <img src="../images/send.png" alt="Send" className="w-6 h-6" />
          </button>
          <button onClick={() => console.log('Collected!')}>
            <img src="../images/collect.png" alt="Collect" className="w-6 h-6" />
          </button>
        </div>*/}

        {/* Ad Content */}
        <div className="flex items-center font-semibold mr-20">
            <span>270 likes</span>
          </div>
        <div className="space-y-3 mb-4">
          <p className="text-sm">
            <span className="font-semibold mr-2">BestRun</span>
            Give Your Clothes a Second Chance: Return, Renew, Repeat           </p>
          
          

          {/* Call to Action */}
          {/* <div className="flex items-center justify-between py-3"> */}
            {/* <div>
              <p className="font-semibold text-sm">$179.99</p>
              <p className="text-xs text-gray-500">Free shipping on orders over $100</p>
            </div> */}
            {/* <a 
              href="#" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              Shop Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div> */}
        {/* </div> */}
        
        </div>

        {/* Product Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <a href="#" className="text-xs text-blue-500">#BestRun</a>
          <a href="#" className="text-xs text-blue-500">#Experience</a>
        </div>
      </div> 
    </article>
  );
};

export default SponsoredPost;