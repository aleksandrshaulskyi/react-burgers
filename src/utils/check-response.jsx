export async function checkResponse(response) {
    if (!response.ok) {
        throw new Error('Connection has failed.');
    }
    return response
}
