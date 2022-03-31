


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CONTACT

// kiểm tra giá trị hợp lệ/không hợp lệ khi nhập thông tin vào form

var inputs = document.querySelectorAll("input")
var textarea = document.querySelector("textarea")
var invalid_errors = document.querySelectorAll(".invalid_error")
var submit = document.querySelector("button")
var form = document.querySelector("form")

function checkValue(element, reg, error, message) {
    if (element.value.trim() == "") {
        element.style.borderBottomColor = "red"
        error.textContent = "Please fill out this field"
        element.classList.add("error")
    }
    else {
        if (reg.test(element.value)) {
            element.style.borderBottomColor = "#68e0cf"
            error.textContent = ""
            element.classList.remove("error")
        }
        else {
            element.style.borderBottomColor = "red"
            error.textContent = message
            element.classList.add("error")
        }
    }
}

var reg_name = /^[A-Za-z\s]+$/
var reg_email = /^\w+@[a-zA-Z]+\.com$/
var reg_textarea = /./


inputs[0].addEventListener("blur", function () {
    checkValue(inputs[0], reg_name, invalid_errors[0], "Names consist of letters only")
})

inputs[1].addEventListener("blur", function () {
    checkValue(inputs[1], reg_email, invalid_errors[1], "Invalid email")
})

textarea.addEventListener("blur", function () {
    checkValue(textarea, reg_textarea, invalid_errors[2], "")
})


submit.addEventListener("click", function (e) {
    e.preventDefault()

    var errors = document.querySelectorAll(".error")

    if (errors.length == 0) {
        form.innerHTML = "<div>Thanks, your message is sent successfully.</div>"
        var feedback = document.querySelector("form div")
        feedback.style.marginTop = "60px"
        feedback.style.color = "#575757"
        feedback.style.fontSize = "14px"
        feedback.style.fontWeight = "400"
        feedback.style.lineHeight = "25px"
    }
    else {
        checkValue(inputs[0], reg_name, invalid_errors[0], "Names consist of letters only")
        checkValue(inputs[1], reg_email, invalid_errors[1], "Invalid email")
        checkValue(textarea, reg_textarea, invalid_errors[2], "")
    }
})


