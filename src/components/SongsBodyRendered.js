import React from 'react'

import SongsBodyCard from './SongsBodyCard'

const SongsBodyRendered = props => {
    const { songs } = props

    const start = 0
    const end = songs.length
    const cellsPerRow = 5
    const length = songs.length
    const rows = []

    for(let i=start; i<end; i+=cellsPerRow) {
        const row = []
        for(let j=0; j<cellsPerRow; j+=1) {
            const index = i+j;
            const song = index < length ? songs[index] : null;
            row.push(
                <div className='row__cell' key={index}>
                    {song?(
                        <SongsBodyCard
                            song={song}/>
                    ):null}
                </div>
            )
        }
        rows.push(
            <div className='row' key={i}>
                {row}
            </div>
        )
    }

    return <div>{rows}</div>

}

export default SongsBodyRendered