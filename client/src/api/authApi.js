import { env } from "../config/config";

export const fetchWithOutAuth = async (route, method = 'POST', payload) => {
    
    const url = `${env.SERVER_PATH}/${route}`;

if(method === 'POST'){
    const response = await fetch(url);
    const data = await response.json();
    return data;
} else {
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
}
}

