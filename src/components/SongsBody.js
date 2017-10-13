import React, { Component } from 'react'

import SongsBodyRendered from './SongsBodyRendered'

class SongsBody extends Component {

    constructor(props) {
        super(props)
        this.onScroll = this.onScroll.bind(this)
    }

    componentWillMount() {
        window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }

    onScroll() {
        // this.setState()
    }

    render() {
        return (
            <div className='songs-body'>
                <div className='songs-body__padder' />
                <SongsBodyRendered
                    songs={this.props.songs}/>
                <div className='songs-body__padder' />
            </div>
        )
    }
}

export default SongsBody