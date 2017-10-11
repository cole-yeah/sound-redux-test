import React from 'react'
import { connect } from 'react-redux'

import Songs from '../components/Songs'
import { fetchSongs } from '../actions/playlistAction'
import { getPlaylistData } from '../selectors/songsSelector'

const SongsContainer = props => {
    return (
        <Songs {...props}/>
    )
} 

const mapStateToProps = (state) => {
    console.log('getPlaylistData(state)', getPlaylistData(state))
    return {
        ...getPlaylistData(state),
        
    }
}

export default connect(mapStateToProps, {fetchSongs})(SongsContainer)