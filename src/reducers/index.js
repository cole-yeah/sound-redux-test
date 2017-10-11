import { combineReducers } from 'redux'
import playlists from './playlists'
import entities from './entities'
import { router } from './router'

const rootReducer = combineReducers({
    playlists,
    entities,
    router,
})

export default rootReducer