import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Dimuster' id='1'/>
        <DialogItem name='Misha' id='2'/>
        <DialogItem name='Sanya' id='3'/>
        <DialogItem name='Alinka' id='4'/>
        <DialogItem name='Nastya' id='5'/>
        <DialogItem name='Kirill' id='6'/>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          Hi man!
        </div>
        <div className={s.message}>
          How are you?
        </div>
        <div className={s.message}>
          I'm OK bro:)
        </div>
      </div>
    </div>
  );
};

export default Dialogs;