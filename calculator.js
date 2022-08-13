const results = document.querySelector("#results");
const current = document.querySelector("#current");
let prevOp = "";
let counter = 0;
let prevEqual = "";
current.textContent = "0";
results.textContent = "";
function curNum(num){
    if(current.textContent.search(/-/)==0){
        if(current.textContent.length >=10){
            return;
        };
    }else if(current.textContent.search(/-/)==-1){
        if(current.textContent.length >= 9){
            return;
        };
    };
    if(current.textContent == "0" && num == 0){
        return;
    } else if (current.textContent == "0" && num != 0){
        current.textContent = num;
        return;
    }
    if (prevEqual == "="){
        clear();
        clear();
        current.textContent = num;
        return;
    }
    if (counter > 0){
        current.textContent = num;
        counter = 0;
        return;
    }
    current.textContent += num;
    return;
};

function clear(){
    prevOp = "";
    current.textContent = "0";
    if (current.textContent == "0"){
        prevEqual = "";
        results.textContent ="0";
    }
};

function backspace(){
    current.textContent = current.textContent.slice(0,current.textContent.length-1);
    if (current.textContent.length == 0){
        current.textContent = 0;
    };
}

function addition(){
    if (counter != 0){
        return;
    }
    results.textContent = Number(results.textContent) + Number(current.textContent);
}
function subtraction(){
    if (counter != 0){
        return;
    }
    results.textContent = Number(results.textContent) - Number(current.textContent);
}
function division(){
    if (counter != 0){
        return;
    }
    if(current.textContent == "0"){
        return;
    }
    results.textContent = Number(results.textContent) / Number(current.textContent);
}
function multiplication(){
    if (counter != 0){
        return;
    }
    if(current.textContent == "0" && results.textContent == "0"){
        return;
    }
    results.textContent = Number(results.textContent) * Number(current.textContent);
}
function negInt(){
    current.textContent = Number(current.textContent) * -1;
}

function period(){
    if(current.textContent.search(/\./) == -1){
        current.textContent += ".";
        return;
    }
}
function equals(o){
    switch (o){
        case "+":
            addition();
            prevEqual = "=";
            break;
        case "-":
            subtraction();
            prevEqual = "=";
            break;
        case "x":
            multiplication();
            prevEqual = "=";
            break;
        case "÷":
            division();
            prevEqual = "=";
            break;
        default:
            results.textContent = current.textContent;
            break;
    };
};
window.addEventListener("keydown", (e) =>{
    switch (e.key){
        case "1":
            curNum(1);
            break;
        case "2":
            curNum(2);
            break;
        case "3":
            curNum(3);
            break;
        case "4":
            curNum(4);
            break;
        case "5":
            curNum(5);
            break;
        case "6":
            curNum(6);
            break;
        case "7":
            curNum(7);
            break;
        case "8":
            curNum(8);
            break;
        case "9":
            curNum(9);
            break;
        case "0":
            curNum(0);
            break;
        case "Backspace":
            backspace()
            break;
        case "Delete":
            clear();
            break;
        case "+":
            addition();
            counter++
            prevOp = "+"
            break;
        case "-":
            subtraction();
            counter++
            prevOp = "-"
            current.textContent = "0";
            break;
        case "/":
            division();
            counter++
            prevOp = "÷"
            current.textContent = "0";
            break;
        case "*":
            multiplication();
            counter++
            prevOp = "x"
            current.textContent = "0";
            break;
        case "=":
            equals(prevOp);
            break;
        case "Enter":
            equals(prevOp);
            break;
        case ".":
            period();
            break;
    }
});

document.addEventListener("click", (e)=>{
    switch (e.originalTarget.innerHTML){
        case "1":
            curNum(1);
            break;
        case "2":
            curNum(2);
            break;
        case "3":
            curNum(3);
            break;
        case "4":
            curNum(4);
            break;
        case "5":
            curNum(5);
            break;
        case "6":
            curNum(6);
            break;
        case "7":
            curNum(7);
            break;
        case "8":
            curNum(8);
            break;
        case "9":
            curNum(9);
            break;
        case "0":
            curNum(0);
            break;
        case "C":
            clear();
            break;
        case "+":
            addition();
            counter++
            prevOp = "+"
            break;
        case "-":
            subtraction();
            counter++
            prevOp = "-"
            current.textContent = "0";
            break;
        case "÷":
            division();
            counter++
            prevOp = "÷"
            current.textContent = "0";
            break;
        case "x":
            multiplication();
            counter++
            prevOp = "x"
            current.textContent = "0";
            break;
        case "=":
            equals(prevOp);
            break;
        case ".":
            period();
            break;
        case "-x":
            negInt();
            break;
    };
});
 

