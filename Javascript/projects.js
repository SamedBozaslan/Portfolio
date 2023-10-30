let projectCard1 = document.getElementById('project-outside-card-1');
let projectCard2 = document.getElementById('project-outside-card-2');
let projectCard3 = document.getElementById('project-outside-card-3');

let videoProject1 = document.getElementById('videoProject1')
let videoProject2 = document.getElementById('videoProject2')
let videoProject3 = document.getElementById('videoProject3')

let button1 = document.getElementById('returnToPageButton1')
let button2 = document.getElementById('returnToPageButton2')
let button3 = document.getElementById('returnToPageButton3')

let projectOutsideCard1 = document.getElementById('projectInsideCardContainer1');
let projectOutsideCard2 = document.getElementById('projectInsideCardContainer2');
let projectOutsideCard3 = document.getElementById('projectInsideCardContainer3');


let closeProject = document.getElementsByClassName('goBackInsideCardToOutsideCard');




projectOutsideCard1.hidden = true;
projectOutsideCard2.hidden = true;
projectOutsideCard3.hidden = true;


projectCard1.onclick = function(){
    projectOutsideCard1.hidden = false;
}

projectCard2.onclick = function(){
    projectOutsideCard2.hidden = false;
}

projectCard3.onclick = function(){
    projectOutsideCard3.hidden = false;
}


closeProject[0].onclick = function (){
    projectOutsideCard1.hidden = true;
    videoProject1.pause();
    videoProject1.currentTime = 0;
}

button1.onclick = function (){
    projectOutsideCard1.hidden = true;
    videoProject1.pause();
    videoProject1.currentTime = 0;
}

closeProject[1].onclick = function (){
    projectOutsideCard2.hidden = true;
    videoProject2.pause();
    videoProject2.currentTime = 0;
}

button2.onclick = function (){
    projectOutsideCard2.hidden = true;
    videoProject2.pause();
    videoProject2.currentTime = 0;
}

closeProject[2].onclick = function (){
    projectOutsideCard3.hidden = true;
    videoProject3.pause();
    videoProject3.currentTime = 0;
}

button3.onclick = function (){
    projectOutsideCard3.hidden = true;
    videoProject3.pause();
    videoProject3.currentTime = 0;
}