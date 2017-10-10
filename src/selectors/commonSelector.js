import { createSelector } from 'reselect';

import { PLAYLIST_PATH } from '../constants/routerConstant'

export const getPath = state => state.router.route.path;

export const getShowPlaylist = createSelector(
    path,
    path => path === PLAYLIST_PATH
)

//entities selectors
export const getEntities = state => state.entities;

//playlists selectors
export const getPlaylists = state => state.playlists;

//player selectors
