import { normalize } from 'normalizr'
import * as types from '../constants/actionTypes'
import { songSchema } from '../constants/schema'

import { getPlaylists } from '../selectors/commonSelector'
import { callApi } from '../utils/apiUtil'

export const fetchSongsRequest = playlist => ({
    type: types.FETCH_SONGS_REQUEST,
    playlist,
});

export const fetchSongsSuccess = (items, entities, nextUrl, futureUrl, playlist) => ({
    type: types.FETCH_SONGS_SUCCESS,
    items,
    entities,
    nextUrl,
    futureUrl,
    playlist,
})

export const fetchSongs = (playlist, url) => async (dispatch) => {
    dispatch(fetchSongsRequest(playlist))
    const { json } = await callApi(url, {});

    const collection = json.collection || json;

    const songs = collection.map(song => song.origin || song)
                    .filter(song => song.kind === 'track' && song.streamable);
    const nextUrl = json.nextHref || null;
    const futureUrl = json.futureHref || null;

    const { result, entities } = normalize(songs, [songSchema]);
    
    dispatch(fetchSongsSuccess(result, entities, nextUrl, futureUrl, playlist))

}