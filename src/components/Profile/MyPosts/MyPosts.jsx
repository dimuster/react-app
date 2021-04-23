import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div className={s.postsArea}>
      My posts
      <div>
        <textarea />
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?)' likes='3,8k' />
        <Post message='Fine :)' likes='1,6k' />
        <Post message='wtf are u doing?' likes='255' />
      </div>
    </div>
  );
};

export default MyPosts;