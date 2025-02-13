exports.handler = async event => {
    const name = event.queryStringParameters.name || 'World'
    // const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env

    return {
        statusCode: 200,
        body: `Hello ${name}!`,
    }
}


// return {
//     statusCode: 200,
//     body: `
//     Hello ${name}!
//     Your client ID is ${PAYPAL_CLIENT_ID}.
//     Your secret is ${PAYPAL_CLIENT_SECRET}.
//     `,
// }