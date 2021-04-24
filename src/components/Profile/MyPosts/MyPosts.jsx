import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"

const MyPosts = () => {
  const postsData = [
    {'id': 1, 'message': 'Hi, how are you?)', 'likes': '3,8k'},
    {'id': 2, 'message': 'Fine :)', 'likes': '1,6k'},
    {'id': 3, 'message': 'wtf are u doing?', 'likes': '255'}
  ];
  return (
    <div className={s.postsArea}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea/>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likes={postsData[0].likes}/>
        <Post message={postsData[1].message} likes={postsData[1].likes}/>
      </div>
    </div>
  );
};

export default MyPosts;