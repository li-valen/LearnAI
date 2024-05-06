// Jquery Background Move
$("body").mousemove(function (a) {
  var mouseX = (a.pageX * -1) / 20;
  var mouseY = (a.pageY * -1) / 25;
  $("#background-image").css(
    "background-position",
    (mouseX) + "px " + (mouseY) + "px"
  );
});

// Select Elements
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
  modal1.style.animation = "fadeIn2 2.7s ease-in";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// Retrieve Elements
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
    startCamera();
    modal2.style.animation = "fadeIn2 2.7s ease-in";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
    stopCamera();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Retrieve Elements
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";

  loadQues();
  modal3.style.animation = "fadeIn2 2.7s ease-in";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
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
      ctx.strokeStyle = '#006aff';
      ctx.fillStyle = 'white';
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
    // Once we get the webcam, set it as the video source
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
}

fileInput.onchange = () => {
  let uploadButton = document.getElementById("fileInput");
  let chosenImage = document.getElementById('chosen-image');
  let fileName = document.getElementById("file-name");
  let reader = new FileReader();
  if (uploadButton.files[0]) {
      reader.readAsDataURL(uploadButton.files[0]);
      reader.onload = () => {
          chosenImage.setAttribute("src", reader.result);
      }
      fileName.textContent = uploadButton.files[0].name;
  }
}
    
// IMAGE CLASSIFICATION
async function classifyImage() {
  const fileInput = document.getElementById('fileInput');
  const defaultPhoto = document.getElementById('chosen-image').src
  const file = fileInput.files[0] ?? defaultPhoto;
  if (!file) {
      alert('Please select an image file.');
      return;
  }

  // Display the classification results
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '<h2 id="classificationResults">Classification Results:</h2>';
  const loadingState = document.getElementById("resultLoader");
  loadingState.style.display = "block";

  // Load MobileNet model
  const model = await mobilenet.load();
  // Read the selected image file
  const reader = new FileReader();
  reader.onload = async function(event) {
      // Create an HTML image element
      const img = new Image();
      img.onload = async function() {
          // Classify the image
          const predictions = await model.classify(img);
          predictions.forEach(prediction => {
              outputDiv.innerHTML += `<p id="outputProb">${prediction.className}: ${Math.round(prediction.probability * 100)}%</p>`;
          });
      };
      img.src = event.target.result;
  };
  reader.readAsDataURL(file);
  loadingState.style.display = "none";
}

// Adaptive Quiz
const ques = document.getElementById("questions")
const Quiz = [
    {question: 'What are some uses of AI?', incorrectAnswers: ['Fishing', 'Eating', 'Drinking'], correctAnswer: 'Navigation', rewardPoints: 1},
    {question: 'What is the structure of AI?', incorrectAnswers: ['Basic', 'Lower', 'Top-Down'], correctAnswer: 'Hierarchical', rewardPoints: 2},
    {question: 'Which is a key component of AI?', incorrectAnswers: ['Dots', 'Nets', 'Tangential Learning'], correctAnswer: 'Gradient Descent', rewardPoints: 3},
    {question: 'What are some applications of machine learning?', incorrectAnswers: ['Swimming', 'Cooking', 'Reading'], correctAnswer: 'Fraud detection', rewardPoints: 1},
    {question: 'How is deep learning organized?', incorrectAnswers: ['Horizontal', 'Random', 'Flat'], correctAnswer: 'Layered', rewardPoints: 2},
    {question: 'Which technique is commonly used in natural language processing?', incorrectAnswers: ['Skipping Stones', 'Picking Flowers', 'Balloon Making'], correctAnswer: 'Word Embedding', rewardPoints: 3},
    {question: 'What is a popular method for image recognition?', incorrectAnswers: ['Whistling', 'Dancing', 'Painting'], correctAnswer: 'Convolutional Neural Networks', rewardPoints: 1},
    {question: 'What is an example of a reinforcement learning environment?', incorrectAnswers: ['Dreamland', 'Candyland', 'Wonderland'], correctAnswer: 'OpenAI Gym', rewardPoints: 2},
    {question: 'Which technique is used for making decisions under uncertainty?', incorrectAnswers: ['Random Guessing', 'Eeny, meeny, miny, moe', 'Rolling Dice'], correctAnswer: 'Probabilistic Inference', rewardPoints: 3},
    {question: 'What is a common task in natural language processing?', incorrectAnswers: ['Skiing', 'Skydiving', 'Surfing'], correctAnswer: 'Sentiment Analysis', rewardPoints: 1},
    {question: 'Which method is used for unsupervised learning?', incorrectAnswers: ['Following Instructions', 'Coloring Books', 'Counting Sheep'], correctAnswer: 'Clustering', rewardPoints: 2},
    {question: 'What is a characteristic of artificial neural networks?', incorrectAnswers: ['Wings', 'Tails', 'Fins'], correctAnswer: 'Learning from data', rewardPoints: 3},
    {question: 'Which technique is used for sequence prediction?', incorrectAnswers: ['Reading Tea Leaves', 'Crystal Ball Gazing', 'Tarot Card Reading'], correctAnswer: 'Recurrent Neural Networks', rewardPoints: 1},
    {question: 'What is an application of AI in healthcare?', incorrectAnswers: ['Bungee Jumping', 'Ski Jumping', 'Base Jumping'], correctAnswer: 'Diagnosis Assistance', rewardPoints: 3},
    {question: 'Which technique is used for data clustering?', incorrectAnswers: ['Bubble Bathing', 'Cloud Watching', 'Puddle Jumping'], correctAnswer: 'K-Means', rewardPoints: 1},
    {question: 'What is an application of AI in finance?', incorrectAnswers: ['Skydiving', 'Bungee Jumping', 'Surfing'], correctAnswer: 'Algorithmic Trading', rewardPoints: 1},
];
const randomSubset = getRandomSubset(Quiz, 5);
console.log(randomSubset);

let currQuestion = 0
let score = 0
 
function getRandomSubset(array, subsetSize) {
  const randomSubset = [];
  const arrayLength = array.length;
  while (randomSubset.length < subsetSize) {
    const randomIndex = Math.floor(Math.random() * arrayLength);
    if (!randomSubset.includes(array[randomIndex])) {
      randomSubset.push(array[randomIndex]);
    }
  }
  return randomSubset;
}

function loadQues() {
    const opt = document.getElementById("options");
    let currentQuestion = randomSubset[currQuestion].question;

    if (currentQuestion.indexOf('"') > -1) {
        currentQuestion = currentQuestion
            .replace(/"/g, '\"');
    }
    if (currentQuestion.indexOf('"') > -1) {
        currentQuestion = currentQuestion
            .replace(/&#039;/g, '\'');
    }
    ques.innerText = currentQuestion;
    opt.innerHTML = ""
    const correctAnswer = randomSubset[currQuestion]
        .correctAnswer;
    const incorrectAnswers = randomSubset[currQuestion]
        .incorrectAnswers;
    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);
    options.forEach((option) => {
        if (option.indexOf('"') > -1) {
            option = option.replace(/"/g, '\"');
        }
        if (option.indexOf('"') > -1) {
            option = option.replace(/'/g, '\'');
        }
        const choicesdiv = document.createElement("choiceContainer");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("quizOptionLabel");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = option;
        choiceLabel.textContent = option;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    });
}
 
function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out 
    of ${randomSubset.length}.`;
    totalScore.innerHTML += "<h3>All Answers</h3>"
    randomSubset.forEach((el, index) => {
        totalScore.innerHTML += `<p>${index + 1}.
         ${el.correctAnswer}</p>`
    })
}
 
function nextQuestion() {
    if (currQuestion < randomSubset.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("options")?.remove()
        document.getElementById("questions")?.remove()
        document.getElementById("quizButton")?.remove()
        loadScore();
    }
}
 
//Progress Bar
let progressBarPercentage = 100;
let correctAnswerCount = 0;
function checkAns() {
    const selectedAns = document.
        querySelector('input[name="answer"]:checked').value;
    if (selectedAns === randomSubset[currQuestion].correctAnswer) {
        score++;
        correctAnswerCount++;
        if (progressBarPercentage < 100) {
            progressBarPercentage = (correctAnswerCount / (currQuestion + 1)) * 100;
            setProgress(Math.round(progressBarPercentage));
        }
        nextQuestion();
    } else {
        if (progressBarPercentage > 0) {
            progressBarPercentage = (correctAnswerCount / (currQuestion + 1)) * 100;
            setProgress(Math.round(progressBarPercentage));
        }
        nextQuestion();
    }
}

function setProgress(percentage) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percentage + '%';
    const progressBarPercentage = document.getElementById('progress-percentage');
    progressBarPercentage.innerText = percentage + '%'
}