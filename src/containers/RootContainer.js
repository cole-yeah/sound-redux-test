import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavContainer from './NavContainer'
import PlayListsContainer from './PlayListsContainer'
import SongsContainer from './SongsContainer'
import ErrorContainer from './ErrorContainer'
import Router from '../components/Router'
import { INDEX_PATH, PLAYLIST_PATH, SONG_PATH, SONGS_PATH, USER_PATH, ERROR_PATH } from '../constants/routerConstant'

class RootContainer extends Component {

    componentWillMound() {

    }

    render() {
        const { paths, router, routes } = this.props
        return (
            <div>
                <NavContainer/>
                <Router router={router} routes={routes} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { router } = state
    return {
        paths: [INDEX_PATH, PLAYLIST_PATH, SONG_PATH, SONGS_PATH, USER_PATH],
        router,
        routes: {
            [INDEX_PATH]: SongsContainer,
            [SONG_PATH]: SongsContainer,
            [SONGS_PATH]: SongsContainer,
            [PLAYLIST_PATH]: SongsContainer,
            [ERROR_PATH]: ErrorContainer,
        }
    }
}

export default connect(mapStateToProps, {})(RootContainer)