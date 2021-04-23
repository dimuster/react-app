import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://hyip-news.com/uploads/avatar/default-avatar.jpg" alt="avatar" />
      {props.message}
      <br />
      <button title='Нравится!'>Like ({props.likes})</button>
    </div>
  );
};

export default Post;