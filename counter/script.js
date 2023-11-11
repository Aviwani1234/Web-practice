let element  = document.getElementById("cnt")

element.addEventListener("click", function(){
    changeHTML();
})

let i=1;
function changeHTML()
{
    element.innerHTML = '"Hello World"'
    num.innerHTML = i++;
}

let num = document.getElementById("number")

num.addEventListener("click", function()
{
    changeHTML();
})