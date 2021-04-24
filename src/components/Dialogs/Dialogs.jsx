import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
}

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
        <Message message='Hi man!'/>
        <Message message='How are you?'/>
        <Message message="I'm OK bro:)"/>
      </div>
    </div>
  );
};

export default Dialogs;