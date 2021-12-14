import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadState = {}) => {
    return createStore(rootReducer, preloadState);
}  

export default configureStore;