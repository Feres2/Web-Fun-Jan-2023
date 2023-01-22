function likes(){
    alert("Ninja was liked")
}
function login(element) {
    if (element.innerText=="Login") {
        element.innerText="Logout";
        
    }
    else{
        element.innerText="Login";
    }

    
}
function remove(element){
    element.remove();

}
