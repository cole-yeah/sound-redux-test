import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const renderView = Component => {
    render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    )
}
renderView(App)
if(module.hot) {
    module.hot.accept('./App', () => renderView(App))
}
