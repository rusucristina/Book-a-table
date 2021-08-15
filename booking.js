function validationEmail() {
    let email = document.getElementById(`email-input`).value
    let form = document.getElementById("form")
    let text = document.getElementById("result-email")
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        text.innerHTML = "Your Email Adress is Valid"
        text.style.color = "green"
    }
    else if (email == "") {
        text.innerHTML = ""
        text.style.color = "green"
    }
    else {
        text.innerHTML = "Wrong email format"
        text.style.color = "red"
    }
}
//Date
let dateInput = document.getElementById("date-input")
dateInput.onkeydown = function reservationDate() {
    let dateReservation = dateInput.value
    let textDate = document.getElementById("result-date")
    let formDate = document.getElementById("date")
    let today = new Date
    let d1 = new Date(dateReservation) //ca sa fie in acelasi format ca si new Date

    if (d1.getUTCFullYear() > today.getUTCFullYear()) { //anul e mai mare
        textDate.innerHTML = "Accepted"
        textDate.style.color = "green"
    }
    if (d1.getUTCFullYear() === today.getUTCFullYear()) { //anul ii la fel
        if (d1.getUTCMonth() > today.getUTCMonth()) {//luna mai mare
            textDate.innerHTML = "Accepted"
            textDate.style.color = "green"
        }
        if (d1.getUTCMonth() === today.getUTCMonth()) {// luna la fel
            if (d1.getDate() >= today.getDate()) { //ziua mai mare sau egala
                textDate.innerHTML = "Accepted"
                textDate.style.color = "green"
            }
            else {//ziua mai mica
                textDate.innerHTML = "You can't book a table before the actual date"
                textDate.style.color = "red"
            }
        }
        // else {//luna mai mica
        //     textDate.innerHTML = "You can't book a table before the actual date"
        //     textDate.style.color = "red"
        // }
    }
    // else {//anul mai mic
    //     textDate.innerHTML = "You can't book a table before the actual date"
    //     textDate.style.color = "red"
    // }

}

//Time
let timeInput = document.getElementById("time-input")
timeInput.onkeydown = function reservationTime() {

    let dateReservation = dateInput.value
    let textDate = document.getElementById("result-date")
    let formDate = document.getElementById("date")
    let d1 = new Date(dateReservation)

    let time1 = timeInput.value
    let textTime = document.getElementById("result-time")
    let today = new Date //data acum
    let currentHour = today.getHours() //ora curenta
    let currentMinute = today.getMinutes() // minutele curente
    let selectedHour = parseInt(time1.split(":")[0])//Alegem numai ora din input
   
    if (d1.getUTCFullYear() > today.getUTCFullYear()) { //anul e mai mare
        textTime.innerHTML = "Accepted"
        textTime.style.color = "green"
    }
    if (d1.getUTCFullYear() === today.getUTCFullYear()) { //anul ii la fel
        if (d1.getUTCMonth() > today.getUTCMonth()) {//luna mai mare
            textTime.innerHTML = "Accepted"
            textTime.style.color = "green"
        }
        if (d1.getUTCMonth() === today.getUTCMonth()) {// luna la fel
            if (d1.getDate() > today.getDate()) { //ziua mai mare
                textTime.innerHTML = "Accepted"
                textTime.style.color = "green"
            }
            if (d1.getDate() === today.getDate()) {//ziua la fel
                if (selectedHour > currentHour + 1) {
                    textTime.innerHTML = "Accepted"
                    textTime.style.color = "green"
                }
                if (selectedHour <= currentHour + 1) {
                    textTime.innerHTML = "Not accepted"
                    textTime.style.color = "red"
                }
            }
            // else{//ziua mai mica
            //     textTime.innerHTML = "Please select another day before choosing the time"
            //     textTime.style.color = "red"
            // }
        }
        // else{//luna mai mica
        //     textTime.innerHTML = "Please select another day before choosing the time"
        //     textTime.style.color = "red" 
        // }

    }
    else { //anul ii mai mic
        textTime.innerHTML = "Please select another day before choosing the time"
        textTime.style.color = "red"
    }
}

//Submit
    let submmitButton = document.querySelector(`#enter`)
    submmitButton.onclick = function bookATable() {
        let nameInput=document.querySelector("#name-input").value;
        let seatsInput=document.querySelector("#seats-input").value;
       if(textTime.innerHTML=="green" &&  text.innerHTML=="green" && nameInput!="" && seatsInput!=""){
            console.log()
       }

    }

