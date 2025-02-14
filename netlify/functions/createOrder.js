exports.handler = async event => {
    try {
        const accessToken = await fetch("/.netlify/functions/getAccessToken")
        return res.status(200).json({ message: "Order created successfully" })
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Internal server error"
            })
        }
    }
}