import { createStore } from "redux";
import reducers from "./reducers/index"
import {initialState} from './reducers/productReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducers, initialState)

export default store