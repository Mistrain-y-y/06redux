import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './count_reducer'

export default createStore(reducer, applyMiddleware(thunk))
// 创建老板，传入打工人
