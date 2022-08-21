https://teachablemachine.withgoogle.com/models/nYqWI_It-/

function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nYqWI_It-/model.json", modelready);

}

function modelready(){
    classifier.classify(gotResults)
}

function gotResults(error,result){
    console.log(result);
}