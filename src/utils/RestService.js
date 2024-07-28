// src/services/restService.js
const getRequestData = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(url, options);
        const contentType = response.headers.get('content-type');

        if (!response.ok) {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }

        if (contentType && contentType.indexOf('application/json') !== -1) {
            const data = await response.json();
            return data;
        }

        return await response.text();
    } catch (error) {
        console.error(`Data fetching error: ${url}`, error);
        throw error;
    }
};

export { getRequestData };
