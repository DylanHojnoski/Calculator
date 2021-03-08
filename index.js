let num1;
let num2;
let operator;

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
    if(num2 != 0)
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
    switch(operator)
    {
        case "+":
            screen.textContent = add(num1,num2);
            break;

        case "-":
            screen.textContent = subtract(num1, num2);
            break;

        case "*":
            screen.textContent = multiply(num1, num2);
            break;

        case "/": 
            screen.textContent = divide(num1, num1);
            break;
        
        default:
            break;
    }
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
                console.log("press");
            }
            else if (buttons[i].textContent == "C")
            {
                clear();
            }
            else if(buttons[i].textContent != "=")
            {
                assignOperator(buttons[i].textContent);
                console.log("ress1");
            }
            else
            {
                num1 = Number(num1);
                num2 = Number(num2);
                operate();
               // clear();
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
        else
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
        else
        {
        num2 = Number(num2 * 10) + Number(num);
        }
        screen.textContent = num2;
    }
    return num;
}

function assignOperator(op)
{
    operator = op;
    screen.textContent = op;
}

function clear()
{
    screen.textContent = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}
