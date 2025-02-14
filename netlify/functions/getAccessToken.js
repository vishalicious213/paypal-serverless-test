exports.handler = async event => {
    const { PAYPAL_BASEURL, PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env

    try {
        const response = await fetch(`${PAYPAL_BASEURL}/v1/oauth2/token`, {
            method: "POST",
            form: {
                grant_type: "client_credentials",
            },
            username: PAYPAL_CLIENT_ID,
            password: PAYPAL_CLIENT_SECRET,
        })
        console.log(response.body)
    } catch (error) {
        throw new Error(error)
    }
}

    // const name = event.queryStringParameters.name || 'World'
    // const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env


// return {
//     statusCode: 200,
//     body: `
//     Hello ${name}!
//     Your client ID is ${PAYPAL_CLIENT_ID}.
//     Your secret is ${PAYPAL_CLIENT_SECRET}.
//     `,
// }