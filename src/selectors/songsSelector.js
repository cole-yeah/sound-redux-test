import { createSelector } from 'reselect'

import { getPlaylists } from '../selectors/commonSelector'
import { playlistData } from '../utils/playlistUtil'

export const getPlaylistData = createSelector(
    getPlaylists,
    playlistData
) 