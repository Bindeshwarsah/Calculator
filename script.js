

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

    // Check if the input is valid when a mathematical sign is entered
    if (currentVal === "0" || currentVal === "ERROR") {
        if (val === '-' || val === '.' ||val.match(/[1-9]/)) {
            document.getElementById("result").value = val;
        }
    } else {
        if (currentVal === '' && (val === '*' || val === '/' || val === '+' || val === '%')) {
            return; // Do not add operation signs at the beginning
        }


        else if (!currentVal.match(/[+\-*/%]/) && val.match(/[0-9.]/)) {
            // If the input doesn't contain an operator and the pressed value is a number or dot, clear and set the input to the pressed value
            document.getElementById("result").value = val;
        }

         else {
            document.getElementById("result").value += val;
        }
    }
    
}
function calculate() {
    let x = document.getElementById("result").value;
    // Replace 'x' with '*' for evaluation
    x = x.replace(/x/g, '*');
    try {
        let y = eval(x);
        if (Number.isNaN(y)) {
            document.getElementById("result").value = "ERROR";
        } else {
            // Check if the result is a decimal number
            if (y % 1 !== 0) {
                // Round the result to three decimal places
                y = y.toFixed(3);
            }
            document.getElementById("result").value = y;
        }
    } catch (error) {
        document.getElementById("result").value = "ERROR";
    }
}
