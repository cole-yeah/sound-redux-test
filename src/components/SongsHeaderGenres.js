import React from 'react'

import { GENRES } from '../constants/playListConstant'

const SongsHeaderGenres = () => {
    return (
        <div className='songs-header__genres'>
            <div className='songs-header__genres__active'></div>
            <div className='songs-header__genres__main'>
                {
                    GENRES.map((genre, i) => 
                        <div key={i} className='songs-header__genre'>
                            <a className='songs-header__genre__text'>
                                {genre.key}
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SongsHeaderGenres