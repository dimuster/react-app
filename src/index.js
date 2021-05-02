import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from "./redux/state";
import rerenderEntireTree from "./render";

rerenderEntireTree(state, addPost);

reportWebVitals();
