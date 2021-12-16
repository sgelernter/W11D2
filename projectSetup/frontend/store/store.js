import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import { applyMiddleware } from "redux";
import { thunk } from "../middleware/thunk";

const configureStore = (preloadState = {}) => {
    return createStore(rootReducer, preloadState, applyMiddleware(thunk));
}  

export default configureStore;