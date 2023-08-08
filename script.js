document.addEventListener('keydown', function (event) {
  const videoPlayer = document.querySelector('video'); // Replace 'video' with the actual selector for your video element

  if (videoPlayer) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      // Skip 10 seconds forward or backward
      const skipAmount = (event.key === 'ArrowRight') ? 10 : -10;
      videoPlayer.currentTime += skipAmount;
    } else if (event.key === ' ') {
      event.preventDefault(); // Prevent default space bar functionality
      togglePlayPause(videoPlayer); // Call the function to toggle play/pause
    }
  }
});

// Function to toggle play/pause of the video
function togglePlayPause(videoPlayer) {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play(); // Play the video
  } else {
    videoPlayer.pause(); // Pause the video
  }
}
