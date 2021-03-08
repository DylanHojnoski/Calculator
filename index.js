let num1;
let num2;
let operator;

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
            add(num1,num2);
            break;

        case "-":
            subtract(num1, num2);
            break;

        case "*":
            multiply(num1, num2);
            break;

        case "/": 
            divide(num1, num1);
            break;
        
        default:
            break;
    }
}
