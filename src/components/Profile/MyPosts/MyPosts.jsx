import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"

const MyPosts = () => {
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
        <Post message='Hi, how are you?)' likes='3,8k'/>
        <Post message='Fine :)' likes='1,6k'/>
        <Post message='wtf are u doing?' likes='255'/>
      </div>
    </div>
  );
};

export default MyPosts;