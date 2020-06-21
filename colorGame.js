var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickRandomColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var easyButton=document.getElementById("easyBtn");
var hardButton=document.getElementById("hardBtn");

resetButton.addEventListener("click",function(){
    //generate all new random colors
    colors=generateRandomColors(numSquares);
    //pick a new random color
    pickedColor=pickRandomColor();
    this.textContent="New Colors";
    messageDisplay.textContent="";
    //change color display to match new color
    colorDisplay.textContent = pickedColor;
    //change color of spaces
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
});

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
    h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
    //add initial colors to squares
    squares[i].style.backgroundColor=colors[i];
    //add event listener to squares
    squares[i].addEventListener("click",function(){
        //grab color of the picked square
        clickedColor=this.style.backgroundColor;
        //compare with the correct color
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct!";
            resetButton.textContent="Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try again!";
        }
    });
}

function generateRandomColors(num){
    //create a array
    var arr=[];
    //get random color and push into array
    for(i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        //change color to match the given color
        squares[i].style.backgroundColor=color;
    }
}

function pickRandomColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function randomColor(){
    //pick a random color for red from 0 to 255
    var r=Math.floor(Math.random()*256);
    //pick a random color for green from 0 to 255
    var g=Math.floor(Math.random()*256);
    //pick a random color for blue from 0 to 255
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}


