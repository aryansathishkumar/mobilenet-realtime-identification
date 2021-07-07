function preload()
{

}

function setup() {
  canvas = createCanvas(250, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.center()
  classifier = ml5.imageClassifier("MobileNet",modelloaded);
}

function draw()
{
  image(video, 0, 0, 250 ,250);
  classifier.classify(video, getresult);
}

function modelloaded()
{
  console.log(ml5.version,"model is loaded");
}

function getresult(error, result)
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(result);
    
    document.getElementById("object2").innerHTML = result[0].label;
    document.getElementById("accuracy2").innerHTML = result[0].confidence.toFixed(2)*100 + "%";
  }
}



