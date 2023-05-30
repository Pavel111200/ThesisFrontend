const baseUrl = 'https://localhost:7053/api/Movies';

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

export const getLikedMovies = async (userId, accessToken) => {
    const response = await fetch(`${baseUrl}/LikedMovies/${userId}`, {
        method: 'GET',
        headers:{
            'Authorization': `bearer ${accessToken}`
        }
    });

    return await response.json();
}

export const getOne = (movieId) => {
    return fetch(`${baseUrl}/${movieId}`)
        .then(res => res.json());
}

export const deleteMovie = (movieId, accessToken) => {
    return fetch(`${baseUrl}/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken}`
        }
    });
}

export const editMovie = (movie, accessToken) => {
    return fetch(`${baseUrl}/${movie.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken}`
        },
        body: JSON.stringify(movie)
    });
}

export const rateMovie = (movieId, accessToken, review) => {
    return fetch(`${baseUrl}/${movieId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${accessToken}`
        },
        body: JSON.stringify(review)
    });
}

export const getMovieSuggestions = (accessToken) => {
    return fetch(`${baseUrl}/SuggestedMovies`, {
        method: 'GET',
        headers: {'Authorization': `bearer ${accessToken}`}
    })
    .then(res =>res.json());
}