
let add = document.querySelector(".add")
let read = document.querySelector(".read")
let update = document.querySelector(".update")
let delete_all = document.querySelector(".delete_all")

let input = document.querySelector("input")
let textarea = document.querySelector("textarea")
let notification = document.querySelector(".notification")


// reset lại form nhập dữ liệu
let reset = document.querySelector(".reset")
reset.addEventListener("click", function () {
    input.value = ""
    textarea.value = ""
    input.style.backgroundColor = "#fff"
    textarea.style.backgroundColor = "#fff"
    notification.innerHTML = ""
})


// thêm tài khoản
add.addEventListener("click", function () {
    if (input.value.trim() == "" || textarea.value.trim() == "") {
        if (input.value.trim() == "") {
            input.style.backgroundColor = "#ff000042"
        }
        else {
            input.style.backgroundColor = "#fff"
        }

        if (textarea.value.trim() == "") {
            textarea.style.backgroundColor = "#ff000042"
        }
        else {
            textarea.style.backgroundColor = "#fff"
        }

        notification.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Please check the information again."
        notification.style.color = "red"
    }
    else {
        input.style.backgroundColor = "#fff"
        textarea.style.backgroundColor = "#fff"
        notification.innerHTML = "<i class='fa-solid fa-check'></i> Add data successfully."
        notification.style.color = "rgb(39 133 71)"

        const tr_new = document.createElement("tr")
        tr_new.innerHTML = '<td>1</td> <td class="title_name">...</td> <td class="Description">...</td> <td class="edit"><i class="fa-regular fa-pen-to-square"></i></td> <td class="delete"><i class="fa-regular fa-trash-can"></i></td>'
        tds = tr_new.querySelectorAll("td")
        tds[1].textContent = input.value
        tds[2].textContent = textarea.value

        let table = document.querySelector("table tbody")
        table.appendChild(tr_new)

        tr_new.style.display = "table-row"
        tr_new.style.backgroundColor = "#6ee86e3d"
        setTimeout(function () {
            tr_new.style.backgroundColor = "transparent"
        }, 5000)
    }
})


// hiển thị tất cả dữ liệu
read.addEventListener("click", function () {
    let tr = document.querySelectorAll("tr")
    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = "table-row"
    }
})


// xóa tất cả dữ liệu
delete_all.addEventListener("click", function () {
    let table = document.querySelector("table tbody")
    table.innerHTML = " <tr> <td>#</td> <td colspan='2'>Username</td> <td colspan='2'>Password</td> <td>Edit</td> <td class='delete'>Delete</td> </tr>"
})



// sửa thông tin từng mục
let temp
let title_name
let Description
setInterval(function(){
    title_name = document.querySelectorAll(".title_name")
    Description = document.querySelectorAll(".Description")
    let edit = document.querySelectorAll(".edit")
    for(let i=1; i<edit.length; i++){
        edit[i].addEventListener("click", function(){
            temp = i
            input.value = title_name[i].textContent
            textarea.value = Description[i].textContent
        })
    }
},10)

update.addEventListener("click", function(){
    let j = temp
    if (input.value.trim() == "" || textarea.value.trim() == "") {
        if (input.value.trim() == "") {
            input.style.backgroundColor = "#ff000042"
        }
        else {
            input.style.backgroundColor = "#fff"
        }

        if (textarea.value.trim() == "") {
            textarea.style.backgroundColor = "#ff000042"
        }
        else {
            textarea.style.backgroundColor = "#fff"
        }

        notification.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Please check the information again."
        notification.style.color = "red"
    }
    else {
        title_name[j].textContent = input.value
        Description[j].textContent = textarea.value
        input.style.backgroundColor = "#fff"
        textarea.style.backgroundColor = "#fff"
        notification.innerHTML = ""
    }
})


// cập nhật số thứ tự tài khoản và xóa từng tài khoản
setInterval(function () {
    let tr = document.querySelectorAll("tr")
    let deletes = document.querySelectorAll(".delete")

    for (let i = 1; i < tr.length; i++) {
        tr[i].querySelector("td:first-child").textContent = i
        deletes[i].addEventListener("click", function(){
            tr[i].remove()
        })
    }
}, 10)



//đóng mở menu
let plus = document.querySelector(".fa-plus")
let minus = document.querySelector(".fa-minus")
let menu = document.querySelector(".menu>ul")

plus.addEventListener("click", function(){
    menu.style.transform =  'scale(1)'
    plus.style.display = "none"
    minus.style.display = "block"
})

minus.addEventListener("click", function(){
    menu.style.transform = 'scale(0)'
    plus.style.display = "block"
    minus.style.display = "none"
})