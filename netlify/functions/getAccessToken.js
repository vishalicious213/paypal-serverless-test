export async function handler(event, context) {
    const { PAYPAL_BASEURL, PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")

    try {
        const response = await fetch(`${PAYPAL_BASEURL}/v1/oauth2/token`, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${auth}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials",
        })

        const data = await response.json()

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: data }),
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ access_token: data.access_token, expires_in: data.expires_in }),
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error", details: error.message }),
        }
    }
}