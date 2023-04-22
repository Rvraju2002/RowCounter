//intialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
//set reset button
//set value 0 when click

let count=0;
let textchange=document.getElementById("count-el");

let saveEl=document.getElementById("save-el");

function increment(){
    count+=1;
    textchange.innerText=count;
}
function restart(){

    count=0;
    textchange.innerText=count;
}
function decrease(){
  
    if(count>0){
        count-=1
        textchange.innerText=count;
    } 
    else if(count==0){
        count=0;
        textchange.innerText=count;
    }
}
function save(){
 let store=count+" - ";
 saveEl.textContent+=store;
 count=0;
 textchange.innerText=count;
 
}
