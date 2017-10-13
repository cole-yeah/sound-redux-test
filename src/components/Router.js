import React from 'react'

const Router = (props) => {
    const { router, routes } = props
    const path = router.path
    if(path in routes) {
        const Component = routes[path]
        return <Component/>
    }
    return null
}

export default Router