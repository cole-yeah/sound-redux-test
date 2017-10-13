import React from 'react'

import Link from './Link'
import NavSearch from './NavSearch'
import { SONGS_PATH, INDEX_PATH } from '../constants/routerConstant'

const Nav = props => {
    const { navigateTo } = props
    return (
        <div className='nav'>
            <div className='nav__inner container'>
                <div className='nav__section'>
                    <i className='nav__logo__icon ion-radio-waves'/>
                    <Link
                        className='nav__logo__text'
                        linkText='SoundRedux'
                        navigateTo={navigateTo}
                        path={INDEX_PATH}/>
                    <Link
                        className='nav__logo__text'
                        linkText='INDEX_PATH'
                        navigateTo={navigateTo}
                        path={SONGS_PATH}/>
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