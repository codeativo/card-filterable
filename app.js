const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCardsContainer = document.getElementById("filterable-cards");

const data = [
    { category: 'movies', img: 'img/movie1.jfif'},
    { category: 'movies', img: 'img/movie2.jfif'},
    { category: 'movies', img: 'img/movie3.jfif'},
    { category: 'movies', img: 'img/movie4.jfif'},
    { category: 'movies', img: 'img/movie5.jfif'},
    { category: 'movies', img: 'img/movie6.jfif'},
    { category: 'series', img: 'img/series1.jfif'},
    { category: 'series', img: 'img/series2.jfif'},
    { category: 'series', img: 'img/series3.jfif'},
    { category: 'series', img: 'img/series4.jfif'},
    { category: 'series', img: 'img/series5.jfif'},
    { category: 'videogames', img: 'img/videogame1.jfif'},
    { category: 'videogames', img: 'img/videogame2.jfif'},
    { category: 'videogames', img: 'img/videogame3.jfif'},
    { category: 'videogames', img: 'img/videogame4.jfif'},
    { category: 'videogames', img: 'img/videogame5.jfif'},
    { category: 'videogames', img: 'img/videogame6.jfif'}
];


window.addEventListener('load', ()=>{

    // Generar valores aleatorios
    data.sort(() => Math.random() - 0.5);

    // Generar Cards dinamicamente
    const generateCards = (data) => {
        let cardsHTML = '';
        data.forEach(item => {
            cardsHTML += `
                <div class="card" data-name="${item.category}">
                    <img src="${item.img}" alt="">
                    <button>View more</button>
                </div>
            `;
        });
        return cardsHTML;
    };

    // Insertar Cards
    filterableCardsContainer.innerHTML = generateCards(data);
});






// Filtro de botones
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    document.querySelectorAll("#filterable-cards .card").forEach(card => {
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all"){
            card.classList.remove("hide");
        }else{
            card.classList.add("hide");
        }

    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));