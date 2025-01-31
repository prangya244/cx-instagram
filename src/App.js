import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import Sidebar from './components/Layout/Sidebar';
import Stories from './components/Feed/Stories';
import Post from './components/Feed/Post';
import SponsoredPost from './components/Feed/SponsoredPost';
import './styles/components.css';
import './styles/global.css';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const url = 'https://auth.emarsys.net/oauth2/token ';
const clientId = '9867aa00-85e3-4268-a52d-505c592e7832'; 
const clientSecret = '.bs-wOUMnJL3BL0GOKNX1gt5m4'; 

const auth = btoa(`${clientId}:${clientSecret}`);

      const headers = {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      };

      const data = qs.stringify({
        grant_type: 'client_credentials',
      });

      try {
        const response = await axios.post(url, data, { headers });
        console.log('Token:', response.data.access_token);
        setToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching token:', error.response ? error.response.data : error.message);
      }
    };

    fetchToken();
  }, []);

  const posts = [
    {
      id: 1,
      username: 'cxDigitalMarketing',
      avatar: '../images/digitalmarketing.jpg',
      image: '../images/digitalmarketing.jpg',
      caption: 'Original audio',
      likes: 1234,
      comments: 56,
    },
    {
      id: 2,
      type: 'sponsored',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Main container */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="fixed left-0 top-0 h-full w-60 border-r border-gray-200 z-50 bg-white">
          <div className="pt-8 px-6">
            <h1 className="text-xl font-serif mb-10">Instagram</h1>
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 ml-60">
          <div className="max-w-[630px] mx-auto pt-8 px-4">
            <Stories />
            {token ? (
              posts.map((post, index) =>
                post.type === 'sponsored' ? (
                  <SponsoredPost key={`sponsored-${index}`} />
                ) : (
                  <Post key={post.id} post={post} />
                )
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </main>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-[340px] pl-8 pt-8 pr-4">
          <div className="fixed">
            {/* Profile Section */}
            <div className="flex items-center mb-6">
              <img src="../images/dog.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <p className="text-sm font-semibold">Sara J</p>
                <p className="text-sm text-gray-500">Sara Jones</p>
              </div>
              <button className="ml-auto text-xs font-semibold text-blue-500">Switch</button>
            </div>

            {/* Suggestions Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-500">Suggested for you</span>
                <button className="text-xs font-semibold">See All</button>
              </div>

              {/* Suggested Users */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center py-2">
                  <img src="../images/dog.jpg" alt="Suggestion" className="w-8 h-8 rounded-full" />
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-semibold">suggested_user_{i}</p>
                    <p className="text-xs text-gray-500">Followed by user_{i}</p>
                  </div>
                  <button className="text-xs font-semibold text-blue-500">Follow</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
