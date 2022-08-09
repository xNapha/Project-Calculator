const results = document.querySelector("#results");
const current = document.querySelector("#current");
let prevOp = "";
current.textContent = "0";
results.textContent = "";

function curNum(num){
    if(current.textContent.length >=9){
        return;
    }
    if(current.textContent == "0" && num == 0){
        return;
    } else if (current.textContent == "0" && num != 0){
        current.textContent = num;
        return;
    }
    current.textContent += num;
    prevNum = current.textContent;
    return;
};

function clear(){
    if (current.textContent == "0"){
        results.textContent ="0";
    }
};
function checkResZero(){
    if(results.textContent == "0" || results.textContent == ""){
        results.textContent = Number(current.textContent);
        current.textContent = "0";
        return;
    };
};

function addition(){
    checkResZero()
    results.textContent = Number(results.textContent) + Number(current.textContent);
}
function subtraction(){
    checkResZero()
    results.textContent = Number(results.textContent) - Number(current.textContent);
}
function division(){
    checkResZero()
    if(current.textContent == "0"){
        return;
    }
    results.textContent = Number(results.textContent) / Number(current.textContent);
}
function multiplication(){
    checkResZero()
    if(current.textContent == "0"){
        return;
    }
    results.textContent = Number(results.textContent) * Number(current.textContent);
}
function negInt(){
    results.textContent = Number(results.textContent) * -1;
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
            break;
        case "-":
            subtraction();
            break;
        case "x":
            multiplication();
            break;
        case "÷":
            division();
            break;
    };
};

document.addEventListener("click", (e)=>{
    switch (e.originalTarget.innerHTML){
        case "1":
            curNum(1)
            break;
        case "2":
            curNum(2)
            break;
        case "3":
            curNum(3)
            break;
        case "4":
            curNum(4)
            break;
        case "5":
            curNum(5)
            break;
        case "6":
            curNum(6)
            break;
        case "7":
            curNum(7)
            break;
        case "8":
            curNum(8)
            break;
        case "9":
            curNum(9)
            break;
        case "0":
            curNum(0)
            break;
        case "C":
            clear()
            current.textContent = "0"; 
            break;
        case "+":
            prevOp = "+"
            addition();
            current.textContent = "0"; 
            break;
        case "-":
            prevOp = "-"
            subtraction();
            current.textContent = "0"; 
            break;
        case "÷":
            prevOp = "÷"
            division();
            current.textContent = "0"; 
            break;
        case "x":
            prevOp = "x"
            multiplication();
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
            
    }
});

// num1, operator, num2, if operator (complete equation then add the operator), else finish equation
// evaluation function, string to equation
 

