import React from 'react'
import { connect } from 'react-redux'

import Nav from '../components/Nav'
import { navigateTo } from '../actions/routerAction'

const NavContainer = props => {
    return (
        <Nav {...props}/>
    )
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { navigateTo })(NavContainer)