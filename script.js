let operacionStr;
let numeroStr = "0";
let num1, num2, res;
let operador;
let acabe = false;
let num1Filled = false;
let flagToWriteNum = false;
let flagIndefinied = false;

function calcular(num1, num2, op){
    
    switch(op){
        
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            if (num1 == 0 && num2 == 0 || num2 == 0){
                flagIndefinied = true;
                return "INDEFINIDO";
            }
            return num1 / num2;
    }
}
function textOfnumeroStr(text){
    console.log("Entro a funcion");
    console.log(text.length);
    if(text.length <= 13){
        document.getElementById("numero").innerHTML = text;
        console.log(text);
    }else{
        document.getElementById("numero").innerHTML = Number(text).toExponential(7);
    }
    
}
function textOfOperacion(text){
    document.getElementById("operacion").innerHTML = text;
}

function btnNumber(num){
    if (document.getElementById("numero").innerHTML == "0" || flagToWriteNum){
        if (num != "."){
            numeroStr = num.toString();
            flagToWriteNum = false;
        }else{
            numeroStr += num.toString();
        }
        
    }else{
        numeroStr += num.toString();
    }
    textOfnumeroStr(numeroStr);
}
function btnOperator(op){
    
    if (op == '%'){
        if(num1Filled){
            num2 = (Number(numeroStr)/100) * Number(num1);
            
            console.log(num1);
            numeroStr = num2.toString();
            operacionStr = num1.toString() + operador + numeroStr;
            textOfnumeroStr(numeroStr);
            textOfOperacion(operacionStr);
            
            flagToWriteNum = true;
        }else{
            numeroStr = "0";
        }
    } else if (num1Filled){
        if (op == "="){
            num2 = Number(numeroStr);
            res = calcular(num1, num2, operador);
            
            console.log(num1);
            numeroStr = res.toString();

            textOfOperacion(num1.toString() + operador + num2.toString() + op );
            console.log(numeroStr);
            flagToWriteNum = true;
            textOfnumeroStr(numeroStr);
            num1Filled = false
            if (res == "INDEFINIDO"){
                res = 0;

            }
        }else{
            if (flagIndefinied){
                numeroStr = "0";
                flagIndefinied = false;
                console.log("FlagIdefinied igual false");
            }
            num2 = Number(numeroStr);
            num1 = calcular(num1, num2, operador);
            
            console.log(num1);
            numeroStr = num1.toString();
            operador = op;  
            
            textOfOperacion(numeroStr + operador);
            console.log(numeroStr);
            flagToWriteNum = true;
            textOfnumeroStr(numeroStr);
            if (num1 == "INDEFINIDO" ){
                textOfOperacion("0" + operador);
                num1 = 0;
            }
            
        }
        
        
    }else if (op == "="){
        textOfOperacion(numeroStr + "=" + numeroStr);

    }else{
        if (flagIndefinied){
                numeroStr = "0";
                flagIndefinied = false;
                console.log("FlagIdefinied igual false");
            }
        operador = op;
        operacionStr = numeroStr + op;
        textOfOperacion(operacionStr);
        num1 = Number(numeroStr);
        num1Filled = true;
        flagToWriteNum = true;

    }
    flagIndefinied = false;
}
function btnC(){
    numeroStr = "0";
    textOfnumeroStr(numeroStr);
}
function btnAc(){
    numeroStr = "0";
    operacionStr = "0";
    num1Filled = false;
    textOfnumeroStr(numeroStr);
    textOfOperacion(operacionStr);
    flagToWriteNum = true;
    flagIndefinied = false;
}