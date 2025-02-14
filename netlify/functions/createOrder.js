exports.handler = async event => {
    // const { PAYPAL_BASEURL, PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env

    // async function getAccessToken() {
    //     try {
    //         const response = await fetch(`${PAYPAL_BASEURL}/v1/oauth2/token`, {
    //             method: "POST",
    //             form: {
    //                 grant_type: "client_credentials",
    //             },
    //             username: PAYPAL_CLIENT_ID,
    //             password: PAYPAL_CLIENT_SECRET,
    //         })
    //         console.log(response.body)
    //         const data = JSON.parse(response.body)
    //         const newAccessToken = data.access_token
    //         return newAccessToken
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // }

    try {
        const fetchAccessToken = await fetch("/api/getAccessToken")
        const accessToken = await fetchAccessToken.json()
        console.log(accessToken)
        // const accessToken = await getAccessToken()

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Order created successfully",
                accessToken: accessToken,
            })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Internal server error"
            })
        }
    }
}