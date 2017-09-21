import React from 'react'

import NavContainer from './NavContainer'
import PlayListsContainer from './PlayListsContainer'
import SongsContainer from './SongsContainer'

const RootContainer = () => {
    return (
        <div>
            <NavContainer/>
            <SongsContainer/>
        </div>
    )
}

export default RootContainer