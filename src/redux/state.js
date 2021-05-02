let rerenderEntireTree = () => {
  console.log('State changed');
}

const state = {
  profilePage: {
    posts:  [
      {id: 1, text: 'Hi, how are you?)', likes: '3,8k'},
      {id: 2, text: 'Fine :)', likes: '1,6k'},
      {id: 3, text: 'wtf are u doing?', likes: '255'}
    ],
    newPostText: ''
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

window.state = state;

export const addPost = () => {
  const newPost = {
    id: 4,
    text: state.profilePage.newPostText,
    likes: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;