import { BASE_YA_API_URL } from "../config"
import { checkResponse } from "./check-response"


export async function sendEmail(body) {
    const url = `${BASE_YA_API_URL}password-reset`

    const responseData = await fetch(
        url,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
    ).then(checkResponse)

    return responseData
}