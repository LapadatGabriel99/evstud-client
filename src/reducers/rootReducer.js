import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { CLEAR_ALL_DATA } from "../actions/types";
import errorReducer from "./errorReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
    blacklist: ['error']
}

const appReducer = combineReducers({
    error: errorReducer
})

const emptyState = {
    error: {}
}

const rootReducer = (state, action) => {

    if (action.type === CLEAR_ALL_DATA) {

        storage.removeItem('persist:root')

        state = emptyState
    }

    return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
