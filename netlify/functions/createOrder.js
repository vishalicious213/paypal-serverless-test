exports.handler = async event => {
    try {
        // const accessToken = await fetch("/.netlify/functions/getAccessToken")
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Order created successfully"
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