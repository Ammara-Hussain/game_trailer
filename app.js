// Select elements
const btn = document.querySelector('.btn');
const closeIcon = document.querySelector('.close-icon');
const trailerContainer = document.querySelector('.trailer-container');

let player; // YouTube player object

// ✅ Must use EXACT name (YouTube API calls this automatically)
function onYouTubeIframeAPIReady() {
    player = new YT.Player("myframe");
}

// Show trailer and play video on button click
btn.addEventListener('click', () => {
    trailerContainer.classList.remove("active");
    if (player && player.playVideo) {
        player.playVideo();
    }
});

// Hide trailer and stop video on close
closeIcon.addEventListener('click', () => {
    trailerContainer.classList.add("active");
    if (player && player.pauseVideo) {
        player.pauseVideo();
        player.seekTo(0); // Rewind
    }
});
