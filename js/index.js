const postDOM = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    loadPost(data);
  })
  .catch((error) => console.error(error));

const loadPost = (posts) => {
  posts.forEach((post) => {
    const postChild = createPost(post);
    postDOM.appendChild(postChild);
  });
};


const createPost = ({id, title, body}) => {
  const post = document.createElement('post-component');
  post.setAttribute('title', title);
  post.setAttribute('text', body);
  post.setAttribute('postId', id);
return post;
}


