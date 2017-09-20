import 'babel-polyfill'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        )
    }
}

export default App