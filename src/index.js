import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, updatePostText} from "./redux/state";
import rerenderEntireTree from "./render";

rerenderEntireTree(state, addPost, updatePostText);

reportWebVitals();
