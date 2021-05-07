// GET requests with axios
// url: http://api.bryanuniversity.edu/SarabieSamarah/list/


// GET All

axios.get('http://api.bryanuniversity.edu/SarabieSamarah/list/')
.then(response => {
    for(let i = 0; i < response.data.length; i++) {
        const h1= document.createElement('h1')

        if(response.data[i].isComplete === true){
            h1.textContent = response.data[i].name
            h1.style.textDecoration = "line-through"
                h1.style.textAlign = "center"
            } else {
                h1.textContent = `${response.data[i].name}`
                h1.style.textAlign = "center"
            }
                document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))



//CORS anywhere google it 

//GET One