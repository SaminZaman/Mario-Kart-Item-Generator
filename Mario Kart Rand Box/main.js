//Generate Mario Kart Item Box Items

//Global variables
let bananaNum = 0;
let shellNum = 0;
let starNum = 0;
let mushroomNum = 0;
let bulletNum = 0;

//Event Listeners
document.getElementById("box").addEventListener("click", giveItem);

//Event Functions
function giveItem () {
    
    let position = document.getElementById("position").value; //get position from user input

    //Determine which set of probabilities apply
    
    if (position <=6 && position > 0) {
        //Determine which item users in the top 6 get
        let randNum = Math.random();
        if (randNum <= 0.45) {
            bananaNum++;
            document.getElementById("resultPics").innerHTML += "<img src='images/banana.png'>";
        }
            else if (randNum <= 0.8) {
                shellNum++;
                document.getElementById("resultPics").innerHTML += "<img src='images/shell.png'>";
            }
            else if (randNum <= 0.95) {
                starNum++
                document.getElementById("resultPics").innerHTML += "<img src='images/star.png'>";
            }
            else if (randNum <= 0.99) {
                mushroomNum++
                document.getElementById("resultPics").innerHTML += "<img src='images/mushroom.png'>";
            }
            else {
                bulletNum++
                document.getElementById("resultPics").innerHTML += "<img src='images/bullet.png'>";
            }
    }
    else if (position <=12 && position > 6){
        //Determine which item users in last 6
        let randNum = Math.random();
        if (randNum <= 0.05) {
            bananaNum++
            document.getElementById("resultPics").innerHTML += "<img src='images/banana.png'>";
        }
            else if (randNum <= 0.1) {
                shellNum++
                document.getElementById("resultPics").innerHTML += "<img src='images/shell.png'>";
            }
            else if (randNum <= 0.35) {
                starNum++
                document.getElementById("resultPics").innerHTML += "<img src='images/star.png'>";
            }
            else if (randNum <= 0.70) {
                mushroomNum++
                document.getElementById("resultPics").innerHTML += "<img src='images/mushroom.png'>";
            }
            else {
                bulletNum++
                document.getElementById("resultPics").innerHTML += "<img src='images/bullet.png'>";
            }
    }
    document.getElementById("bananaNum").innerHTML = bananaNum;
    document.getElementById("shellNum").innerHTML = shellNum;
    document.getElementById("starNum").innerHTML = starNum;
    document.getElementById("mushroomNum").innerHTML = mushroomNum;
    document.getElementById("bulletNum").innerHTML = bulletNum;
}


