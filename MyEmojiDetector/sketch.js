let WIDTH, HEIGHT
// Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/TSaRxrDOr/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
    thinking = loadImage("thinking.png")
    sunglasses = loadImage("sunglasses.png")
    peace = loadImage("peace.png")
    sad = loadImage("sad.png")
    thumbsup = loadImage("thumbsup.png")
    tongueout = loadImage("tongueout.png")
  }

  function setup() {
    createCanvas(620, 520);
    // Create the video
    video = createCapture(VIDEO);
    video.size(160, 120);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
    WIDTH = 180
    HEIGHT = 100
  }

  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 10, 10);

    // Draw the label
    fill(255);
    textSize(20);
    textAlign(CENTER,CENTER);
    fill(255,204,51)
    text("Label: "+label, 90, 150);
    textSize(50)
    textStyle(BOLD)
    text("My Emoji Detector", 230, height-30);
     if(label == 'peace'){
      peace.resize(width*2/3,height*2/3)
      image(peace,WIDTH,HEIGHT)
    } else if(label == 'sad'){
      sad.resize(width*2/3,height*2/3)
      image(sad,WIDTH,HEIGHT)
    } else if(label == 'sunglasses'){
      sunglasses.resize(width*2/3,height*2/3)
      image(sunglasses,WIDTH,HEIGHT)
    } else if(label == 'thinking'){
      thinking.resize(width*2/3,height*2/3)
      image(thinking,WIDTH,HEIGHT)
    } else if(label == 'thumbsup'){
      thumbsup.resize(width*2/3,height*2/3)
      image(thumbsup,WIDTH,HEIGHT)
    } else if(label == 'tongueout'){
      tongueout.resize(width*2/3,height*2/3)
      image(tongueout,WIDTH,HEIGHT)
  }
  }
  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }