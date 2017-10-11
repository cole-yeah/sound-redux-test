import { createSelector } from 'reselect';

import { PLAYLIST_PATH } from '../constants/routerConstant'

//router selectors
export const getGenre = state => (state.router.options.q
    ? '':(state.router.options.g||'house'))
export const getTime = state => state.router.options.t || ''
export const getPath = state => state.router.path;
export const getId = state => (state.router.keys.id ? Number(state.router.keys.id):0)

export const getShowPlaylist = createSelector(
    getPath,
    path => path === PLAYLIST_PATH
)

//entities selectors
export const getEntities = state => state.entities;

//playlists selectors
export const getPlaylists = state => state.playlists;

//player selectors
