

function start(val) {
    document.getElementById("result").value = val;

    // Enable all buttons with the 'display' class
    const buttons = document.querySelectorAll(".display");
    buttons.forEach(button => {
        button.disabled = false;
    });
    document.getElementById("startButton").disabled = true;
}


function clr(){
    document.getElementById("result").value="";
    // Disable all buttons with the 'display' class
    const displayButtons = document.querySelectorAll(".display");
    displayButtons.forEach(button => {
        button.disabled = true;
    });

}
function display(val) {
    let currentVal = document.getElementById("result").value;
    if (currentVal === "0") {
        document.getElementById("result").value = val;
    } else {
        document.getElementById("result").value += val;
    }
}

function calculate(){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;

}