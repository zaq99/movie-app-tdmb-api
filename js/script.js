const baseUrl = "https://api.themoviedb.org/3"
const apiKey = "fae40bf94a166ef88b15a369964f1a73"
const imgUrl = "https://image.tmdb.org/t/p/w500"


const movie = baseUrl + `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1`

async function ambilData (){
    let response = await fetch(movie)
    let result = await response.json()

    // console.log(result.results)
    let semuaFilm = result.results

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

        document.getElementById('list-film').innerHTML +=
        `
        <div class='film overflow-hidden' style='text-overflow: ellipsis;'>
        <img src=${imgUrl + item.poster_path} style="width: 250px">
        <h6>${item.original_title}</h6>
        <p>${item.release_date}</p>
        <p>${item.vote_average}</p> 
        </div>`
    })

    // console.log(semuaFilm)
}

ambilData()

















// let url ="https://api.themoviedb.org/3/discover/movie?api_key=fae40bf94a166ef88b15a369964f1a73&sort_by=popularity.desc&page=1"

// async function tarikData(){
//     let response = await fetch(url)
//     let result = await response.json()

//     // console.log(result.results)
//     let semuaFilm = result.results

//     // document.querySelector('body').style.cssText = "background: red; color: blue";

//     let banner = []
//     semuaFilm.map((item) => {
//         if(banner == 0){
//             banner.push(item.backdrop_path)
//         } 
//         document.querySelector('body').setAttribute("style", "background: url(result.banner);")

//         // console.log(item.release_date)
//         // console.log(item.vote_average)


//         //document.getElementsByClassName('ini').innerText = `${item.original_title}`
//     })
    

//     // console.log(result)
// }

// async function cari(){
//     let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fae40bf94a166ef88b15a369964f1a73&query=${search_key}&page=1`)
//     let result = await response.json()
// }

// tarikData()

