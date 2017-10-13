import * as types from '../constants/actionTypes'

const initialState = {
    keys: {},
    options: {},
    path: '',
}

export const router = (state=initialState, action) => {
    switch(action.type) {
        case types.CHANGE_ROUTE:
            return {...state, keys: action.route.keys, options: action.route.options, path: action.route.path}
        default:
            return state
    }
}