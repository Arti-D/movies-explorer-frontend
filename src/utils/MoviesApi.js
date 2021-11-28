const url = "https://api.nomoreparties.co/beatfilm-movies";

function _checkResponse(res) {
    if (res.ok) {
        console.log(res.body);
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}   
    
export const getAllMovies = () => {
    return fetch(`${url}`).then((res) => _checkResponse(res))
}
