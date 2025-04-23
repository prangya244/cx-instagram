import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const SponsoredPost = ({ postId, email }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [responseId, setResponseId] = useState(null);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchLikes = async () => {
    try {
      const response = await axios.get(
        `https://345ceb72trial-dev-example-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/catalog/POSTS?$filter=POST eq '${postId}'`
      );
      const totalLikes = response.data.value.reduce((sum, item) => sum + item.LIKES, 0);
      const existingComment = response.data.value.find(item => item.CUST1);
      const existingComments = response.data.value.filter(item => item.CUST1).map(item => ({
        id: item.ID,
        email: item.EMAIL,
        comment: item.CUST1,
      }));
      setComments(existingComments);
      setLikesCount(totalLikes);
      setResponseId(response.data.value[0]?.ID || null);
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, []);

  const addLike = async () => {
    const updatedLikes = likesCount + 1;

    try {
      const payload = {
        EMAIL: email,
        POST: String(postId),
        LIKES: updatedLikes,
        NOACTION: false,
        CUST1: comments?comments:'NA',
        CUST2: 'NA',
        CUST3: 'NA',
      };

      if (responseId) {
        await axios.patch(
          `https://345ceb72trial-dev-example-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/catalog/POSTS(ID=${responseId})`,
          payload,
          { headers: { 'Content-Type': 'application/json' } }
        );
      } else {
        const newId = uuidv4();
        await axios.post(
          'https://345ceb72trial-dev-example-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/catalog/POSTS',
          { ID: newId, ...payload },
          { headers: { 'Content-Type': 'application/json' } }
        );
        setResponseId(newId);
      }

      setLikesCount(updatedLikes);
      setLiked(true);
    } catch (error) {
      console.error('Error adding like:', error);
    }
  };


  const handleAddComment = async () => {
    if (!newComment.trim()) return;
  
    try {
      // Fetch existing records for the same POST
      const res = await axios.get(
        `https://345ceb72trial-dev-example-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/catalog/POSTS?$filter=POST eq '${postId}'`
      );
  
      // Check if there’s an entry with CUST1 = 'NA'
      const existing = res.data.value.find(item => item.CUST1);
  
      if (existing) {
        // Update CUST1 with new comment
        await axios.patch(
          `https://345ceb72trial-dev-example-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/catalog/POSTS(ID=${existing.ID})`,
          { CUST1: newComment },
          { headers: { 'Content-Type': 'application/json' } }
        );
        setComments(prev => [...prev, { id: existing.ID, email, comment: newComment }]);
      } else {
        // Create new comment record
        const newId = uuidv4();
        const payload = {
          ID: newId,
          EMAIL: email,
          POST: String(postId),
          LIKES: likesCount,
          NOACTION: false,
          CUST1: newComment,
          CUST2: 'NA',
          CUST3: 'NA',
        };
  
        await axios.post(
          'https://345ceb72trial-dev-example-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/catalog/POSTS',
          payload,
          { headers: { 'Content-Type': 'application/json' } }
        );
  
        setComments(prev => [...prev, { id: newId, email, comment: newComment }]);
      }
  
      setNewComment('');
    } catch (error) {
      console.error('Error adding/updating comment:', error);
    }
  };
  

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
          src="../images/adv.png"
          alt="Best run"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-[#001f3f] text-white text-start py-3 text-sm font-semibold">
          <a
            href="https://fashion-us.cu2qdtboy0-public1-p16-public.model-t.cc.commerce.ondemand.com/fashion-us/en/c/RF2000/women"
            className="block px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 pt-4">
        <div className="flex justify-between mb-4">
          <div className="flex gap-4">
            <Heart
              className={`w-6 h-6 cursor-pointer transition-all text-red-500 fill-red-500`}
              onClick={addLike}
              onDoubleClick={addLike}
            />
            <MessageCircle className="w-6 h-6 cursor-pointer" />
            <Share2 className="w-6 h-6 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer" />
        </div>

        <div className="flex items-center font-semibold mr-20">
          <span>{likesCount} likes</span>
        </div>

        <div className="space-y-3 mb-4">
          <p className="text-sm">
            <span className="font-semibold mr-2">BestRun</span>
            Give Your Clothes a Second Chance: Return, Renew, Repeat
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <a href="#" className="text-xs text-blue-500">#BestRun</a>
          <a href="#" className="text-xs text-blue-500">#Experience</a>
        </div>

        {/* Comments Section */}
        <div className="border-t pt-4 mt-4 space-y-2">
  {comments.map(comment => (
    <p key={comment.id} className="text-sm">
      <span className="font-semibold mr-2">{comment.email}</span>
      {comment.comment}
    </p>
  ))}
  <div className="pb-4"> {/* Added bottom padding here */}
    <div className="flex items-center gap-2 mt-2">
      <input
        type="text"
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        placeholder="Add a comment..."
        className="border px-3 py-1 rounded w-full text-sm"
      />
      <button
        onClick={handleAddComment}
        className="text-blue-500 text-sm font-semibold"
      >
        Post
      </button>
    </div>
  </div>
</div>
      </div>
    </article>
  );
};

export default SponsoredPost;
