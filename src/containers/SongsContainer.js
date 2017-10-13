import React from 'react'
import { connect } from 'react-redux'

import Songs from '../components/Songs'
import { fetchSongs } from '../actions/playlistAction'
import { navigateTo } from '../actions/routerAction'
import { getPlaylistData } from '../selectors/songsSelector'

const SongsContainer = props => {
    console.log('isFetching', `${props.isFetching}`)
    return (
        <Songs {...props}/>
    )
} 

const mapStateToProps = (state) => {
    return {
        ...getPlaylistData(state),
        
    }
}

export default connect(mapStateToProps, {fetchSongs, navigateTo})(SongsContainer)