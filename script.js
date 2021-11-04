const answers = ["No doubt", "Ask later", "I think not", "Probably not", "Yes", "Very likely", "No", "Chances are good", "Exactly yes", "Not now", "Unclear "," I think not "," There are doubts "," Unclear "," Unclear "," Soon "];
function Drop(){
    document.getElementById("ask").value = ""
    document.getElementById("prediction").innerHTML = "Ask the ball a question you are interested in";
    
}
let content = document.createElement('div');
content.className = "content";

let question = document.createElement('div');
question.className = "question";

let myInput = document.createElement('input');
myInput.setAttribute('type','text');
myInput.className = "text";
myInput.id = "ask";

let bar = document.createElement('span');
bar.className = "bar";
bar.id = "bar";

let ball = document.createElement('div');
ball.className = "ball";
ball.id = "ball"

let prediction = document.createElement('div');
prediction.className = "prediction";
prediction.id = "prediction";

let predictionLine = document.createElement('p');
predictionLine.className = "predictionLine";
predictionLine.innerText = "Ask the ball a question you are interested in";

let body = document.querySelector('body');

body.appendChild(content);
content.appendChild(question);
question.appendChild(myInput);
question.appendChild(bar);
content.appendChild(ball);
ball.appendChild(prediction);
prediction.appendChild(predictionLine);

document.getElementById("ask").placeholder = "Type here your question";

document.getElementById('ball').onclick =function(){
     document.getElementById("ask").placeholder = "Type here your question";
    if ( document.getElementById("ask").value == "" || document.getElementById("ask").value.indexOf("?") == -1 ){
        alert ( "Please fill input with a question to the magic ball with '?'" );
        document.getElementById("ask").style.border = "4px solid red";
        document.getElementById("ask").placeholder = "Fill in this field";
        document.querySelector(".bar").style.width = "528px";
        }
        else{   
        document.getElementById("ask").style.border = "none";
        document.getElementById("ask").placeholder = "Type here your question"; 
        let anim = document.getElementById('ball');
        anim.classList.add('shakeAnim');
        setTimeout(function(){anim.classList.remove('shakeAnim');}, 1000);
let random = Math.floor(Math.random() * answers.length);

document.getElementById("prediction").innerHTML = answers[random];
document.getElementById("prediction").style.animation = "text 2s ease";
setTimeout(Drop, 3000);

}
}