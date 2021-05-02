import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  const addPostElement = React.createRef();
  const addPost = () => {
    props.addPost();
    props.updatePostText('');
  }
  const changeNewPostText = () => {
    const text = addPostElement.current.value;
    props.updatePostText(text);
  }
  const postsElements = props.posts.map(p => <Post text={p.text} likes={p.likes}/>);
  return (
    <div className={s.postsArea}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={addPostElement} onChange={changeNewPostText} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;