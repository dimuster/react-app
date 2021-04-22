import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.headerLogo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Polish_Wikinews_header_image.png" alt="head-logo" />
      </div>
      <div>
        avatar + desc
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;