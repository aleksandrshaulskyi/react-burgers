import { BASE_YA_API_URL } from '../config';
import { checkResponse } from './check-response';


export async function refreshTokens(refreshToken) {
    const url = `${BASE_YA_API_URL}auth/token`

    const responseData = fetch(
        url,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({'token': refreshToken})
        }
    ).then(checkResponse)

    return responseData
}
