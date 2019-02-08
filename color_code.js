var numberOfGames = 6;

var colors = generateRandomColors(numberOfGames);

var square_box = document.querySelectorAll(".square");

var choosen_color = document.querySelector("#colorpicker").textContent = colors[Math.floor(Math.random()*numberOfGames)]; //color which the user needs to find.

var result = document.querySelector("#result");

var h1 = document.querySelector("h1");

var resetColors = document.querySelector("#newColors");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

hardBtn.classList.add("selected");

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfGames = 6;

    colors = generateRandomColors(numberOfGames);
    choosen_color = document.querySelector("#colorpicker").textContent = colors[Math.floor(Math.random()*numberOfGames)];

    for(var i =0;i<square_box.length;i++){
        square_box[i].style.backgroundColor = colors[i];
        square_box[i].style.display = "block";
    }
});

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");

    numberOfGames = 3;

    colors = generateRandomColors(numberOfGames);
    choosen_color = document.querySelector("#colorpicker").textContent = colors[Math.floor(Math.random()*numberOfGames)];

    for(var i =0;i<square_box.length;i++){
        if(colors[i]){
            square_box[i].style.backgroundColor = colors[i];
            square_box[i].style.display = "block";
        }else{
            square_box[i].style.display = "none";
        }
        
    }

});

gameSetting();

resetColors.addEventListener("click",function(){
    colors = generateRandomColors(numberOfGames);

    choosen_color = document.querySelector("#colorpicker").textContent = colors[Math.floor(Math.random()*numberOfGames)];

    gameSetting();

    result.textContent = "";
    h1.style.backgroundColor = "steelblue";
    this.textContent = "New Colors";
});

function gameSetting(){
    for(var i=0;i<square_box.length;i++){
        square_box[i].style.backgroundColor = colors[i];
    
        square_box[i].addEventListener("click",function(){
            var selected_color = this.style.backgroundColor; //color chosen by the user
            if(choosen_color != selected_color){
                console.log("wrong color");
                this.style.backgroundColor = "#232323";
                result.textContent = "Try Again";
            }else{
                console.log("correct color");
                changeColors();
                h1.style.backgroundColor = choosen_color;
                result.textContent = "Correct!";
                resetColors.textContent = "Try again?";
            }
        });
        
    }
}



function changeColors(){
    for(var i=0;i<square_box.length;i++){
        square_box[i].style.backgroundColor = choosen_color;
    }
}

function generateRandomColors(num){
    var arr = [];
    console.log(num)
    for(var i=0;i<num;i++){
        console.log(i);
        arr.push(randomColors());
    }
    console.log(arr);
    return arr;
}

function randomColors(){
    var r = Math.floor(Math.random()*256);  // red color rgb
    var g = Math.floor(Math.random()*256);  //green color rgb
    var b = Math.floor(Math.random()*256);  //blue color rgb

    return "rgb("+ r+", "+g+", "+b+")";
}