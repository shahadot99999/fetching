//console.log("index file are added");

function loadUsers2(){
    //console.log('button are added');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    //.then(data=>console.log(data))
    .then(data=>displayUsers2(data))
}

function displayUsers2(data){
    //console.log(data);
   
    // for(const user of data){
    //     console.log(user.name)
    // }
    const ul = document.getElementById('users-list')
    for(const user of data){
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}