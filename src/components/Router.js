import React from 'react'

const Router = (props) => {
    const { router, routes } = props
    console.log('router, routes', router, routes)
    const path = router.path
    if(path in routes) {
        const Component = routes[path]
        return <Component/>
    }
    return null
}

export default Router