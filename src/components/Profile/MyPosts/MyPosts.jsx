import s from './MyPosts.module.css';
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div className={s.postsArea}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?)' likes='29' />
        <Post message='zaebis' likes='13' />
        <Post message='idi nahuy' likes='1337228' />
      </div>
    </div>
  );
};

export default MyPosts;