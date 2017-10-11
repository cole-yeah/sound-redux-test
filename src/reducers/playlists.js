import * as types from '../constants/actionTypes'

const initialState = {
    futureUrl: null,
    isFetching: false,
    nextUrl: null,
    items: [],
}

function playlist(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_SONGS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.FETCH_SONGS_SUCCESS:
            return { 
                ...state, 
                futureUrl: action.futureUrl, 
                isFetching: false, 
                items: [...new Set([...state.items, ...action.items])],
                nextUrl: action.nextUrl,
            }
    }
}

export default function playlists(state={}, action) {
    switch(action.type) {
        case types.FETCH_SONGS_SUCCESS:
        case types.FETCH_SONGS_REQUEST: 
            return { 
                ...state,
                [action.playlist]: playlist(state[action.playlist], action)
            }
        default:
            return state
    }
}