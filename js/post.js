let template = document.createElement('template');
template.innerHTML =`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
<div id="post">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h5>
      <p class="card-text">quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
      <div class="text-end">
        <i class="bi bi-star" id="star"></i> <i class="bi bi-trash" id="trash"></i>
      </div>
    </div>
  </div>
</div>
`


class post extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.star = this.star.bind(this);
    this.trash = this.trash.bind(this);
  }
  star() {
    let favorites = [];
    const storageValue =  JSON.parse(localStorage.getItem('favorites'));
    console.log(storageValue);
    const id = this.getAttribute('postId');
    if (storageValue === null) {
      favorites[0] = id;
    } else {
      favorites = [...storageValue, id];
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  trash() {
    const id = this.getAttribute('postId');
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'})
      .then((res) => console.log(res.status))
    .catch((error) => console.error(error));
    this.remove();
  }
  
  connectedCallback() {
    this.shadowRoot.querySelector('.card-title').innerHTML = this.getAttribute('title');
    this.shadowRoot.querySelector('.card-text').innerHTML = this.getAttribute('text');
    this.classList = "col col-md-4 mt-4"
    const star = this.shadowRoot.querySelector('#star');
    const trash = this.shadowRoot.querySelector('#trash');
    star.addEventListener('click', this.star);
    trash.addEventListener('click', this.trash);
  }
  disConnectedCallback() {
    const star = this.shadowRoot.querySelector('#star');
    const trash = this.shadowRoot.querySelector('#trash');
    star.removeEventListener('click', this.star);
    trash.removeEventListener('click', this.trash);
  }
}


window.customElements.define('post-component', post);



