screen_width = 0
screen_height = 0
apple = " "
speak_data = " "
to_number = " "
Apple_image = " "
Recognition = window.webkitSpeechRecognition
Speech_rec = new Recognition()
function setup(){
    Canvas = createCanvas(900,800)
}
function preload(){
    Apple_image = loadImage("apple.png")
}
function Start(){
    document.getElementById("Command").innerHTML = "Started Listening"
    Speech_rec.start()
}
Speech_rec.onresult = function(event){
    console.log(event)
    Content = event.results[0][0].transcript
    document.getElementById("Command").innerHTML = "Draw"+Content+"Apple"
    to_number = Number(Content)
    if(Number.isInteger(to_number)){
        document.getElementById("Command").innerHTML = "Started Drawing"+Content+"Apple"
        apple = "set"
    }
}
function draw(){
    if(apple == "set"){
        for(i=1;i<=to_number;i++){
            x = Math.floor(Math.random()*800)
            y = Math.floor(Math.random()*700)
            image(Apple_image,x,y,50,50)
        }
        apple = " "
    }
}