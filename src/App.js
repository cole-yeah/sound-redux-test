import 'babel-polyfill'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import PlaylistsContainer from './containers/PlaylistsContainer'
import configureStore from './store/configureStore'

const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PlaylistsContainer/>
            </Provider>
        )
    }
}

export default App