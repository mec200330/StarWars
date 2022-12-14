fetch('https://swapi.dev/api/species/')
.then(response => response.json())
.then(response => { response.results.forEach(spec => {
    let species = document.createElement('div')
    document.querySelector('body').appendChild(species)
    species.innerHTML =   `<h1>${spec.name}</h1>
    <h3>Clasificación : ${(spec.classification)}</h3>
    `
   let filmList = document.createElement('ul')
   species.appendChild(filmList)

   spec.films.forEach(peli =>{
    fetch(peli)
    .then(response => response.json())
    .then(fil => {
        let filmEle = document.createElement('li')
        filmEle.innerHTML =`${fil.title}`
        filmList.appendChild(filmEle)
    })
   })
});
   
})