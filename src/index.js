export function createActionCreators(actions, namespace = "") {
  const creators = {}
  const actionPrefix = namespace ? "@" + namespace + "/" : ""
  Object.keys(actions).forEach(actionName => {
    creators[actionName] = (payload = null) => {
      if (typeof actions[actionName] === "function") {
        return actions[actionName](payload, creators)
      }
      return {
        type: actionPrefix + actionName,
        payload
      }
    }
    creators[actionName].type = actionPrefix + actionName
  })
  return creators
}
