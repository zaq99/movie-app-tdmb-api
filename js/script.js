const baseUrl = "https://api.themoviedb.org/3"
const apiKey = "fae40bf94a166ef88b15a369964f1a73"
const imgUrl = "https://image.tmdb.org/t/p/w500"


const movie = baseUrl + `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1`

const tombolCari = document.getElementById('tombol-cari')

tombolCari.addEventListener('click', (event) =>{
    event.preventDefault()

    let inputSearch = document.getElementById('search').value
    // console.log(inputSearch)
    searchMovie(inputSearch)
})

async function searchMovie(search){
    const searchUrl = baseUrl + '/search/movie?api_key='+ apiKey +`&query=${search}&page=1`;
    let response = await fetch(searchUrl)
    let result = await response.json()
    listMovie(result.results)
}

async function getMovie(){
    let response = await fetch(movie)
    let result = await response.json()
    listMovie(result.results)
}

getMovie(movie)

async function listMovie(semuaFilm){
    semuaFilm.map((item, index) => {
        console.log(item.backdrop_path)
        
        if( index == 0){
                    document.querySelector('body').style.cssText = `
                    background: url(${imgUrl + item.backdrop_path}) #232323; 
                    background-repeat: no-repeat;height: 700px;
                    background-position: center;
                    background-size: cover;`;
                    
                    document.querySelector('h1').innerText = item.original_title
                    document.querySelector('p').innerText = item.release_date
                    document.querySelectorAll('p')[1].innerText = item.vote_average
                    
                }
                
                const film = document.createElement('div')
                let listFilm = document.getElementById('list-film')
                film.innerHTML =
                `
                <div class='film overflow-hidden' style='text-overflow: ellipsis;'>
                <img src=${imgUrl + item.poster_path} style="width: 250px">
                <h6>${item.original_title}</h6>
                <p>${item.release_date}</p>
                <p>${item.vote_average}</p> 
                </div>`
                listFilm.appendChild(film)
            })
}
