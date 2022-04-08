
let add = document.querySelector(".add")
let read = document.querySelector(".read")
let update = document.querySelector(".update")
let delete_all = document.querySelector(".delete_all")

let username = document.querySelector(".username")
let password = document.querySelector(".password")
let notification = document.querySelector(".notification")


// reset lại form nhập dữ liệu
let reset = document.querySelector(".reset")
reset.addEventListener("click", function () {
    username.value = ""
    password.value = ""
    username.style.backgroundColor = "#fff"
    password.style.backgroundColor = "#fff"
    notification.innerHTML = ""
})


// thêm tài khoản
add.addEventListener("click", function () {
    if (username.value.trim() == "" || password.value.trim() == "") {
        if (username.value.trim() == "") {
            username.style.backgroundColor = "#ff000042"
        }
        else {
            username.style.backgroundColor = "#fff"
        }

        if (password.value.trim() == "") {
            password.style.backgroundColor = "#ff000042"
        }
        else {
            password.style.backgroundColor = "#fff"
        }

        notification.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Invalid username or password, please check the information again."
        notification.style.color = "red"
    }
    else {
        username.style.backgroundColor = "#fff"
        password.style.backgroundColor = "#fff"
        notification.innerHTML = "<i class='fa-solid fa-check'></i> Successfully added new account."
        notification.style.color = "rgb(39 133 71)"

        const tr_new = document.createElement("tr")
        tr_new.innerHTML = '<td>1</td> <td class="user" colspan="2">admin</td> <td class="pass" colspan="2">admin</td> <td class="edit"><i class="fa-regular fa-pen-to-square"></i></td> <td class="delete"><i class="fa-regular fa-trash-can"></i></td>'
        tds = tr_new.querySelectorAll("td")
        tds[1].textContent = username.value
        tds[2].textContent = password.value

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


// sửa thông tin tài khoản
let temp
let user
let pass
setInterval(function(){
    user = document.querySelectorAll(".user")
    pass = document.querySelectorAll(".pass")
    let edit = document.querySelectorAll(".edit")
    for(let i=1; i<edit.length; i++){
        edit[i].addEventListener("click", function(){
            temp = i
            username.value = user[i].textContent
            password.value = pass[i].textContent
        })
    }
},10)

update.addEventListener("click", function(){
    let j = temp
    user[j].textContent = username.value
    pass[j].textContent = password.value
})


// cập nhật số thứ tự tài khoản và xóa từng tài khoản
setInterval(function () {
    let tr = document.querySelectorAll("tr")
    let deletes = document.querySelectorAll(".delete")

    for (let i = 1; i < tr.length; i++) {
        tr[i].querySelector("td:first-child").textContent = i
        deletes[i].addEventListener("click", function(){
            // let table = document.querySelector("table tbody")
            // table.removeChild(tr[i])
            tr[i].remove()
        })
    }
}, 10)












