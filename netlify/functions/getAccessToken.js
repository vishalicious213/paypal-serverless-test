export async function handler(event, context) {
    const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
    const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
  
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
  
    try {
      const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
          "Authorization": `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return {
          statusCode: response.status,
          body: JSON.stringify({ error: data }),
        };
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ access_token: data.access_token, expires_in: data.expires_in }),
      };
  
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error", details: error.message }),
      };
    }
  }
  


// exports.handler = async event => {
//     const { PAYPAL_BASEURL, PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env

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
//         // const data = JSON.parse(response.body)
//         const data = response.body
//         const newAccessToken = data.access_token
//         return newAccessToken
//     } catch (error) {
//         throw new Error(error)
//     }
// }