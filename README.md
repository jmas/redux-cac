# redux-cac
Helper for create action creators

```js
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
```
