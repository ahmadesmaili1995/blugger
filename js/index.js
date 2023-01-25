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


const createPost = ({title, body}) => {
  const post = document.createElement('post-component');
  post.setAttribute('title', title);
  post.setAttribute('text', body)
return post;
}

`    <div class="col col-md-4 mt-4" id="photo">
    <div class="card">
      <img src="https://via.placeholder.com/600/92c952" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">accusamus beatae ad facilis cum similique qui sunt</h5>
      </div>
    </div>
  </div>`;
