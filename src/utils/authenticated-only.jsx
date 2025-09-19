import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


export function AuthenticatedOnly() {
    const location = useLocation()
    const { user, retrieved } = useSelector(state => state.user)

    if (!retrieved) return null

    if (!user) {
        return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`} />
    }

    return <Outlet />
}