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
  const dialogsData = [
    {'id': 1, 'name': 'Dimuster'},
    {'id': 2, 'name': 'Misha'}
  ];
  const messagesData = [
    {'id': 1, 'message': 'Hi man!'},
    {'id': 2, 'message': 'How are you?'},
    {'id': 3, 'message': 'I\'m OK bro:)'}
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
      </div>
    </div>
  );
};

export default Dialogs;