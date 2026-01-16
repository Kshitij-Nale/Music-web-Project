console.log("Welcome to Spotify");

// Create Audio Object
let audioElement = new Audio('songs/1.mp3');
audioElement.volume = 0.4; //

// Initialization of Variables

let songIndex = 0; 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let volumeBar = document.getElementById('volumeBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "A sky full of stars",  filepath: "songs/1.mp3", coverPath : "covers/1.jpeg"},

    {songName: "I think they Call this Love", filepath: "songs/2.mp3", coverPath: " covers/2.jpeg"},

    {songName: "Can't Help falling in Love -Elvis Presley",  filepath: "songs/3.mp3", coverPath: "covers/3.jpeg"}, 

    {songName: "Yellow - Coldplay", filepath:  "songs/4.mp3", coverPath: "covers/4.jpeg"},

    {songName: "Sparks - Coldplay", filepath: "songs/5.mp3", coverPath: "covers/5.jpeg"},

    {songName: "Untangled Love - Brandon  Flowers", filepath : "songs/6.mp3", coverPath: "covers/6.jpeg"},

    {songName: "Piano Man - Billy Joel", filepath: "songs/7.mp3", coverPath: "covers/7.jpeg"},

    {songName: "Up&Up", filepath: "songs/8.mp3", coverPath: "covers/8.jpeg"},

    {songName: "Adventure of a Lifetime", filepath : "songs/9.mp3", coverPath: "covers/9.jpeg"},

    {songName: " Viva La Vida - Coldplay", filepath: "songs/10.mp3", coverPath: "covers/10.jpeg"},

];


songItems.forEach((element, i) => {
    if(songs[i]) {
        element.querySelector("img").src = songs[i].coverPath;
        element.querySelector(".songName").innerText = songs[i].songName;
    }
});

//individual song play buttons to show current playing song
const updateSongItemButtons = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
        if(i === songIndex) {
            // Current song
            if(!audioElement.paused) {
                element.classList.remove('fa-circle-play');
                element.classList.add('fa-circle-pause');
            } else {
                element.classList.remove('fa-circle-pause');
                element.classList.add('fa-circle-play');
            }
        } else {
        
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        }
    });
};



// Play/Pause functionality
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Update progress bar 
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    myProgressBar.style.setProperty('--progress', progress + '%');
});

// Seeking  functionality
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Volume control functionality
volumeBar.addEventListener('input', () => {
    audioElement.volume = volumeBar.value / 100;
});


// Reset all play button
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};


// Individual play buttons
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        const clickedIndex = parseInt(e.target.id) - 1;
        
        
        if(clickedIndex === songIndex) {
            if(audioElement.paused) {
                audioElement.play();
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                gif.style.opacity = 1;
            } else {
                audioElement.pause();
                e.target.classList.remove('fa-circle-pause');
                e.target.classList.add('fa-circle-play');
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
                gif.style.opacity = 0;
            }
        } else {
        
            makeAllPlays();
            songIndex = clickedIndex;
            
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            
            audioElement.src = songs[songIndex].filepath;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
    });
});


// Next button
document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    
    makeAllPlays();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

// Previous button
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1; 
    }
    
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    
    makeAllPlays();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});