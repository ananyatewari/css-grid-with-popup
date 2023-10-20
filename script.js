const popup_one = document.getElementById("pop1");
const popup_two = document.getElementById("pop2");
const close = document.getElementById('close');
function popup1(){
    popup_one.style.display = "block";
    close.style.display = "block";
}

function popup2(){
    close.style.display = "block";
    popup_two.style.display = "block";
}

function closing(){
    popup_one.style.display = 'none';
    close.style.display = "none";
    popup_two.style.display = 'none';
}

// window.onclick = (event) => {
//     if (event.target != popup_one){
//         popup_one.style.display = "none";
//     }
//     else if (event.target != popup_two){
//         popup_two.style.display = "none";
//     }
// }

// window.onclick = (event) => {
//     if (event.target != popup_one && event.target != popup_two){
//     popup_one.style.display = "none";
//     popup_two.style.display = "none";
//     }
// }

// document.onclick = (event) => {
//     if (event.target != popup_one || event.target != popup_two){
//         popup_one.style.display = "none";
//         popup_two.style.display = "none";
//     } 
// }