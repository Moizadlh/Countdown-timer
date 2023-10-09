
let input_date = 0
let input_time = 0

document.getElementById("stop").disabled = true
document.getElementById("reset").disabled = true
document.getElementById("restart").disabled = true

let inputdate= document.getElementById("date")
inputdate.addEventListener("change" , dget)
let inputtime = document.getElementById("time")
inputtime.addEventListener("input" , tget)

function dget(){
    document.getElementById("restart").disabled = true
    input_date = inputdate.value
}
function tget(){
    document.getElementById("restart").disabled = true
    input_time = (inputtime.value)
}

let start = document.getElementById("start").addEventListener("click" , starter)

function starter() {

    if ((input_date == 0) || (input_time == 0)) {
        alert ("Please select some date or time")
        return
    }

    document.getElementById("stop").disabled = false
    document.getElementById("reset").disabled = false
    

    inputdate.readOnly = true
    inputtime.readOnly = true
    document.getElementById("start").disabled = true
    document.getElementById("restart").disabled = true
    const endtime = new Date(input_date + " " + input_time) 
    // let date_s = new Date()

    let intervals = setInterval(() =>
        moving(endtime), 1000)

    // STOP BUTTON
    let stop = document.getElementById("stop").addEventListener("click" , () => {
        document.getElementById("start").innerHTML = "Resume"
        document.getElementById("start").disabled = false
        clearInterval(intervals)
    })

    // RESET BUTTON
    let reset = document.getElementById("reset").addEventListener("click" , () => {
        c_day = document.getElementById("day")
        c_hours = document.getElementById("hour")
        C_min = document.getElementById("min") 
        c_sec = document.getElementById("sec")

        c_day.innerHTML = "00"
        c_hours.innerHTML = "00"
        C_min.innerHTML = "00"
        c_sec.innerHTML = "00"

        document.getElementById("start").innerHTML = "Start"

        inputdate.readOnly = false
        inputtime.readOnly = false

        document.getElementById("stop").disabled = true
        document.getElementById("reset").disabled = true
        document.getElementById("start").disabled = false
        document.getElementById("restart").disabled = false

        clearInterval(intervals)
    })

}

function moving(endtime){
    let date = new Date()

    c_day = document.getElementById("day")
    c_hours = document.getElementById("hour")
    C_min = document.getElementById("min") 
    c_sec = document.getElementById("sec")

    if (endtime > date) {
        const timeleft = (endtime - date) / 1000

        c_day.innerHTML = Math.floor(timeleft / (24*60*60) )
        c_hours.innerHTML = Math.floor((timeleft / (60*60)) % 24 )
        C_min.innerHTML = Math.floor((timeleft / 60) % 60)
        c_sec.innerHTML = Math.floor(timeleft % 60)
    }
    else{
        c_day.innerHTML = "00"
        c_hours.innerHTML = "00"
        C_min.innerHTML = "00"
        c_sec.innerHTML = "00"

        inputdate.readOnly = false
        inputtime.readOnly = false
        document.getElementById("start").disabled = false
        document.getElementById("stop").disabled = true
        document.getElementById("reset").disabled = true
        document.getElementById("restart").disabled = true
    }
}

let restart = document.getElementById("restart").addEventListener("click" , starter)