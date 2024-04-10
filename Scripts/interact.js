$("body").mousemove(function (a) {
  var mouseX = (a.pageX * -1) / 20;
  var mouseY = (a.pageY * -1) / 25;
  $("#background-image").css(
    "background-position",
    mouseX + "px " + mouseY + "px"
  );
});


let videoStream;

// Load the COCO-SSD model
async function loadModel() {
  const model = await cocoSsd.load();
  return model;
}

// Function to perform object detection on each frame of the video
async function detectObjects(video, model) {
  // Get the video element and canvas element
  const videoElement = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size to match video size
  canvas.width = videoElement.width;
  canvas.height = videoElement.height;

  // Perform object detection on each frame
  async function detectFrame() {
    const predictions = await model.detect(videoElement);

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bounding boxes around detected objects
    predictions.forEach(prediction => {
      ctx.beginPath();
      ctx.rect(...prediction.bbox);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
      ctx.stroke();
      ctx.fillText(`${prediction.class} (${Math.round(prediction.score * 100)}%)`, prediction.bbox[0], prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10);
    });

    requestAnimationFrame(detectFrame);
  }

  // Start object detection
  detectFrame();


}

// Function to start the camera
async function startCamera() {
  $(".video").fadeIn(500);

  // Get the video element
  const video = document.getElementById('video');


  try {
    // Get webcam stream
    videoStream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Once the webcam stream is obtained, set it as the video source
    video.srcObject = videoStream;

    // Once the video stream is loaded, start object detection
    video.onloadedmetadata = async function(e) {
      const model = await loadModel();
      detectObjects(video, model);
    };
  } catch (err) {
    console.log("Error accessing webcam: " + err);
  }
}

// Function to stop the camera
function stopCamera() {
  if (videoStream) {
    const tracks = videoStream.getTracks();
    tracks.forEach(track => track.stop());
  }

  $(".video").fadeOut(500);
  document.getElementById('videoContainer').style.display = 'none';

}


    







// IMAGE CLASSIFICATION
async function classifyImage() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (!file) {
      alert('Please select an image file.');
      return;
  }

  // Load the MobileNet model
  const model = await mobilenet.load();

  // Read the selected image file
  const reader = new FileReader();
  reader.onload = async function(event) {
      // Create an HTML image element
      const img = new Image();
      img.onload = async function() {
          // Classify the image
          const predictions = await model.classify(img);

          // Display the classification results
          const outputDiv = document.getElementById('output');
          outputDiv.innerHTML = '<h2 id="classificationResults">Classification Results:</h2>';
          predictions.forEach(prediction => {
              outputDiv.innerHTML += `<p id="outputProb">${prediction.className}: ${Math.round(prediction.probability * 100)}%</p>`;
          });
      };
      img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}
