import React from 'react'
import { connect } from 'react-redux'

import Songs from '../components/Songs'
import { fetchSongs } from '../actions/playlistAction'

const SongsContainer = props => {
    return (
        <Songs {...props}/>
    )
} 

const mapStateToProps = (state) => {
    return state
}

// const mapDispatchToProps = (dispatch) => {
//     fetchSongs: (playlist, url) => dispatch(fetchSongs(playlist, url))
// }

export default connect(mapStateToProps, {fetchSongs})(SongsContainer)