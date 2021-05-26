const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const Phone = document.querySelector("#Phone")
const password = document.querySelector("#password")
const Cpassword = document.querySelector("#Cpassword")


form.addEventListener("submit", event => {
    event.preventDefault()
    validate()
})

const sendDate = (sRate,count) => {
    if(sRate === count){
        alert("REGISTATION SUCCESS")
        swal("Good job!", "Registration Successful", "success");
    }
}

// data set
const dataSuccessMeg = () => {
    let formCon = document.getElementsByClassName('form-control')
    let count = formCon.length - 1;
console.log(formCon);
    for( var i = 0 ; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            let sRate = 0 + i;
            console.log(sRate);
            sendDate(sRate, count)
        }else{
            console.log("fdgdfdf");
             return false;
        }
    }


  
}

// more validate email
const isEmail = (emailval) => {
    var alSymbol = emailval.indexOf("@")
    if (alSymbol < 1) return false;
    let dot = emailval.lastIndexOf('.')
    if (dot <= alSymbol + 2) return false;
    if (dot === emailval.length - 1) return false;
    return true
}

// default validate option
const validate = () => {
    const usernameval = username.value.trim()
    const emailval = email.value.trim()
    const Phoneval = Phone.value.trim()
    const passwordval = password.value.trim()
    const Cpasswordval = Cpassword.value.trim()

    // validate username
    if (usernameval === "") {
        setErrorMeg(username, 'username canot be blank')
    } else if (usernameval.length <= 3) {
        setErrorMeg(username, 'username min 3 char')
    } else {
        setSuccessMeg(username)
    }
    // validate email
    if (emailval === "") {
        setErrorMeg(email, 'email canot be blank')
    } else if (!isEmail(emailval)) {
        setErrorMeg(email, 'Not a valid Email')
    } else {
        setSuccessMeg(email)
    }
    // validate Phone
    if (Phoneval === "") {
        setErrorMeg(Phone, 'Phone Number canot be blank')
    } else if (Phoneval.length < 10) {
        setErrorMeg(Phone, 'Not a valid Phone Number')
    } else {
        setSuccessMeg(Phone)
    }
    // validate password
    if (passwordval === "") {
        setErrorMeg(password, 'password canot be blank')
    } else if (passwordval.length <= 8) {
        setErrorMeg(password, 'minimum 6 char')
    } else {
        setSuccessMeg(password)
    }
    // validate Cpassword
    if (Cpasswordval === "") {
        setErrorMeg(Cpassword, 'Confirm password canot be blank')
    } else if (Cpasswordval !== passwordval) {
        setErrorMeg(Cpassword, 'Password is not match')
    } else {
        setSuccessMeg(Cpassword)
    }

    dataSuccessMeg()

}

function setErrorMeg(input, errormegs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error"
    small.innerText = errormegs;
}

function setSuccessMeg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}