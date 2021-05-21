//promiss chaining 

//url: https://swapi.dev/api/people/1




axios.get('https://swapi.dev/api/people/1/')

.then(res => {
    const homeworlUrl = res.data.homeowrld
    comsole.log(homeworlUrl)
    return axios.get(homeworlUrl)
})
.then(response => console.log(response))
.catch(err => console.log(err))


