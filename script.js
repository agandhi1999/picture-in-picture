const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream, pass to video element and then play.

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata  = () =>  { // videoElement.onloadeddata becomes true if finished loading
            videoElement.play();
        }
    } catch (error) {
        // Catch Errors
        console.log('whoops, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

selectMediaStream();