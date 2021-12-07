import { URL } from "../utils/constants.js"

function _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}   
    
export const getAllMovies = () => {
    return fetch(`${URL}`).then((res) => _checkResponse(res))
}
