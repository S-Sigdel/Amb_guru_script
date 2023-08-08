document.addEventListener('keydown', function (event) {
  const videoPlayer = document.querySelector('video'); // Replace 'video' with the actual selector for your video element

  // Skip 10 seconds forward or backward
  if (videoPlayer && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
    const skipAmount = (event.key === 'ArrowRight') ? 10 : -10;
    videoPlayer.currentTime += skipAmount;
  } else if (event.key === ' ') {
    event.preventDefault(); // Prevent default space bar functionality
    clickButton(); // Call the function to click the button
  }
});

// Function to click the play button
function clickButton() {
  const playButton = document.querySelector('.vjs-play-control'); // Select the button by its class
  if (playButton) {
    playButton.click(); // Simulate a click on the play button
  }
}
