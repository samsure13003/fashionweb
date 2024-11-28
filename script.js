function clickme(){
    document.write("It hasn't done yet, please get back to the previous page");
}
document.getElementById("clickable").addEventListener("click",function(){
    window.location.href="cart.html";
})