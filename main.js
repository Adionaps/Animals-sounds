var dog=0
var cat=0


function Start_classification() {
    navigator.mediaDevices.getUserMedia({ audio: true }); classifier =
        ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oIcJ1Mtp8/model.json',
            modelReady);
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error,results) {
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("result_label").innerHTML="I can hear- "+ results[0].label
    document.getElementById("result_confidence").innerHTML="Accuracy- "+ (results[0].confidence*100).toFixed(2)+"%"
random_r=Math.floor(Math.random()*255)+1
random_g=Math.floor(Math.random()*255)+1
random_b=Math.floor(Math.random()*255)+1
document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")"
document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")"
img1=document.getElementById("le")

if(results[0].label == "Cat") {
    img1.src= "Cat.jpeg"
   
}
else if(results[0].label == "Dog") {
    img1.src= "Dog.jpeg"
    
}
else {
    img1.src= "Listening ear.png"
  
}
}

}


