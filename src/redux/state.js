const store = {
  _state: {
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
  },
  _rerenderEntireTree() {
    console.log('State changed');
  },
  addPost() {
    const newPost = {
      id: 4,
      text: this._state.profilePage.newPostText,
      likes: '0'
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._rerenderEntireTree(this._state);
  },
  updatePostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  }
};

window.store = store;

export default store;