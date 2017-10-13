import React, { Component } from 'react'

import { compileHash } from '../utils/routerUtil'

const defaultProps = {
    className: '',
    keys: {},
    onClick: null,
    options: {},
    title: '',
}

class Link extends Component {

    onClick(e) {
        e.preventDefault();
        const { navigateTo, path, keys, options } = this.props
        navigateTo({path, keys, options})
    }

    render() {
        const { linkText, path, keys, options, className } = this.props
        return (
            <a 
                className={className}
                onClick={(e) => this.onClick(e)} 
                href={`#/${compileHash({path, keys, options})}`}>
                {linkText}
            </a>
        )
    }
}

Link.defaultProps = defaultProps

export default Link