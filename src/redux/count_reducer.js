import {INCREMENT, DECREMENT} from './constant'

const initState = 0
// store 中的初始状态，不再需要组件自己初始化 state

function count_reducer(preState = initState, action) {
  const {
    type,
    data
  } = action
  console.log(type, data)
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}

export default count_reducer