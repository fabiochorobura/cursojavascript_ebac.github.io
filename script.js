function saveValue(){

var userInput = document.getElementById("userInput").value;

if (userInput > 0)
{
    console.log("O numeor é maior que 0!");
        document.getElementById("ifElse").innerText = "O numero é maior que 0!";
} 
else if (userInput < 0)
{
    console.log("O numeor é menor que 0");
        document.getElementById("ifElse").innerText = "O numero é menor que 0!";
}
else 
{
    console.log("O numeor é igual a 0");
        document.getElementById("ifElse").innerText = "O numero é igual a 0!";
}

    console.log("O valor é: " + userInput);
        document.getElementById("Value").innerText = "O Valor é " + userInput;
}