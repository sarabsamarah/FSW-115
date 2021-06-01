
//get

const getTodo = () => {
    axios
        .get("http://api.bryanuniversity.edu/SarabieSamarah/list/")
        .then((res) => {
        displayItems(res.data);
    })
        .catch((error) => console.error(error));
  };
    getTodo();
  
const displayItems = (data) => {
    console.log(data);
    let box = document.getElementById("toDoItems");
  
data.forEach((todo) => {
    let todoBox = document.createElement("div");
    let name = document.createElement("h2");
    let description = document.createElement("h4");
    let price = document.createElement("h4");
        todoBox.className = "todoContainer"
        name.textContent = "Title: " + todo.name;
        description.textContent = "Description: " + todo.description;
        price.textContent = "$" + todo.price;
  
    let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "button2"
        deleteButton.id = todo._id;
        deleteButton.addEventListener("click", deleteItem);
    
    let completeButton = document.createElement("checkbox");
    let completeButtonText = "";
        completeButton.className = "button3"
        todo.completed
            ? (completeButtonText = "Completed" )
            : (completeButtonText = "Done!" );

        completeButton.innerText = completeButtonText;
        completeButton.id = todo._id;
        completeButton.value = todo.completed;
        completeButton.addEventListener("click", updateItem);
    
        todoBox.appendChild(name);
        todoBox.appendChild(description);
        todoBox.appendChild(price);
        box.appendChild(todoBox);
        todoBox.appendChild(completeButton);
        todoBox.appendChild(deleteButton);
    });
  };
  
  // Post
    const postItem = (event) => {
        event.preventDefault();
        console.log("");
    
    const itemTitle = document.getElementById("input1");
    const itemDescription = document.getElementById("input2");
    const itemPrice = document.getElementById("input3");
    const itemComplete = document.getElementById("inputComplete");
        console.dir(itemComplete);
  
    let newItem = {
        name: itemTitle.value,
        description: itemDescription.value,
        price: itemPrice.value,
        isComplete: itemComplete.checked,
    };
        console.log(newItem);
    axios
        .post("http://api.bryanuniversity.edu/SarabieSamarah/list/", newItem)
        .then(() => {
            location.reload();
      })
        .catch((err) => console.log(err));
  };
  const form = document.getElementById("myForm");
  myForm.addEventListener("submit", postItem);
  
  // Delete
    const deleteItem = (event) => {
    console.log(event.target.id);
    axios
        .delete(`http://api.bryanuniversity.edu/SarabieSamarah/list/${event.target.id}`)
        .then(() => {
            location.reload();
    })
        .catch((err) => console.log(err));
  };
  
  // Put
    const updateItem = (event) => {
        console.log(event.target.value);
        isComplete = null;
        event.target.value === "true" ? (isComplete = true) : (isComplete = false);
    let updatedItem = { completed: !isComplete };
    alert("All Done!");
    
  
    axios
        .put(`http://api.bryanuniversity.edu/SarabieSamarah/list/${event.target.id}`, updatedItem)
        .then(() => location.reload())
        .catch((err) => console.log(err));
  };

  const xhr = new XMLHttpRequest();
