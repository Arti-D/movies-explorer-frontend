export const BASE_URL = "https://api.dmovies-explorer.arti.nomoredomains.rocks";

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      }).then((res) => checkResponse(res));
}

export const refactorUser = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
    credentials: "include",
  }).then((res) => checkResponse(res))
}