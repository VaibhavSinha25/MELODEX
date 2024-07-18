// anugrah play pause js
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let playButton = document.getElementById("playButton");
const song1 = document.querySelectorAll(".child");
const image = document.querySelector(".scroll-images");
const songImg = document.querySelector(".songnavimg");
const songName = document.querySelector(".song-name");
const artistName = document.querySelector(".artist-name");
const mainHeading = document.querySelector(".main-heading");
const pause = document.querySelector(".pause");
const arr = [...song1];
console.log(arr);
const div = document.createElement("div");
const username = localStorage.getItem("username");
div.className = "name";
mainHeading.insertAdjacentElement("beforebegin", div);
const displayName = document.querySelector(".name");
displayName.textContent = `Welcome back !  ${username}`;
const array = [];
const preview = document.querySelector(".preview-btn");
let faChild;
// preview.addEventListener("click", function (e) {
//   e.preventDefault();
//   // window.stop();
//   window.location.href = "preview.html";
// });
// const songs = [];

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// anugrah progress bar js
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
localStorage.setItem("time", 0);

//anugrah volume kam zyada karne ki js
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the range input, audio player, and mute button
  const volumeControl = document.getElementById("volume-control");
  const song = document.getElementById("song");
  const muteButton = document.getElementById("mute-button");
  const fullButton = document.getElementById("full-button");

  // Set the initial volume of the audio player
  song.volume = volumeControl.value / 100;

  // Add an event listener to the range input
  volumeControl.addEventListener("input", function () {
    // Update the audio player's volume based on the range input's value
    song.volume = this.value / 100;
  });

  // Add an event listener to the mute button
  muteButton.addEventListener("click", function () {
    // Set the audio player's volume to 0 (mute)
    song.volume = 0;
    //icon change

    // Update the range input's value to 0 to reflect the mute state
    volumeControl.value = 0;
  });
  fullButton.addEventListener("click", function () {
    // Set the audio player's volume to 100
    song.volume = 1;
    //icon change

    // Update the range input's value to 0 to reflect the mute state
    volumeControl.value = 100;
  });
});
const audioSource = document.getElementById("audioSource");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Array of song file paths
const songs = [
  { songName: "despacito", songPath: "songs/despacito.mp3" },
  { songName: "Phele bhi Mein", songPath: "songs/phelebhimein.mp3" },
  { songName: "Desi Kalakaar", songPath: "songs/desikalakaar.mp3" },
  { songName: "Yaar Haryane Te", songPath: "songs/yaarharyanete.mp3" },
  { songName: "Let me Love You", songPath: "songs/letmeloveyou.mp3" },
  { songName: "Born to Shine", songPath: "songs/borntoshine.mp3" },
  { songName: "Tum hi ho", songPath: "songs/tumhiho.mp3" },
  { songName: "Same beef", songPath: "songs/samebeef.mp3" },
  { songName: "Peaches", songPath: "songs/peaches.mp3" },
  { songName: "Jalebi Baby", songPath: "songs/jalebibaby.mp3" },
  { songName: "Shape of You", songPath: "songs/shapeofyou.mp3" },
  { songName: "One Direction", songPath: "songs/onedirection.mp3" },
  { songName: "Baby", songPath: "songs/baby.mp3" },
  { songName: "Happier Than Ever", songPath: "songs/happierthanever.mp3" },
  { songName: "Tere Bin", songPath: "songs/terebin.mp3" },
  { songName: "Agar Tum Sath ho", songPath: "songs/agartumsathho.mp3" },
  { songName: "Sun raha hai na tu", songPath: "songs/sunrahahainatu.mp3" },
  { songName: "kun faya kun", songPath: "songs/kunfayakun.mp3" },
  { songName: "Tera Ban Jaunga", songPath: "songs/terabanjaunga.mp3" },
  { songName: "Luka Chuppi", songPath: "songs/lukachuppi.mp3" },
  { songName: "Lalkaara", songPath: "songs/lalkaara.mp3" },
  { songName: "Hass Hass", songPath: "songs/hasshass.mp3" },
  { songName: "So High", songPath: "songs/sohigh.mp3" },
  { songName: "Same Beef", songPath: "songs/samebeef.mp3" },
  { songName: "Blue eyes", songPath: "songs/blueeyes.mp3" },
  { songName: "Haryana Hood", songPath: "songs/haryanahood.mp3" },
  { songName: "Gypsy", songPath: "songs/gypsy.mp3" },
  { songName: "Chaska", songPath: "songs/chaska.mp3" },
  { songName: "So high", songPath: "songs/sohigh.mp3" },
  { songName: "Haryana Hood", songPath: "songs/haryanahood.mp3" },
  { songName: "Roots", songPath: "songs/roots.mp3" },
  { songName: "Loot Liya", songPath: "songs/lootliya.mp3" },
  { songName: "Choudhar Jaat ki", songPath: "songs/choudharjaatki.mp3" },
  { songName: "Dabya ni karde", songPath: "songs/dabyanikarde.mp3" },
  { songName: "Fortuner", songPath: "songs/fortuner.mp3" },
];

window.addEventListener("beforeunload", function (e) {
  c = false;
});
// Current song index
let currentSongIndex;

// Function to load and play a song by its index
function loadAndPlaySong(index) {
  audioSource.src = songs[index].songPath;
  song.load();
  song.play();
}

// Event listener for the Previous button
prevButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  if (!ctrlIcon.classList.contains("fa-pause")) {
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
  loadAndPlaySong(currentSongIndex);
});

// Event listener for the Next button
nextButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  if (!ctrlIcon.classList.contains("fa-pause")) {
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
  loadAndPlaySong(currentSongIndex);
});

// Load and play the first song initially
arr.forEach(function (value, index) {
  value.addEventListener("click", function (e) {
    const info = e.target.closest(".child");
    const data = info.dataset.song;
    currentSongIndex = songs.findIndex(
      (s) => s.songPath === `songs/${data}.mp3`
    );
    console.log(currentSongIndex);
    loadAndPlaySong(currentSongIndex);
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    // array.push(info);
    // // songs.push(info);
    // if (array.length >= 2) {
    //   // pauseMusic();
    //   if (array[0] != array[1]) {
    //     array[0].classList.remove("pause");
    //   }
    //   // const faChild = arr[0].querySelector("fa.solid");
    //   // faChild.classList.remove("fa-pause");
    //   // faChild.classList.add("fa-play");
    //   array.shift();
    //   console.log(array);
    // }
    // // console.log(info.childNodes);
    faChild = info.querySelector(".fa-solid");
    faChild.classList.add("fa-pause");
    faChild.classList.remove("fa-play");
    localStorage.setItem("song-name", data);
    // const image = info.dataset.img;
    const artist = info.dataset.name;
    localStorage.setItem("artist", artist);
    console.log(data);
    console.log(info);
    // if (info.classList.contains("pause")) {
    //   // pauseMusic();
    //   info.classList.remove("pause");
    //   faChild.classList.remove("fa-pause");
    //   faChild.classList.add("fa-play");
    // } else {
    //   // playMusic(`songs/${data}.mp3`);
    //   faChild.classList.add("fa-pause");
    //   faChild.classList.remove("fa-play");
    songImg.style.background = `url(songs/${data}.jpg)`;
    songImg.style.backgroundSize = "cover";
    songName.textContent = `${songs[currentSongIndex].songName}`;
    artistName.textContent = `${artist}`;

    //   //   mainName.textContent = `${data}`;
    //   //   mainArtist.textContent = `${artist}`;
    //   info.classList.add("pause");
    // }
    // pause.addEventListener("click", function () {
    //   console.log("hello");
    //   // pauseMusic();
    //   info.classList.remove("pause");
    //   faChild.classList.remove("fa-pause");
    //   faChild.classList.add("fa-play");
    // });
  });
});
const homebtn = document.querySelector(".home");
const browsebtn = document.querySelector(".browse");
const aboutbtn = document.querySelector(".about");
const home = document.querySelector(".himg");
const browse = document.querySelector(".bimg");
const about = document.querySelector(".aimg");
const main = document.querySelector(".main-container");
const homeContainer = document.querySelector(".home-container");
const aboutContainer = document.querySelector(".about-container");
const search = document.querySelector(".Searching");
homebtn.classList.add("active");
// main.style.display = "none";
// homeContainer.style.display = "flex";
// search.style.display = "none";
homebtn.addEventListener("click", function () {
  homebtn.classList.add("active");
  browsebtn.classList.remove("active");
  aboutbtn.classList.remove("active");
  main.style.display = "none";
  homeContainer.style.display = "flex";
  aboutContainer.style.display = "none";
  // search.style.display = "none";
});
browsebtn.addEventListener("click", function () {
  aboutbtn.classList.remove("active");
  browsebtn.classList.add("active");
  homebtn.classList.remove("active");
  main.style.display = "flex";
  homeContainer.style.display = "none";
  aboutContainer.style.display = "none";
  // search.style.display = "flex";
});
aboutbtn.addEventListener("click", function () {
  aboutbtn.classList.add("active");
  homebtn.classList.remove("active");
  browsebtn.classList.remove("active");
  main.style.display = "none";
  homeContainer.style.display = "none";
  aboutContainer.style.display = "flex";
});

const form = document.querySelector(".search-form");
const h1 = document.querySelectorAll(".heading-1");
const arr2 = [...h1];
const scrollDiv = document.querySelectorAll(".main-scroll-div");
const arr3 = [...scrollDiv];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const element = search.value;
  const found = songs.findIndex((s) => {
    return s.songName.toLowerCase() === element.toLowerCase();
  });
  console.log(found);
  const name = songs[found].songName.split(" ").join("").toLowerCase();
  console.log(name);
  const selected = arr.find((s) => s.dataset.song === name);
  arr.forEach((s) => (s.style.display = "none"));
  arr2.forEach((s) => (s.style.display = "none"));
  arr3.forEach((s) => (s.style.display = "none"));

  // h1.style.display = "none";
  const classMain = selected.closest(".main-scroll-div");
  classMain.style.display = "flex";
  selected.style.display = "flex";
  search.value = "";
  search.style.focus = "none";
});
window.addEventListener("click", function (e) {
  arr.forEach((s) => (s.style.display = "flex"));
  arr2.forEach((s) => (s.style.display = "flex"));
  arr3.forEach((s) => (s.style.display = "flex"));
});

// anugrah progress bar par click karne par play hone wale js
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
  faChild.classList.add("fa-pause");
  faChild.classList.remove("fa-play");
  localStorage.setItem("time", song.currentTime);
};
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    faChild.classList.add("fa-play");
    faChild.classList.remove("fa-pause");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    faChild.classList.add("fa-pause");
    faChild.classList.remove("fa-play");
  }
}
