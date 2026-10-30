import { createStore } from "redux";
import { wheatherReducer } from "./reducer/wheatherReducer";
import { compose } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from ".";



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;