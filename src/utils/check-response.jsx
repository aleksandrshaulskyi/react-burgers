export async function checkResponse(response) {
    if (!response.ok) {
        throw new Error('Connection has failed.');
    }
    const response_data = await response.json()

    return response_data
}
