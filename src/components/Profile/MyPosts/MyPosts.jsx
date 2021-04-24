import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"

const MyPosts = () => {
  const posts = [
    {'id': 1, 'text': 'Hi, how are you?)', 'likes': '3,8k'},
    {'id': 2, 'text': 'Fine :)', 'likes': '1,6k'},
    {'id': 3, 'text': 'wtf are u doing?', 'likes': '255'}
  ];
  const postsElements = posts.map(p => <Post text={p.text} likes={p.likes}/>);
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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;