export function filter(value, arr, isShort) {
        const filteredMovies = arr.filter((movie) => {
            if(isShort){
                return (movie.nameRU.trim().toLowerCase().includes(value.trim().toLowerCase()) && movie.duration <= 40)
            } else {
                return movie.nameRU.trim().toLowerCase().includes(value.trim().toLowerCase())
            }
        })
        return filteredMovies
}