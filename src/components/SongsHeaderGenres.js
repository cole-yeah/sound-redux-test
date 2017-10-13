import React from 'react'

import Link from './Link'
import { GENRES } from '../constants/playListConstant'
import { SONGS_PATH } from '../constants/routerConstant'

const SongsHeaderGenres = props => {
    const { navigateTo } = props
    return (
        <div className='songs-header__genres'>
            <div className='songs-header__genres__active'></div>
            <div className='songs-header__genres__main'>
                {
                    GENRES.map((genre, i) => 
                        <div key={i} className='songs-header__genre'>
                            <Link
                                className='songs-header__genre__text'
                                path={SONGS_PATH}
                                options={{
                                    g: genre.key,
                                }}
                                navigateTo={navigateTo}
                                linkText={genre.key}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SongsHeaderGenres