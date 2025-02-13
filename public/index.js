const nameField = document.getElementById("name")
const nameBtn = document.getElementById("nameBtn")
const netlifyBtn = document.getElementById("sendNetlify")
const apiBtn = document.getElementById("sendApi")

nameBtn.addEventListener("click", logName)
netlifyBtn.addEventListener("click", sendNetlify)
apiBtn.addEventListener("click", sendApi)

function logName() {
    console.log(nameField.value)
}

async function sendNetlify() {
    try {
        const response = await fetch(`/.netlify/functions/sendName?name=${nameField.value}`)
        const data = await response.json()
        console.log(data)
        console.log(data.message)
    } catch (error) {
        console.log("Error fetching name response", error)
    }
}

async function sendApi() {
    try {
        const response = await fetch(`/api/sendName?name=${nameField.value}`)
        const data = await response.json()
        console.log(data)
        console.log(data.message)
    } catch (error) {
        console.log("Error fetching name response", error)
    }
}