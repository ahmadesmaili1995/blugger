const albumDOM = document.getElementById("album");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => {
    loadAlbum(data);
  })
  .catch((error) => console.error(error));

const loadAlbum = (album) => {
  album.forEach((photo) => {
    const photoChild = createphoto(photo);
    albumDOM.appendChild(photoChild);
  });
};


const createphoto = ({url , title}) => {
  const photo = document.createElement('div');
  photo.classList.add('col');
  photo.classList.add('col-md-4');
  photo.classList.add('mt-4');
  photo.innerHTML = `
  <div class="card">
    <img src="${url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
    </div>
  </div>
`
return photo;
}

`    <div class="col col-md-4 mt-4" id="photo">
    <div class="card">
      <img src="https://via.placeholder.com/600/92c952" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">accusamus beatae ad facilis cum similique qui sunt</h5>
      </div>
    </div>
  </div>`;
