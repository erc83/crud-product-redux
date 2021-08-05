import { createStore, combineReducers, compose } from 'redux'
import userReducer from './users/index'
import productReducer from './products/index'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    products: productReducer,
    users: userReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store