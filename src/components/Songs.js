import React, { Component } from 'react'

import SongsHeader from './SongsHeader'
import SongsBody from './SongsBody'

class Songs extends Component {

    componentWillMount() {
        this.props.fetchSongs('1', '2')
    }

    render() {
        return (
            <div>
                <SongsHeader />
                <SongsBody />
            </div>
        )
    }
}

export default Songs