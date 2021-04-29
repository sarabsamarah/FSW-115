// XMLHttpRequest

// how do we create a request (xhr)
//what parts of your object are important for our request 

// xhr.onereadystatechange
// xhr.readyState
//xhr.status
//xhr.open
// xhr.send
// xhr.readyState
// xhr.response
    // 1- request was sent 
    // 2
    // 3
    // 4 have we recieved a response for our data 

    //xhr.status
        // 200 went well 
        // 404 not found
        // 201 everything processed successfully POST/PUT
        // 500 something broke on the server 

        const xhr = new XMLHttpRequest()

                //method    //URL
        xhr.open("GET", "https://swapi.dev/api/people", true)
        xhr.send()

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                let data = JSON.parse(xhr.responseText)
                showData(data.results)
            } else if (xhr.readyState === 4 && xhr.status !== 200){
                console.log(xhr.responseText)
            }
            }
            function showData(data){
                
                for(let i = 0; i < data.length; i++){
                const  character = document.createElement('h1')
                 character.textContent = data[i].name
                document.body.appendChild(character)

            }
           }