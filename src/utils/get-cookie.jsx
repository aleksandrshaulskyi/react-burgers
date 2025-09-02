import Cookies from 'js-cookie'


export function getCookie(key) {
    return Cookies.get(key)
}
