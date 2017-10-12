import 'babel-polyfill'
import 'isomorphic-fetch'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import RootContainer from './containers/RootContainer'
import configureStore from './store/configureStore'
import '../styles/main.scss'

const store = configureStore()

const renderView = Component => {
    render(
        <Provider store={store}>
            <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
}
renderView(RootContainer)
if(module.hot) {
    module.hot.accept('./containers/RootContainer', () => renderView(RootContainer))
}
