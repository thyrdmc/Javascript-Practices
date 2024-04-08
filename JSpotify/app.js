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

const volume = document.querySelector("#volume");
const volume_bar = document.querySelector("#volume-bar");

const ul = document.querySelector("ul");

const player = new MusicPlayer(soundtracks);

// Window Loaded 
window.addEventListener("load", () => {
    let soundtrack = player.getMusic();
    displayMusic(soundtrack);
    displayList(player.soundtracks);
    isPlayingNow();
})

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

let isMute = false; 
volume.addEventListener("click", () => {
    if(isMute){
        audio.muted = true;
        isMute=false;
        volume.classList = "fa-solid fa-volume-xmark";
        volume_bar.value = 0;
    }
    else{
        audio.muted = false;
        isMute=true;
        volume.classList = "fa-solid fa-volume-high";
        volume_bar.value = 100;

    }
});

volume_bar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100; // audio.volume value must be a number between 0 and 1
    if (value == 0){
        audio.muted = true;
        isMute=false;
        volume.classList = "fa-solid fa-volume-xmark";
    }
    else{
        audio.muted = false;
        isMute=true;
        volume.classList = "fa-solid fa-volume-high";
    }
});

audio.addEventListener("ended", () => {
    nextMusic();
})

// Functions

function displayMusic(soundtrack){
    title.innerText = soundtrack.getName();
    singer.innerText = soundtrack.singer;
    image.src = "img/" + soundtrack.image;
    audio.src = "mp3/" + soundtrack.file;
}

const prevMusic = () => {
    player.prev();
    let soundtrack = player.getMusic();
    displayMusic(soundtrack);
    playMusic();
    isPlayingNow();
}

const nextMusic = () => {
    player.next();
    let soundtrack = player.getMusic();
    displayMusic(soundtrack);
    playMusic();
    isPlayingNow();
}

const pauseMusic = () => { 
    container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();
}

const playMusic = () => {
    container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();
}

const calculateTime = (time) => {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    const _minute = minute < 10 ? `0${minute}` : `${minute}`;
    const _second = second < 10 ? `0${second}` : `${second}`;

    return `${_minute}:${_second}`;
}

const displayList = (list) => {
    for(let i=0; i<list.length; i++){
        let tag = `
            <li li-index='${i}' onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between align-items-center">
                <span>${list[i].getName()}</span>
                <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
                <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
            </li>
        `;

        ul.insertAdjacentHTML("beforeend", tag);

        let audioDuration = ul.querySelector(`#music-${i}`);
        let audioTag = ul.querySelector(`.music-${i}`);

        audioTag.addEventListener("loadeddata", () => {
            audioDuration.innerText = calculateTime(audioTag.duration);
        });
    }
}

const selectedMusic = (tag) => {
    player.index = tag.getAttribute("li-index");
    displayMusic(player.getMusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {
    for(let li of ul.querySelectorAll("li")){
        if(li.classList.contains("playing")){
            li.classList.remove("playing");
        }

        if(li.getAttribute("li-index") == player.index){
            li.classList.add("playing");
        }
    }
}