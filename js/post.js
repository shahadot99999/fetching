//console.log("we are  happy to see");
function loadPost(){
    //console.log('loading post data');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    //.then(data => console.log(data))
    .then(data =>displayPosts(data))
}

//get the elements
//create the elements
//set innnertext or innerHtml
//appemchild

function displayPosts(posts){
    //console.log(posts);
    const postContainer = document.getElementById('posts-container');

    for(const post of posts){
       // console.log(post);
       const postDiv = document.createElement('div');
       postDiv.classList.add('post');
       console.log(post);
       postDiv.innerHTML = `
       <h4>User: ${post.userId} </h4>
       <h5>Post: ${post.title}</h5>
       <p>Post Description: ${post.body} </p>
       ;`
       postContainer.appendChild(postDiv);
    }
}

loadPost();


