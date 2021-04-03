// 生成 action
import {
  INCREMENT,
  DECREMENT
} from './constant'

export const createIncrementAction = data => ({
  type: INCREMENT,
  data
})

export const createDecrementAction = data => ({
  type: DECREMENT,
  data
})

export const createAsyncIncrement = (data, delay) => dispatch => { 
  // 异步 action 返回函数，里面一般都会调用同步 action
  // 异步 action 不是必须的，想用也可以用！
  setTimeout(() => {
    dispatch(createIncrementAction(data))
  }, delay)
}