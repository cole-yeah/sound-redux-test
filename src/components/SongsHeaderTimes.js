import React from 'react'

import { TIMES } from '../constants/playListConstant'

const SongsHeaderTimes = () => {
    return (
        <div className='songs-header__times'>
            <div className='songs-header__times__inner'>
                <i className='songs-header__times__icon ion-funnel' />
                {
                    TIMES.map((time, i) => 
                        <a key={i} className='songs-header__time'>
                            {time.label}
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default SongsHeaderTimes