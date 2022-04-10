const username = "admin"
const password = "admin"

var inputs = document.querySelectorAll("input")
var submit = document.querySelector("button")
var row = document.querySelectorAll(".row")
var invalid_error = document.querySelector(".invalid_error")

submit.addEventListener("click", function(e){
    e.preventDefault()

    if(inputs[0].value !== username || inputs[1].value !== password){
        if(inputs[0].value !== username){
            row[0].style.borderBottomColor = "red"
        }
        else{
            row[0].style.borderBottomColor = "#68e0cf"
        }

        if(inputs[1].value !== password){
            row[1].style.borderBottomColor = "red"
        }
        else{
            row[1].style.borderBottomColor = "#68e0cf"
        }

        invalid_error.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Incorrect username or password. Double check your login information."
    }
    else{
        window.location.assign('admin_home.html');
    }
})