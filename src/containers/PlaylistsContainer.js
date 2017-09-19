import React, { Component } from 'react'

class PlaylistsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({hasError: true})
        console.log(error, info)
    }
    render() {
        if(this.state.hasError) {
            return <div><p>ERROR!!</p></div>
        }
        return (
            <div>
                <h1>TITLE</h1>
                <p>APP content!!!!</p>
                <a className='nav-nav-item-link active'>SOUNDREDUX</a>
            </div>
        )
    }
}
export default PlaylistsContainer