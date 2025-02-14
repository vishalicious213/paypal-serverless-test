import { loadScript } from "https://cdn.jsdelivr.net/npm/@paypal/paypal-js@8.0.0/dist/esm/paypal-js.js"

const nameField = document.getElementById("name")
const nameBtn = document.getElementById("nameBtn")
const netlifyBtn = document.getElementById("sendNetlify")
const apiBtn = document.getElementById("sendApi")
const testPayPalBtn = document.getElementById("testPayPalBtn")
let paypal

// ⬇️ EVENT LISTENERS ⬇️

nameBtn.addEventListener("click", logName)
netlifyBtn.addEventListener("click", sendNetlify)
apiBtn.addEventListener("click", sendApi)
testPayPalBtn.addEventListener("click", testPayPal)

// ⬇️ EVENT HANDLERS ⬇️

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

async function testPayPal() {
    try {
        const response = await fetch(`/api/createOrder`)
        const data = await response.json()
        console.log(data)
        console.log(data.message)
    } catch (error) {
        console.log("Error fetching order response", error)
    }
}

// ⬇️ UTILITY FUNCTIONS ⬇️

async function loadPayPal() {
    try {
        paypal = await loadScript({ clientId: "test"})
    } catch (error) {
        console.error("Failed to load the PayPal JS SDK script", error)
    }

    if (paypal) {
        try {
            await paypal.Buttons().render("#paypal-buttons")
        } catch (error) {
            console.error("Failed to render the PayPal Buttons", error)
        }
    }
}

loadPayPal()