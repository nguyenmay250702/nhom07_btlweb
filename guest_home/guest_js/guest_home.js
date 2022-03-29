
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ NAVBAR






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ slider


function move_content_slider(next,back,content_slider,number_sliders,index,spaceX_dt,spaceX_mt){

    // hàm xác định độ lớn chuyển của Element 'content_slider' theo trục X 1 khoảng spaceX
    function translateX_value(test){
        if(test===1){
            if(index == number_sliders -1) return
            
            spaceX_dt =  spaceX_dt - 100
            spaceX_mt =  spaceX_mt - 54
            index++
        }
        if(test===-1){
            if(index == 0) return

            spaceX_dt =  spaceX_dt + 100
            spaceX_mt =  spaceX_mt + 54
            index--
        }
    }

    // hàm dịch chuyển phần tử content_slider 1 khoảng spaceX
    setInterval(function(){
        if(window.matchMedia("(max-width: 740px)").matches){
            content_slider.style.transform = `translateX(${spaceX_dt}%)`
        }
        else{
            content_slider.style.transform = `translateX(${spaceX_mt}%)` 
        }
    },1)

    // bắt sự kiện khi click vào nut next
    next.addEventListener("click", function () {
        translateX_value(1)
    })

    // bắt sự kiện khi click vào nut back
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

move_content_slider(experience_next, experience_back, experience_content_slider, experience_number_sliders,0,0,0)



// Education
var education_next = document.querySelector(".education_next")
var education_back = document.querySelector(".education_back")

var education_content_slider = document.querySelector(".content_education .content_slider")
var education_sliders = document.querySelectorAll(".content_education .slider")
var education_number_sliders = education_sliders.length

move_content_slider(education_next, education_back, education_content_slider, education_number_sliders,0,0,0)


