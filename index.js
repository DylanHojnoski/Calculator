let num1;
let num2;
let operator;
let answer;
const screen = document.getElementById("screen");
const body = document.querySelector("body");
body.addEventListener("load", assignButtons());
function add (num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    if(num2 != "0")
    {
        return num1 / num2;
    }
    else
    {
        return "Can't divide by 0";
    }
}

function operate()
{
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator)
    {
        case "+":
            answer = add(num1,num2);
            break;

        case "-":
            answer = subtract(num1, num2);
            break;

        case "*":
            answer = multiply(num1, num2);
            break;

        case "/": 
            answer = checkLength(divide(num1, num2));
            break;
        
        default:
            break;
    }
    screen.textContent = answer;
}

function assignButtons()
{
    const buttons = document.querySelectorAll("button");
    let regex = /\d/;
    for(let  i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click", () => {
            if (regex.test(buttons[i].textContent))
            {
                assignNum(buttons[i].textContent);
            }
            else if (buttons[i].textContent == "C")
            {
                clear();
                answer = undefined;
                screen.textContent = "";
            }
            else if(buttons[i].textContent != "=")
            {
                assignOperator(buttons[i].textContent);
            }
            else
            {
                screen.textContent = "";
                operate();
                clear();
            }
        });
    }
}

function assignNum(num)
{
    if(operator == undefined)
    {
        if(num1 == undefined)
        {
            num1 = num;
        }
        else if(num1.toString().length < 15)
        {
            num1 = Number(num1 * 10) + Number(num);
        }
        screen.textContent = num1;
        
    }
    else
    {
        if(num2 == undefined)
        {
            num2 = num;
        }
        
        else if(num2.toString().length < 15)
        {
        num2 = Number(num2 * 10) + Number(num);
        }
        checkLength(num2);
        screen.textContent = num2;
    }
    return num;
}

function assignOperator(op)
{   
    if(num1 == undefined && answer != undefined)
    {
        num1 = answer;
    }
    else if (operator != undefined && num2 != undefined && num1 != undefined)
    {
        operate();
        clear();
        num1 = answer;
    }
    operator = op;
    screen.textContent = op;
}

function clear()
{
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}

function checkLength(num)
{
    if(num.toString().length > 15 && num2 != 0)
    {
        num = Number(num).toFixed(15);
    }
    return num;
}