# redux-cac
Helper for create action creators. Action types constants + action creators functions now cames together.

```js
// Actions:
const actions = createActionCreators({
  increase: null,
  decrease: null,
  increaseLater: (payload, actions) => dispatch => {
    setTimeout(() => dispatch(actions.increase()), 1000)
  }
}, 'counter')

// > actions.increase()
// > { type: '@counter/increase', payload: null }
// > actions.increaseLater()
// > { type: '@counter/increase', payload: null }
// > actions.increase(1)
// > { type: '@counter/increase', payload: 1 }

// Redux store
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case actions.increase.type:
      return { ...state, count: state.count + 1 }
    case actions.decrease.type:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}, applyMiddleware(thunk))

// Often it happens in react-redux mapDispatchToProps
const boundActions = bindActionCreators(actions, store.dispatch)

// > boundActions.increase()
// > store.getState()
// > { count: 1 }
```

> **Note!** Function `dispatch()` require [`thunk` middleware](https://github.com/gaearon/redux-thunk).
