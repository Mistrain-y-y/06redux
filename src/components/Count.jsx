import React, { Component } from 'react'
import {
  createIncrementAction,
  createDecrementAction,
  createAsyncIncrement
} from '../redux/count_action'
import store from '../redux/store'

export default class Count extends Component {
  componentDidMount() {
    // 监听 redux 中状态变化，变化了就更新页面
    store.subscribe(() => {
      this.setState({})
    })
  }
  increment = () => {
    const { value } = this.optionValue
    store.dispatch(createIncrementAction(value * 1))
  }
  decrement = () => {
    const { value } = this.optionValue
    store.dispatch(createDecrementAction(value * 1))
  }
  incrementIfOdd = () => {
    const { value } = this.optionValue
    const count = store.getState()
    if (count % 2 === 1) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  incrementAsync = () => {
    const { value } = this.optionValue
    // const timer = setTimeout(() => {
    //   store.dispatch(createIncrementAction(value * 1))
    //   clearTimeout(timer)
    // }, 1000)// 同步action写法
    store.dispatch(createAsyncIncrement(value * 1, 1000))// 异步action写法
  }
  render() {
    return (
      <div>
        <h1>当前求和为 {store.getState()}</h1>
        <select ref={val => this.optionValue = val}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.incrementIfOdd}>+ if odd</button>
        <button onClick={this.incrementAsync}>add async</button>
      </div>
    )
  }
}