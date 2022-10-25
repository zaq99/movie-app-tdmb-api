let url ="https://api.themoviedb.org/3/discover/movie?api_key=fae40bf94a166ef88b15a369964f1a73&sort_by=popularity.desc&page=1"

async function tarikData(){
    let response = await fetch(url)
    let result = await response.json()

    // console.log(result.results)
    let semuaFilm = result.results

    semuaFilm.forEach((item) => {
        console.log(item.original_title)
        // console.log(item.release_date)
        // console.log(item.vote_average)

        document.getElementsByClassName('ini').innerText = `${item.original_title}`
    })
    

    // console.log(result)
}

async function cari(){
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fae40bf94a166ef88b15a369964f1a73&query=${search_key}&page=1`)
    let result = await response.json()
}

tarikData()

