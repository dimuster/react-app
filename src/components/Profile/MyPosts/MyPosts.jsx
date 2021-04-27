import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post text={p.text} likes={p.likes}/>);
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