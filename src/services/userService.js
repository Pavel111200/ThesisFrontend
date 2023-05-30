const baseUrl = 'https://localhost:7053/api/Users';

export const login = (data) => {
   return fetch(`${baseUrl}/login` , {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json());
}

export const register = (data) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res=> res.json());
}

export const getUsers = (accessToken) => {
    return fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Authorization': `bearer ${accessToken}`
        }
    })
    .then(res => res.json());
}

export const makeAdmin = (userId, accessToken) => {
    return fetch(`${baseUrl}/${userId}?newRole=Admin`, {
        method: 'PUT',
        headers: {
            'Authorization': `bearer ${accessToken}`
        }
    });
}

export const makeSuggestion = (accessToken, suggestion) => {
    return fetch(`${baseUrl}/Suggestions`, {
        method: 'POST',
        headers: {
            'Authorization': `bearer ${accessToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(suggestion)
    });
}

export const deleteSuggestion = (suggestionId, accessToken) => {
    return fetch(`${baseUrl}/Suggestions/${suggestionId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `bearer ${accessToken}`
        }
    })
}