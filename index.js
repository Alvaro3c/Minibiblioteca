const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "https://m.media-amazon.com/images/I/91yNF5xdR4L.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "https://m.media-amazon.com/images/I/91YzQ7lOiyL.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1I2Kx625BL.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Lugal_Kiengi_Kiuri%2C_King_of_Sumer_and_Akkad%2C_on_a_seal_of_Shulgi.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "https://upload.wikimedia.org/wikipedia/commons/6/65/Cyrus_II_le_Grand_et_les_H%C3%A9breux.jpg\n",
        "language": "Hebrew",
        "pages": 176,
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "title": "The Book Of Job",
        "year": -600
    }]

let section = document.querySelector('.libros')


/* let author = books[0]['author']
let parrafo = document.createElement("p");
parrafo.innerHTML = author;
document.body.appendChild(parrafo) */
//innerHTML
//createTextNode  
//appendChild()
//createElement()
//createAttribute()






for (let i = 0; i < books.length; i++) {

    //Creacion de divs
    let card = document.createElement("div");
    card.classList.add("card");
    section.appendChild(card);

    let info = document.createElement('div');
    info.classList.add('info');
    card.appendChild(info);

    let media = document.createElement('div');
    media.classList.add('media');
    card.appendChild(media);

    //creacion de p
    let pAuthor = document.createElement('p')
    pAuthor.innerHTML = books[i].author;
    info.appendChild(pAuthor);

    let pTitle = document.createElement('p');
    pTitle.innerHTML = books[i].title;
    info.appendChild(pTitle);

    let pCountry = document.createElement('p')
    pCountry.innerHTML = books[i].country
    info.appendChild(pCountry);

    let pLanguage = document.createElement('p');
    pLanguage.innerHTML = books[i].language;
    info.appendChild(pLanguage);

    let pPages = document.createElement('p')
    pPages.innerHTML = books[i].pages
    info.appendChild(pPages)

    let pYear = document.createElement('p');
    pYear.innerHTML = books[i].year;
    info.appendChild(pYear);

    let imagen = document.createElement("img");
    imagen.setAttribute("src", books[i].imageLink);
    media.appendChild(imagen);
}

//meter el valor del link en el atributo src de las imagenes