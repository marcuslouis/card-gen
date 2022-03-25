let spade = [1,2,3,4,5,6,7,8,9,10,"K","Q","J","A"]
let suit =["♦","♥","♠","♣"]
let deck = suit[Math.floor(Math.random()*suit.length)]
let arr = spade[Math.floor(Math.random()*spade.length)]
//  let result = Math.floor(Math.random() * 10)
// document.getElementById("card").innerHTML = result

console.log(arr,deck)

document.querySelector("#numbers").innerText = arr
document.querySelector(".icon").innerText = deck
document.querySelector(".icon2").innerText = deck
// let div = document.getElementById("container");
// div.style.color = "red";
if(
    deck === "♦"|| deck === "♥"
)
{
    document.querySelector(".icon").style.color = "red";
}else if(
    deck === "♠"|| deck === "♣"
)
{
    document.querySelector(".icon").style.color = "black";
}
if(
    deck === "♦"|| deck === "♥"
)
{
    document.querySelector(".icon2").style.color = "red";
}else if(
    deck === "♠"|| deck === "♣"
)
{
    document.querySelector(".icon2").style.color = "black";
}
