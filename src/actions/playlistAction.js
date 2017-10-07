import { normalize } from 'normalizr'
import * as types from '../constants/actionTypes'
import { songSchema } from '../constants/schema'

import { getPlaylists } from '../selectors/commonSelector'
import { callApi } from '../utils/apiUtil'

export const fetchSongsRequest = playlist => ({})

export const fetchSongs = (playlist, url) => async (dispatch) => {
    // dispatch(fetch)
    const { json } = await callApi('//api.soundcloud.com/tracks?linked_partitioning=1&limit=50&offset=0&client_id=f4323c6f7c0cd73d2d786a2b1cdae80c&tags=house', {});

    const collection = json.collection || json;

    console.log('collection----', collection)
    console.log('json----', json)
}