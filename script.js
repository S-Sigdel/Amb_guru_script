document.addEventListener('keydown', function (event) {
  const videoPlayer = document.querySelector('video'); 

  if (videoPlayer) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      // Skip 10 seconds forward or backward
      const skipAmount = (event.key === 'ArrowRight') ? 10 : -10;
      videoPlayer.currentTime += skipAmount;
    } else if (event.key === ' ') {
      event.preventDefault(); 
      togglePlayPause(videoPlayer); 
    }
  }
});

// Function to toggle play/pause of the video
function togglePlayPause(videoPlayer) {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play(); 
  } else {
    videoPlayer.pause(); 
  }
}
