import { createSelector } from 'reselect'

import { getPlaylists, getId, getShowPlaylist, getEntities, getGenre, getTime } from '../selectors/commonSelector'
import { playlistData } from '../utils/playlistUtil'

export const getPlaylistData = createSelector(
    getPlaylists,
    getId,
    getShowPlaylist,
    getEntities,
    getGenre, 
    getTime,
    playlistData,
) 