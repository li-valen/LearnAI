
async function loadModel() {
  const model = await cocoSsd.load();
  return model;
}

async function detectObjects(video, model) {
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

    async function main() {
      // Load the model
      const model = await loadModel();

      // Get the video element
      const video = document.getElementById('video');

      // Get webcam stream
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          // Once the webcam stream is obtained, set it as the video source
          video.srcObject = stream;

          // Once the video stream is loaded, start object detection
          video.onloadedmetadata = function(e) {
            detectObjects(video, model);
          };
        })
        .catch(function(err) {
          console.log("Error accessing webcam: " + err);
        });
    }

    // Start the main function
    main();
    close()

    function close() {
      let closeButton_ = document.getElementById("stockClose");
      closeButton_.addEventListener("click", () => {
        video.srcObject.getTracks().forEach(function(track) {
          track.stop();
        });
        video.srcObject = null;
    });
    }


    

    




$('#objectDetectionButton').on('click', function () {
    $('.center').fadeIn(500);
    $(this).fadeOut(500);
})

$('#close').on('click', function () {
    $('.center').fadeOut(500);
    $('.but').fadeOut(500);
    $('#objectDetectionButton').fadeIn(500);
})

// Stock Prediction Button
$('#stockPredictionButton').on('click', function () {
    $('.stockCenter').fadeIn(500);
    $(this).fadeOut(500);
})

$('#stockClose').on('click', function () {
    $('.stockCenter').fadeOut(500);
    $('#stockPredictionButton').fadeIn(500);
})

$('#stableDiffusionButton').on('click', function () {
  $('.diffusionCenter').fadeIn(500);
  $(this).fadeOut(500);
})

$('#diffusionClose').on('click', function () {
  $('.diffusionCenter').fadeOut(500);
  $('#stableDiffusionButton').fadeIn(500);
})









// IMAGE CLASSIFICATION
async function classifyImage() {
  // Get the input image file
  const inputElement = document.getElementById('imageInput');
  const inputImageFile = inputElement.files[0];
  if (!inputImageFile) {
      alert('Please select an image.');
      return;
  }

  // Load the MobileNet model
  const model = await mobilenet.load();

  // Read the input image file as an image element
  const reader = new FileReader();
  reader.onload = async (event) => {
      const img = new Image();
      img.onload = async () => {
          // Convert the image to a TensorFlow.js tensor
          const imageTensor = tf.browser.fromPixels(img).toFloat().expandDims();
          
          // Pre-process the image (normalize pixel values to [0, 1] and resize to 224x224)
          const preprocessedImageTensor = tf.image.resizeBilinear(imageTensor, [224, 224]).div(255);

          // Perform image classification
          const predictions = await model.classify(preprocessedImageTensor);

          // Display the classification results
          displayResults(predictions);

          // Dispose tensors to release memory
          imageTensor.dispose();
          preprocessedImageTensor.dispose();
      };
      img.src = event.target.result;
  };
  reader.readAsDataURL(inputImageFile);
}

function displayResults(predictions) {
  // Get the output text element
  const outputTextElement = document.getElementById('outputText');
  
  // Clear previous results
  outputTextElement.innerHTML = '';

  // Display the classification results
  predictions.forEach(prediction => {
      const { className, probability } = prediction;
      const probabilityPercentage = (probability * 100).toFixed(2);
      const resultText = `${className}: ${probabilityPercentage}%`;
      const resultElement = document.createElement('div');
      resultElement.textContent = resultText;
      outputTextElement.appendChild(resultElement);
  });
}