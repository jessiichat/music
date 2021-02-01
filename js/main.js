// Afficher les titres de tous les albums
const albumContainer = document.querySelector('.album-container');

// Affichage des albums avec leurs couverture et leur titres
for (const album of albums){
    albumContainer.insertAdjacentHTML('afterbegin', 
    `<div class="albumDetails col-sm-3">
        <div class="card mx-3 my-3">
            <img src="${album.cover_big}" class="card-img-top" alt="couverture de l'album ${album.title}">
            <div class="card-body">
                <p class="card-title">${album.title}</p>
            </div>
            <ul class="trackDetailsContainer list-group-flush d-none"></ul>
        </div>
    </div>`);
}

// Affichage de tous les titres de l'album
const albumDetails = document.querySelector('.albumDetails');
const albumDetailsCard = document.querySelector('.albumDetails > .card')
const albumTitle = document.querySelector('.albumDetails > .card-body');
const albumDetailsImage = document.querySelector('.albumDetails > img');
const trackDetailsContainer = document.querySelector('.trackDetailsContainer');

// Creation d'une row pour rendre la carte horizontale
//const albumDetailsRow = document.createElement('div');

for (const track of tracklist){
    trackDetailsContainer.insertAdjacentHTML('afterbegin', 
    `<li class="list-group-item trackDetailsContainer">
        <figure class='trackDetails'>
            <figcaption>
                <p>${track.title}</p>
                <p>${track.duration} sec</p>
            </figcaption>
            <audio controls src="${track.preview}"></audio>
        </figure>
    </li>`);
}
// Lorsqu'on clic sur une carte, on fait apparaitre le tracklist
// La tracklist comporte la durée et une preview
albumContainer.addEventListener('click', () => {    
    // On rajoute une row après card pour rendre en horizontal
    albumTitle.classList.add('col-md-8');
    trackDetailsContainer.classList.add('col-md-8');
    trackDetailsContainer.classList.toggle('d-none');
});
