

const getStarWarsPeople = async () => { 
    try {
    document.getElementById('wrapper').innerHTML=""
    const peopleData = await axios.get('https://swapi.dev/api/people')
    // .then(res => {console.log(res.data)
        for(let i = 0; i < peopleData.data.results.length; i++) {
            const people = document.createElement('div')
            people.textContent = peopleData.data.results[i].name
            document.getElementById('wrapper').appendChild(people)
        }
    // })
    // .catch(err => {console.log(err)})
    } catch{
        (err => {console.log(err)})
    }
}

const getStarWarsSpecies = async () => {
    try {
    document.getElementById('wrapper').innerHTML=""
    const speciesData = await axios.get('https://swapi.dev/api/species')
    // .then(res => {console.log(res.data)
        for(let i=0; i < speciesData.data.results.length; i++){
            const species = document.createElement('div')
            species.textContent = speciesData.data.results[i].name
            document.getElementById('wrapper').appendChild(species)
        }
    // })
    // .catch(err => console.log(err))
    } catch{
        (err => {console.log(err)})
    }
}

const getStarWarsVehicles = async () => {
    try {
    document.getElementById('wrapper').innerHTML=""
    const vehiclesData = await axios.get('https://swapi.dev/api/vehicles')
    // .then(res => {console.log(res.data)
        for(let i=0; i < vehiclesData.data.results.length; i++){
            const vehicles = document.createElement('div')
            vehicles.textContent = vehiclesData.data.results[i].name
            document.getElementById('wrapper').appendChild(vehicles)
        }
    // })
    // .catch(err => console.log(err))
    } catch {
        (err => {console.log(err)})
    }
}

