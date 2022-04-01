

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ navbar (responsive)
var menu = document.querySelector(".menu")
var menu_item = document.querySelectorAll(".menu_item")
var mobile_link_bars = document.querySelector(".mobile_link_bars")
var mobile_link_xmark = document.querySelector(".mobile_link_xmark")

//sự kiện khi click vào nút bars thì hiển thị menu
mobile_link_bars.addEventListener("click", function () {
    menu.style.height = "100%"
    mobile_link_xmark.style.display = "inline-block"
    mobile_link_bars.style.display = "none"
})

//sự kiện khi click vào nút xmark thì tắt menu
mobile_link_xmark.addEventListener("click", function () {
    menu.style.height = "0"
    mobile_link_bars.style.display = "inline-block"
    mobile_link_xmark.style.display = "none"
})

// sự kiện click vào các mục trong menu ==> chuyển tiếp đến nội dung tương ứng
for(var i = 0; i<menu_item.length; i++){
    menu_item[i].addEventListener("click",function(){
        menu.style.height = "0"
        mobile_link_bars.style.display = "inline-block"
        mobile_link_xmark.style.display = "none"
    })
}





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CONTACT

var inputs = document.querySelectorAll("input")
var textarea = document.querySelector("textarea")
var invalid_errors = document.querySelectorAll(".invalid_error")
var submit = document.querySelector("button")
var form = document.querySelector("form")

// kiểm tra giá trị người dùng nhập vào form có đúng không
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

// biểu thức chính quy
var reg_name = /^[A-Za-z\s]+$/
var reg_email = /^\w+@[a-zA-Z]+\.com$/
var reg_textarea = /./

// sư kiện blur của trường name
inputs[0].addEventListener("blur", function () {
    checkValue(inputs[0], reg_name, invalid_errors[0], "Names consist of letters only")
})

// sự kiện blur của tường email
inputs[1].addEventListener("blur", function () {
    checkValue(inputs[1], reg_email, invalid_errors[1], "Invalid email")
})

// sự kiện blur của trường textarea
textarea.addEventListener("blur", function () {
    checkValue(textarea, reg_textarea, invalid_errors[2], "")
})


// sự kiện click của trường submit
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


