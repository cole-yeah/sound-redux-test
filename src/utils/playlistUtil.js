import { denormalize } from 'normalizr'
import moment from 'moment'

import { songSchema } from '../constants/schema'
import { PLAYLIST_PLAYLIST_TYPE, GENRE_PLAYLIST_TYPE, GENRE_QUERY_MAP } from '../constants/playListConstant'
import { FETCH_SONGS } from '../constants/apiConstant'

const isFetching = (playlist, playlists) => (playlist in playlists
    ? playlists[playlist].isFetching : false);

const playlistSongs = (playlist, playlists, entities) => (playlist in playlists
    ? denormalize(playlists[playlist].items, [songSchema], entities):[])

const genrePlaylistUrl = (genre, time) => {
    const genreUriSegment = `&tags=${GENRE_QUERY_MAP[genre] || genre}`
    const timeUriSegment = time ? `&created_at[from]=${moment().subtract(Number(time), 'days').format('YYYY-MM-DD%2012:00:00')}` : ''

    return `${FETCH_SONGS}${timeUriSegment}${genreUriSegment}`
}

const playlistNextUrl = (playlist, playlists, oauthToken) => (playlist in playlists && playlists[playlist].playlistNextUrl
    ? `${playlists[playlist].nextUrl}${oauthToken?`&oauth_token=${oauthToken}`:''}`:null)

export const playlistData = (
    playlists,
    id,
    showPlaylist,
    entities,
    genre,
    time,
) => {

    if(showPlaylist) {
        const playlist = `${PLAYLIST_PLAYLIST_TYPE}|${id}`;
        return {
            isFetching: isFetching(playlist, playlists),
            playlist,
            playlistUrl: null,
            playlistNextUrl: null,
            songs: playlistSongs(playlist, playlists, entities)
        }
    }

    const playlist = [GENRE_PLAYLIST_TYPE, genre, time].join('|');
    return {
        isFetching: isFetching(playlist, playlists),
        playlist,
        playlistUrl: genrePlaylistUrl(genre, time),
        playlistNextUrl: playlistNextUrl(playlist, playlists),
        songs: playlistSongs(playlist, playlists, entities)
    }

}