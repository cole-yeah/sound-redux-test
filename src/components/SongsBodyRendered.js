import React from 'react'

import SongsBodyCard from './SongsBodyCard'

const SongsBodyRendered = props => {
    return (
        <div>
            {
                props.songs.map((song, i) => {
                    return (
                        <div key={i}>
                            <SongsBodyCard
                                song={song}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SongsBodyRendered