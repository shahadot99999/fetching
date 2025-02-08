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


//Deleting a resource

function deleteAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
    
}


//Patching a resource
function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//Creating a resource
function createAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}