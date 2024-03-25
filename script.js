// Get temperature display element
const temperatureDisplay = document.getElementById('temperatureDisplay');

// Initial temperature value
let temperature = 78;

// Get song name display element
const songNameDisplay = document.getElementById('songName');

// List of funny song names
const funnySongNames = [
    "We Are NOT Gonna Die Today",
    "Burnt To A Crisp In Space",
    "Doomed (aka The Ship Explosion Cha-Cha)",
    "This Debris (Is Not For Me)",
    "Lazer Fire In the key of Fdim5",
    "Yes I Totally Know How To Fire This Thing"
];

let isPlaying = false;
let currentSongIndex = 0;

// Play/Pause button click event
document.getElementById('playPause').addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        songNameDisplay.textContent = getRandomSongName();
        document.getElementById('playPause').innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        isPlaying = false;
        document.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i> Play';
    }
});

// Stop button click event
document.getElementById('stop').addEventListener('click', () => {
    isPlaying = false;
    document.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i> Play';
    songNameDisplay.textContent = "Press Play to Maybe Survive...?";
});

// Next button click event
document.getElementById('nextTrack').addEventListener('click', () => {
    if (isPlaying) {
        songNameDisplay.textContent = getRandomSongName();
    }
});

// Function to get a random song name
const getRandomSongName = () => {
    const randomIndex = Math.floor(Math.random() * funnySongNames.length);
    return funnySongNames[randomIndex];
};

// Update temperature display function
const updateTemperatureDisplay = () => {
    temperatureDisplay.textContent = `${temperature}`;
};

// Increase temperature button click event
document.getElementById('increaseTemp').addEventListener('click', () => {
    temperature++;
    updateTemperatureDisplay();
});

// Decrease temperature button click event
document.getElementById('decreaseTemp').addEventListener('click', () => {
    temperature--;
    updateTemperatureDisplay();
});

// Initialize temperature display
updateTemperatureDisplay();
