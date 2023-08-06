document.addEventListener('keydown', function (event) {
  const videoPlayer = document.querySelector('video'); // Replace 'video' with the actual selector for your video element

  if (event.key === 'ArrowRight') {
    // Skip 10 seconds forward
    if (videoPlayer) {
      videoPlayer.currentTime += 10;
    }
  } else if (event.key === 'ArrowLeft') {
    // Skip 10 seconds backward
    if (videoPlayer) {
      videoPlayer.currentTime -= 10;
    }
  }
});


  // Function to click the button
  function clickButton() {
    const button = document.querySelector('.vjs-play-control'); // Select the button by its class
    if (button) {
      button.click(); // Simulate a click on the button
    }
  }

  // Event listener for the space bar key press
  document.addEventListener('keydown', function (event) {
    if (event.key === ' ') { // ' ' represents the space bar key
      event.preventDefault(); // Prevent default space bar functionality
      clickButton(); // Call the function to click the button
    }
  });