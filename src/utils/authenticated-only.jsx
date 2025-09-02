import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


export function AuthenticatedOnly() {
    const user = useSelector(state => state.user.user)

    if (!user) {
        return <Navigate to='/login' replace />
    }

    return <Outlet />
}