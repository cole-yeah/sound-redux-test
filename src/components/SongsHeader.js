import React from 'react'

import SongsHeaderGenres from './SongsHeaderGenres'
import SongsHeaderTimes from './SongsHeaderTimes'

const SongsHeader = props => {
    const { navigateTo } = props
    return (
        <div className='songs-header'>
            <div className='songs-header__inner'>
                <div className='songs-header__sections container'>
                    <div className='songs-header__section songs-header__section--genres'>
                        <SongsHeaderGenres
                            navigateTo={navigateTo}/>
                    </div>
                    <div className='songs-header__section songs-header__section--time'>
                        <SongsHeaderTimes/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongsHeader