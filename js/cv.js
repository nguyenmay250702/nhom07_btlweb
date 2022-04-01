
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ NAVBAR

var navbar_list = document.querySelector(".navbar_list")
var navbar_item_link = document.querySelectorAll(".navbar_item_link")
var mobile_link_bars = document.querySelector(".mobile_link_bars")
var mobile_link_xmark = document.querySelector(".mobile_link_xmark")


// sự kiện click vào nút bars hiện ra navbar
mobile_link_bars.addEventListener("click",function(){
    navbar_list.style.height = "100%"
    mobile_link_bars.style.display = "none"
    mobile_link_xmark.style.display = "block"
})

// sự kiện click vào nút xmark hiện ra navbar
mobile_link_xmark.addEventListener("click",function(){
    navbar_list.style.height = "0"
    mobile_link_bars.style.display = "block"
    mobile_link_xmark.style.display = "none"
})

// sự kiện click vào các mục trong menu hiển thị nội dung của từng phần
for(let i=1; i<navbar_item_link.length; i++){
    navbar_item_link[i].addEventListener("click",function(){
        navbar_list.style.height = "0"
        mobile_link_xmark.style.display = "none"
        mobile_link_bars.style.display = "block"
    })
}





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ slider

function move_content_slider(next, back, content_slider, number_sliders, index, spaceX_dt, spaceX_mt) {

    // hàm xác định độ lớn chuyển của Element 'content_slider' theo trục X 1 khoảng spaceX
    function translateX_value(test) {
        if (test === 1) {
            if (index == number_sliders - 1) return

            spaceX_dt = spaceX_dt - 100
            spaceX_mt = spaceX_mt - 54
            index++
        }
        if (test === -1) {
            if (index == 0) return

            spaceX_dt = spaceX_dt + 100
            spaceX_mt = spaceX_mt + 54
            index--
        }
    }

    // hàm dịch chuyển phần tử content_slider 1 khoảng spaceX
    setInterval(function () {
        if (window.matchMedia("(max-width: 740px)").matches) {
            content_slider.style.transform = `translateX(${spaceX_dt}%)`
        }
        else {
            content_slider.style.transform = `translateX(${spaceX_mt}%)`
        }
    }, 1)

    //sự kiện khi click vào nut next
    next.addEventListener("click", function () {
        translateX_value(1)
    })

    //sự kiện khi click vào nut back
    back.addEventListener("click", function () {
        translateX_value(-1)
    })
}


// experience
var experience_next = document.querySelector(".experience_next")
var experience_back = document.querySelector(".experience_back")

var experience_content_slider = document.querySelector(".content_experience .content_slider")
var experience_sliders = document.querySelectorAll(".content_experience .slider")
var experience_number_sliders = experience_sliders.length

move_content_slider(experience_next, experience_back, experience_content_slider, experience_number_sliders, 0, 0, 0)



// Education
var education_next = document.querySelector(".education_next")
var education_back = document.querySelector(".education_back")

var education_content_slider = document.querySelector(".content_education .content_slider")
var education_sliders = document.querySelectorAll(".content_education .slider")
var education_number_sliders = education_sliders.length

move_content_slider(education_next, education_back, education_content_slider, education_number_sliders, 0, 0, 0)







// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Portfolio

var all = document.querySelector(".all")
var videos = document.querySelector(".videos")
var musics = document.querySelector(".musics")
var links = document.querySelector(".links")
var images = document.querySelector(".images")
var portfolio_item = document.querySelectorAll(".portfolio_item")

var overlay = document.querySelectorAll(".overlay")
var portfolio_icon = document.querySelectorAll(".portfolio_icon")


// Giải quyết việc lọc sản phẩm
function testClassName(className) {
    for (let i = 0; i < portfolio_item.length; i++) {
        if (portfolio_item[i].classList.contains(className)) {
            portfolio_item[i].style.display = "inline-block"
        }
        else {
            portfolio_item[i].style.display = "none"
        }
    }
}

//sự kiện khi click vào all hiện ra tất cả sản phẩm
all.addEventListener("click", function () {
    testClassName("portfolio_item")
})

//sự kiện khi click vào video hiện tất cả các sản phẩm video
videos.addEventListener("click", function () {
    testClassName("video")
})

//sự kiện khi click vào music hiện tất cả sản phẩm music
musics.addEventListener("click", function () {
    testClassName("music")
})

//sự kiện khi click vào link hiện tất cả sản phẩm link
links.addEventListener("click", function () {
    testClassName("link")
})

//sự kiện khi click vào image hiện tất cả sản phẩm image
images.addEventListener("click", function () {
    testClassName("image")
})



// giải quyết việc xem thông tin chi tiết của mục portfolio
var href

//sự kiện khi click vào portfolio_icon hiện full thông tin
for (let i = 0; i < portfolio_icon.length - 1; i++) {
    portfolio_icon[i].addEventListener("click", function () {
        overlay[i].style.transform = "scale(1)"
        if (overlay[i].querySelector("iframe") == null) {
            return
        }
        href = overlay[i].querySelector("iframe").src
    })
}

//sự kiện khi click vào overlay làm ẩn chính nó
for (let i = 0; i < overlay.length; i++) {
    overlay[i].addEventListener("click", function () {
        overlay[i].style.transform = "scale(0)"
        if (overlay[i].querySelector("iframe") == null) {
            return
        }
        overlay[i].querySelector("iframe").src = "0"
        setTimeout(function () {
            overlay[i].querySelector("iframe").src = href
        }, 1)
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
var reg_email = /^\w+@[a-zA-Z]+\.com$/i
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

    var errors = document.querySelectorAll(".content_Contact .error")

    if (errors.length == 0) {
        form.innerHTML = "<div>Thanks, your message is sent successfully.</div>"
        var feedback = document.querySelector(".content_Contact form div")
        feedback.style.marginTop = "60px"
        feedback.style.color = "white"
        feedback.style.fontSize = "13px"
        feedback.style.fontWeight = "400"
        feedback.style.lineHeight = "25px"
    }
    else {
        checkValue(inputs[0], reg_name, invalid_errors[0], "Names consist of letters only")
        checkValue(inputs[1], reg_email, invalid_errors[1], "Invalid email")
        checkValue(textarea, reg_textarea, invalid_errors[2], "")
    }
})


