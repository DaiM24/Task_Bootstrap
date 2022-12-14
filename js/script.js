const data = {
  fechaActual: "2022-01-01",
  eventos: [
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
      name: "Korean style",
      date: "2021-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Campo de Futb????l",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
      name: "15K NY",
      date: "2021-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
      name: "Batman",
      date: "2021-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    }
  ],
};

const pastEvents = [];
const upcomingsaEvents = [];
const dateToCompare = Date.parse(data.fechaActual); //Timestamp
const categories = [];
var actualEvents;
var actualId;
var search = {input:"", seted: false};

for (let i = 0; i < data.eventos.length; i++) {
  let dates = Date.parse(data.eventos[i].date);
  if (dates > dateToCompare) {
    upcomingsaEvents.push(data.eventos[i]);
  } else {
    pastEvents.push(data.eventos[i]);
  }
  if (
    !categories.find((category) => category.name === data.eventos[i].category)
  ) {
    categories.push({ name: data.eventos[i].category, checked: false });
  }
};

function selectCheck() {
  let div = ``;
  const containerInpunts = document.querySelector("#container_checks");
  for (let i = 0; i < categories.length; i++) {
    div += `
      <div clinnerHTML ass="form-check form-check-inline mx-5 my-3">
        <input class="form-check-input" type="checkbox" value="${categories[i].name}">
        <label class="form-check-label me-3" for="inlineCheckbox1">${categories[i].name}</label>
      </div>
    `;
  }
  containerInpunts.insertAdjacentHTML("beforeend", div);
};

function checkListener(){
  const inputsCheck = document.querySelectorAll(".form-check-input");

  inputsCheck.forEach((inputCheck) => {
    inputCheck.addEventListener("click", (event) => {
      categories.map((category) => {
        if (event.target.value === category.name) {
          category.checked ? (category.checked = false) : (category.checked = true);
        }
      });
      createCards();
    });
  });
};


function card(data) {
  return `
  <div class="col event">
    <div class="card text-bg-dark h-100">
      <img src="${data.image}" class="card-img-top" alt="${data.name}">
      <div class="card-body text-center d-flex flex-column justify-content-between">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.description}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-between ">
          <span class="fst-italic mt-2 ms-2">Price $${data.price}</span>
          <a href="../pages/details.html" class="btn btn-outline-warning me-md-2 view-detail" id="${data.name}">More Details</a>
        </div>
      </div>
    </div>
  </div>
  `;
}

function noEvent() {
  const containerImg = document.querySelector(".no-event");
  let div = `
  <div class="col-lg-4" id="NoEvent">
    <div class="card text-bg-dark mb-3 ">
      <div class="card-body text-center">
          <h3 class="card-title fw-bold text-warning">Oops!</h3>
          <img src="../assets/pngwing.com.png" width="200" alt="">
          <h5 >No events Found</h5>
          <p class="card-text text-warning">There aren't events that match your current filters</p>
      </div>
    </div>
  </div>
  `;
  !document.getElementById('NoEvent')? containerImg.insertAdjacentHTML("beforeend", div) : null;
}

function viewDetail() {
  let evento = JSON.parse(localStorage.getItem('myEvent'));
  console.log(evento)
  localStorage.clear()
  const containerDetail = document.querySelector("#container_detail");
  let div = `
  <div class="card text-bg-dark mb-3 m-auto" style="max-width: 900px;">
  <div class="row g-0 ">
    <div class="col-md-4">
      <img src="${evento.image}" class="img-fluid rounded-start detail-img" alt="${evento.name}">
    </div>
    <div class="col-md-8" >
      <div class="card-body h-100 d-flex flex-column justify-content-center">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        </div>
      </div>
    </div>
  </div>
  `;
  containerDetail.insertAdjacentHTML("beforeend", div);
};

function createCards() {
  let cards = ``;
  const cardContainer = document.querySelector(actualId); 
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  for (let i = 0; i < actualEvents.length; i++) {
    if (categories.some((category) => category.checked === true)) {
      categories.map((category) => {
        if (category.checked && category.name === actualEvents[i].category) {
          cards += card(actualEvents[i]);
        }
      });
    } else {
      cards += card(actualEvents[i]);
    }
  }
  if (cards) {
    cardContainer.insertAdjacentHTML("beforeend", cards);
  } else {
    noEvent();
  }
};

let URLactual = window.location.pathname.split("/").pop();

function mainRender(id,eventos,flag){
  flag ? null : selectCheck()
  actualEvents = eventos 
  actualId = id
  createCards();
  checkListener();
  searchEvent();
  buttonListener();
}

function URLexists(flag) {
  if (URLactual === "index.html" || URLactual === "") {
    mainRender("#container_home", data.eventos, flag);
  } else if (URLactual === "upcomings_events.html") {
    mainRender("#container_upcoming", upcomingsaEvents, flag);
  } else if (URLactual === "past_events.html") {
    mainRender("#container_past", pastEvents, flag);
  } else if (URLactual === "details.html"){
    viewDetail();
  }
}
window.onload = URLexists(false);

function searchEvent(){
  const inputEvent = document.getElementById('search_event');
  inputEvent.addEventListener("keyup", (evento) => {
    const eventsCards = document.querySelectorAll('.event');
    var counter = 0;
    eventsCards.forEach((eventCard) => {
      if(eventCard.textContent.toLowerCase().includes(evento.target.value.toLowerCase())){
        eventCard.classList.remove("hidden");
      }
      else{
        counter++
        eventCard.classList.add("hidden");
      }
    });
    counter == eventsCards.length ? noEvent() : document.getElementById('NoEvent').remove();
  });
};

function buttonListener(){
  const buttons = document.querySelectorAll('.view-detail');
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      data.eventos.map((evento)=>{
        evento.name == button.id ? localStorage.setItem('myEvent', JSON.stringify(evento)) : null;
      });
    });
  });
};

