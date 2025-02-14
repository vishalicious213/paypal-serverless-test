exports.handler = async (req, res) => {
    try {
        const accessToken = await fetch("/.netlify/functions/getAccessToken")
        return res.status(200).json({ message: "Order created successfully" })
    } catch (error) {
        res.status(500).json({ error: "Internal server error"})
    }
}