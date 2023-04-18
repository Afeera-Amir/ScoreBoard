let homeNum = document.getElementById("home-marks")
let guestNum = document.getElementById("guest-marks")

let marks = 0
function plusOne(){
    marks += 1
    homeNum.textContent = marks
}
function plusTwo(){
    marks += 2
    homeNum.textContent = marks
}
function plusThree(){
    marks += 3
    homeNum.textContent = marks
}


let guestMarks = 0
function plusOneGuest(){
    guestMarks += 1
    guestNum.textContent = guestMarks
}
function plusTwoGuest(){
    guestMarks += 2
    guestNum.textContent = guestMarks
}
function plusThreeGuest(){
    guestMarks += 3
    guestNum.textContent = guestMarks
}

function reset(){
    homeNum.textContent = 0
    guestNum.textContent = 0
    marks = 0
    guestMarks = 0
}