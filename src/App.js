import 'babel-polyfill'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import RootContainer from './containers/RootContainer'
import configureStore from './store/configureStore'

const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        )
    }
}

export default App