import React, { Component } from 'react'

import SongsHeader from './SongsHeader'
import SongsBody from './SongsBody'

class Songs extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('this.props---', this.props)
        const { playlistUrl, playlist } = this.props
        this.props.fetchSongs(playlist, playlistUrl)
    }

    render() {
        const { songs, playlist } = this.props
        return (
            <div>
                <SongsHeader />
                <SongsBody 
                    songs={songs}
                    playlist={playlist}/>
            </div>
        )
    }
}

export default Songs