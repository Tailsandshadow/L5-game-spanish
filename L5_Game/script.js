const stations = [
  {name: "Cornellà Centre", img: "images/cornella.jpg"},
  {name: "Gavarra", img: "images/gavarra.jpg"},
  {name: "Sant Ildefons", img: "images/sant_ildefons.jpg"},
  {name: "Can Boixeres", img: "images/can_boixeres.jpg"},
  {name: "Can Vidalet", img: "images/can_vidalet.jpg"},
  {name: "Pubilla Cases", img: "images/pubilla_cases.jpg"},
  {name: "Ernest Lluch", img: "images/ernest_lluch.jpg"},
  {name: "Collblanc", img: "images/collblanc.jpg"},
  {name: "Badal", img: "images/badal.jpg"},
  {name: "Plaça de Sants", img: "images/placa_sants.jpg"},
  {name: "Sants Estació", img: "images/sants_estacio.jpg"},
  {name: "Entença", img: "images/entenca.jpg"},
  {name: "Hospital Clínic", img: "images/hospital_clinic.jpg"},
  {name: "Diagonal", img: "images/diagonal.jpg"},
  {name: "Verdaguer", img: "images/verdaguer.jpg"},
  {name: "Sagrada Familia", img: "images/sagrada_familia.jpg"},
  {name: "Sant Pau | Dos de Maig", img: "images/sant_pau.jpg"},
  {name: "Camp de l'Arpa", img: "images/camp_arpa.jpg"},
  {name: "La Sagrera", img: "images/la_sagrera.jpg"},
  {name: "Congrés", img: "images/congres.jpg"},
  {name: "Maragall", img: "images/maragall.jpg"},
  {name: "Virrei Amat", img: "images/virrei_amat.jpg"},
  {name: "Vilapicina", img: "images/vilapicina.jpg"},
  {name: "Horta", img: "images/horta.jpg"},
  {name: "El Carmel", img: "images/el_carmel.jpg"},
  {name: "El Coll | La Teixonera", img: "images/el_coll.jpg"},
  {name: "Vall d'Hebron", img: "images/vall_dhebron.jpg"},
];

let current = 0;
let points = 0;

// ===== ELEMENTOS HTML =====
const stationName = document.getElementById("station-name");
const stationImg = document.getElementById("station-img");
const nextBtn = document.getElementById("next-btn");
const bgMusic = document.getElementById("station-music");

// ===== MUSICA DE FONDO =====
bgMusic.src = "music/background_music.mp3"; // UNA sola canción
bgMusic.loop = true;
bgMusic.volume = 0.4;

// Algunos navegadores exigen interacción
document.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
});

function nextStation() {
  if (current >= stations.length) {
    document.getElementById("station-name").innerText = "🏁 ¡Llegaste a Vall d'Hebron!";
    document.getElementById("event-text").innerText = "¡Juego terminado! Total de puntos: " + points;
    document.getElementById("station-img").src = "images/end.jpg";
    document.getElementById("station-music").pause();
    return;
  }

  const station = stations[current];
  document.getElementById("station-name").innerText = station.name;
  document.getElementById("station-img").src = station.img;
  const audio = document.getElementById("station-music");
  audio.src = station.music;
  audio.play();

  const events = [
    {text: "¡Cuidado! Hay mucha gente. Pierdes 1 punto.", points: -1},
    {text: "¡Genial! Encuentras asiento. Ganas 2 puntos.", points: 2},
    {text: "Ayudas a un turista perdido. Ganas 1 punto.", points: 1},
    {text: "Todo tranquilo, avanzas sin problemas.", points: 0}
  ];

  const event = events[Math.floor(Math.random() * events.length)];
  points += event.points;

  document.getElementById("event-text").innerText = event.text;
  document.getElementById("points").innerText = "Puntos: " + points;

  current++;
}
