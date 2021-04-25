import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  const dialogs = [
    {'id': 1, 'name': 'Dimuster'},
    {'id': 2, 'name': 'Misha'},
    {'id': 3, 'name': 'Sanya'},
    {'id': 4, 'name': 'Alinka'},
    {'id': 5, 'name': 'Nastya'},
    {'id': 6, 'name': 'Kirill'}
  ];
  const messages = [
    {'id': 1, 'text': 'Hi man!'},
    {'id': 2, 'text': 'How are you?'},
    {'id': 3, 'text': 'I\'m OK bro:)'}
  ];
  const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  const messagesElements = messages.map(m => <Message text={m.text}/>);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;