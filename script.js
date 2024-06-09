// Declaring DOM Variables for Manipulation
const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// When Start button is Clicked
// A Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // Using the Screen Capture API capture screen contents
    const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // Stores data from getDisplayMedia into mediaStream
    videoElement.srcObject = mediaStream; // assigns stored data into src object in video element
    // play video after loading the video meta data
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    // Handle Error
    console.log(`Oooops something went wrong: ${error}`);
  }
}

// Event Listener to trigger Picture in Picture
button.addEventListener("click", async () => {
  // Using Async as function needs to run parallel/same time browser loads
  // Disable button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
