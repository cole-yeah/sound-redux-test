import { denormalize } from 'normalizr';

const isFetching = (playlist, playlists) => (playlist in playlists
    ? playlists[playlist].isFetching : false);

export const playlistData = (
    playlists,
) => {
    // if(showLike) {
    //     const playlist = SESSION_LIKES_PLAYLIST;
    //     return {
    //         isFetching: isFetching(playlist, playlists),
    //         playlist,
    //         playlistUrl: `${SESSION_LIKES_URL}?oauth_token=${oauthToken}`,
    //         playlistNextUrl: null,
    //         songs: playlistSongs(playlist, playlists, entities),
    //     }
    // }

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

    if(showStream) {
        const playlist = SESSION_STREAM_PLAYLIST;
        return {
            isFetching: isFetching(playlist, playlists),
            playlist,
            playlistUrl: `${SESSION_STREAM_URL}?oauth_token=${oauthToken}`,
            playlistNextUrl: playlistNextUrl(playlist, playlists, oauthToken),
            songs: playlistSongs(playlist, playlists, entities),
        }
    }

    const playlist = []
    return {
        playlist
    }

}