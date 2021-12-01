export function filter(value, arr, isShort) {
        const filteredMovies = arr.filter((movie) => {
            console.log(typeof(movie.duration));
            if(isShort){
                return (movie.nameRU.trim().toLowerCase().startsWith(value.trim().toLowerCase()) && movie.duration <= 40)
            } else {
                return movie.nameRU.trim().toLowerCase().startsWith(value.trim().toLowerCase())
            }
        })
        return filteredMovies
}