const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const current_time = document.querySelector("#current-time");
const progress_bar = document.querySelector("#progress-bar");

const player = new MusicPlayer(soundtracks);

//  Window Loaded 
window.addEventListener("load", () => {
    let soundtrack = player.getMusic();
    displayMusic(soundtrack);

})

function displayMusic(soundtrack){
    title.innerText = soundtrack.getName();
    singer.innerText = soundtrack.singer;
    image.src = "img/" + soundtrack.image;
    audio.src = "mp3/" + soundtrack.file;
}

// Events 

play.addEventListener("click", () => {
    const isPlay = container.classList.contains("playing");
    isPlay ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => {
    prevMusic();
});

next.addEventListener("click", () => {
    nextMusic();
});

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progress_bar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progress_bar.value = Math.floor(audio.currentTime);
    current_time.textContent = calculateTime(progress_bar.value);
});

progress_bar.addEventListener("input", () => {
    current_time.textContent = calculateTime(progress_bar.value);
    audio.currentTime = progress_bar.value;
});
// Functions

const prevMusic = () => {
    player.prev();
    let soundtrack = player.getMusic();
    displayMusic(soundtrack);
    playMusic();
}

const nextMusic = () => {
    player.next();
    let soundtrack = player.getMusic();
    displayMusic(soundtrack);
    playMusic();

}

const pauseMusic = () => { 
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

const playMusic = () => {
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}

const calculateTime = (time) => {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    const _minute = minute < 10 ? `0${minute}` : `${minute}`;
    const _second = second < 10 ? `0${second}` : `${second}`;

    return `${_minute}:${_second}`;
}