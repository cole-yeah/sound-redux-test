import React from 'react'

import SongsBodyRendered from './SongsBodyRendered'

const SongsBody = props => {
    return (
        <div className='songs-body'>
            <SongsBodyRendered
                songs={props.songs}/>
        </div>
    )
}

export default SongsBody