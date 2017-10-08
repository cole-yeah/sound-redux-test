import { normalize } from 'normalizr'
import * as types from '../constants/actionTypes'
import { songSchema } from '../constants/schema'

import { getPlaylists } from '../selectors/commonSelector'
import { callApi } from '../utils/apiUtil'

export const fetchSongsRequest = playlist => ({});

export const fetchSongsSuccess = (result, entities, nextUrl, futureUrl) => ({
    type: types.FETCH_SONGS_SUCCESS,
    result,
    entities,
    nextUrl,
    futureUrl,
})

export const fetchSongs = (playlist, url) => async (dispatch) => {
    // dispatch(fetch)
    const { json } = await callApi('//api.soundcloud.com/tracks?linked_partitioning=1&limit=50&offset=0&client_id=f4323c6f7c0cd73d2d786a2b1cdae80c&tags=house', {});

    const collection = json.collection || json;

    const songs = collection.map(song => song.origin || song)
                    .filter(song => song.kind === 'track' && song.streamable);
    const nextUrl = json.nextHref || null;
    const futureUrl = json.futureHref || null;

    const { result, entities } = normalize(songs, [songSchema]);
    
    dispatch(fetchSongsSuccess(result, entities, nextUrl, futureUrl))

}