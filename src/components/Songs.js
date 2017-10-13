import React, { Component } from 'react'

import SongsHeader from './SongsHeader'
import SongsBody from './SongsBody'

class Songs extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { playlistUrl, playlist } = this.props
        this.props.fetchSongs(playlist, playlistUrl)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.playlistUrl !== this.props.playlistUrl) {  
            nextProps.fetchSongs(nextProps.playlist, nextProps.playlistUrl)
        }
    }

    render() {
        const { songs, playlist, isFetching, navigateTo } = this.props
        return (
            <div>
                <SongsHeader 
                    navigateTo={navigateTo}/>
                    {
                        isFetching?<div>正在加载……</div>:
                        <SongsBody 
                            songs={songs}
                            playlist={playlist}
                            isFetching={isFetching}/>
                    }
            </div>
        )
    }
}

export default Songs