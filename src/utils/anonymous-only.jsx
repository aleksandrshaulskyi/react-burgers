import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'










export function AnonymousOnly() {
    const { user, retrieved } = useSelector(state => state.user)

    if (!retrieved) return null

    if (user) {
        return <Navigate to='/' />
    }

    return <Outlet />
}