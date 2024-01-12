const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');

playPauseButton.addEventListener('click', togglePlayPause);
volumeControl.addEventListener('input', setVolume);
video.addEventListener('click', togglePlayPause);

function togglePlayPause() {
    video.paused ? playVideo() : pauseVideo();
}

function playVideo() {
    video.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    video.classList.remove('paused');
}

function pauseVideo() {
    video.pause();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    video.classList.add('paused');
}

function setVolume() {
    video.volume = volumeControl.value;
}
