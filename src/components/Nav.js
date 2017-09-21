import React from 'react'

import NavSearch from './NavSearch'

const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav__inner container'>
                <div className='nav__section'>
                    <i className='nav__logo__icon ion-radio-waves'/>
                    <a className='nav__logo__text'>
                        SoundRedux
                    </a>
                </div>
                <div className='nav__section nav__section--session'></div>
                <div className='nav__section nav__section--search'>
                    <NavSearch/>
                </div>
            </div>
        </div>
    )
}

export default Nav