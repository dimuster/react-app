import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.headerLogo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Polish_Wikinews_header_image.png"
             alt="head-logo"/>
      </div>
      <div className={s.descriptionBlock}>
        avatar + desc
      </div>
    </div>
  );
};

export default ProfileInfo;