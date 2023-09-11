const signBtn = document.getElementById(`btn1`)
const resBtn = document.getElementById(`btn2`)
const fullName = document.querySelector(`[name="fullName"]`).value
const dob = document.querySelector(`[name="dob"]`).value
const email = document.querySelector(`[name="email"]`).value
const mobNo = document.querySelector(`[name="mobNo"]`).value

const genPassword = () => {
    let character = "0123456789!£$%&-_@#()^=+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pLength = 12
    let passString = ""
    for (let i = 0; i < pLength; i++) {
        let randomNo = Math.floor(Math.random() * character.length)
        passString += character.substring(randomNo, randomNo + 1)
    }
    console.log(passString)
    password.value = passString

}

function completeForm() {
    if (fullName == null || dob == null || email == null || mobNo == null) {
        alert(`Please fill in all the details!`)
    } else {
        let fullName = document.querySelector(`[name="fullName"]`).value
        let dob = document.querySelector(`[name="dob"]`).value
        let email = document.querySelector(`[name="email"]`).value
        let mobNo = document.querySelector(`[name="mobNo"]`).value
        console.log(fullName)
        console.log(dob)
        console.log(email)
        console.log(mobNo)
        alert(`Your account has been successfully created. Your temporary password and all the information has been sent to your email address.`)
    }
}

signBtn.addEventListener(`click`, genPassword)
signBtn.addEventListener(`click`, completeForm)
resBtn.addEventListener(`click`, function resetPage() {
    location.reload()
})
