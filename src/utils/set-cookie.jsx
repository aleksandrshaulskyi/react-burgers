import Cookies from 'js-cookie'


export default function setCookie(name, value, lifetime) {
    Cookies.set(
        name,
        value,
        {
            expires: lifetime,
            secure: true,
            path: '/',
        }
    )
}