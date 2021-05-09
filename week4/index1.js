function planets(){
    axios.get("https://swapi.dev/api/planets")
    .then(response => {
        for (i =0; i < response.data.results.length; i++){
            const h2 = document.createElement("h2")
            h2.innerHTML = `${response.data.results[i].name}`
            let data = document.getElementById("list")
            data.append(h2)
        }
    })
    .catch(error => console.log(error))
}

function species(){
    axios.get("https://swapi.dev/api/species/")
    .then(response => {
        for (i =0; i < response.data.results.length; i++){
            const h2 = document.createElement("h2")
            h2.innerHTML = `${response.data.results[i].name}`
            let data = document.getElementById("list")
            data.append(h2)
        }
    }) 
    .catch(error => console.log(error))
}