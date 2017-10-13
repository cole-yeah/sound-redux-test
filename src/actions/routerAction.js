import * as types from '../constants/actionTypes'

import { compileHash } from '../utils/routerUtil'

const pushState = route => {
    const hash = compileHash(route)
    if(location.hash !== hash) {
        history.pushState({ route }, '', hash)
    }
}

export const navigateTo = (route, shouldPushState=true) => {
    if(shouldPushState) {
        pushState(route)
    }
    return {
        type: types.CHANGE_ROUTE,
        route
    }
}