import rerenderEntireTree from "../render";

const state = {
  profilePage: {
    posts:  [
      {id: 1, text: 'Hi, how are you?)', likes: '3,8k'},
      {id: 2, text: 'Fine :)', likes: '1,6k'},
      {id: 3, text: 'wtf are u doing?', likes: '255'}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dimuster'},
      {id: 2, name: 'Misha'},
      {id: 3, name: 'Sanya'},
      {id: 4, name: 'Alinka'},
      {id: 5, name: 'Nastya'},
      {id: 6, name: 'Kirill'}
    ],
    messages: [
      {id: 1, text: 'Hi man!'},
      {id: 2, text: 'How are you?'},
      {id: 3, text: 'I\'m OK bro:)'}
    ]
  }
}

export const addPost = (text) => {
  const newPost = {
    id: 4,
    text: text,
    likes: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state, addPost);
}

export default state;