import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { ALlAsteroidReducer } from "./reducer/allAsteroidIDReducer";

let store;
if(process.env.NODE_ENV !== "production"){
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
store=createStore(ALlAsteroidReducer,composeEnhancers(applyMiddleware(thunk)));
}
else{
    store=createStore(ALlAsteroidReducer,applyMiddleware(thunk));

}
export default store;