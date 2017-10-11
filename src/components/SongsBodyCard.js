import React from 'react'

import ArtworkPlay from './ArtworkPlay'
import formatSongTitle from '../utils/songUtil'
import getImageUrl from '../utils/imageUtil'
import IMAGE_SIZES from '../constants/imageConstants'

const SongsBodyCard = props => {
    const { title, user, artwork_url } = props.song
    const { username, avatar_url } = user
    return (
        <div className='songs-body-card'>
            <div className='songs-body-card__inner'>
                <div className='songs-body-card__artwork' style={{backgroundImage: `url(${getImageUrl(artwork_url, IMAGE_SIZES.LARGE)})`}}>
                    <ArtworkPlay/>
                </div>
                <div className='songs-body-card__main'>
                    <div className='songs-body-card__avatar' style={{backgroundImage: `url(${getImageUrl(avatar_url)})`}} />
                    <div className='songs-body-card__details'>
                        <a className='songs-body-card__title'>{formatSongTitle(title)}</a>
                        <a className='songs-body-card__username'>{username}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongsBodyCard