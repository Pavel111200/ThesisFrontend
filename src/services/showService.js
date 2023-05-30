const baseUrl = 'https://localhost:7053/api/TVShows';

export const create = (data, accessToken) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    });
}

export const getAll = async () => {
    const response = await fetch(baseUrl);

    return await response.json();
}

export const getLikedShows = async (userId, accessToken) => {
    const response = await fetch(`${baseUrl}/LikedShows/${userId}`, {
        method: 'GET',
        headers:{
            'Authorization': `bearer ${accessToken}`
        }
    });

    return await response.json();
}

export const getOne = (showId) => {
    return fetch(`${baseUrl}/${showId}`)
        .then(res => res.json());
}

export const deleteShow = (showId, accessToken) => {
    return fetch(`${baseUrl}/${showId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken}`
        }
    });
}

export const editShow = (show, accessToken) => {
    return fetch(`${baseUrl}/${show.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken}`
        },
        body: JSON.stringify(show)
    });
}

export const rateShow = (showId, accessToken, review) => {
    return fetch(`${baseUrl}/${showId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken}`
        },
        body: JSON.stringify(review)
    });
}

export const getShowSuggestions = (accessToken) => {
    return fetch(`${baseUrl}/SuggestedShows`, {
        method: 'GET',
        headers: {'Authorization': `bearer ${accessToken}`}
    })
    .then(res =>res.json());
}