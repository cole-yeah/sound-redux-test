const API_HOSTNAME = '//api.soundcloud.com'
export const CLIENT_ID = 'f4323c6f7c0cd73d2d786a2b1cdae80c'

const constructUrl = url => `${API_HOSTNAME}${url}${url.indexOf('?') === -1?'?':'&'}client_id=${CLIENT_ID}`

export const FETCH_SONGS = constructUrl('/tracks?linked_partitioning=1&limit=50&offset=0')
// export const SONGS_URL = constructUrl('/tra')