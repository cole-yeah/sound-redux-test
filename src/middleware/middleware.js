const fetchMiddleware = store => next => action => {
    typeof action === 'function' ? store.dispatch(action):next(action)
}

export { fetchMiddleware }