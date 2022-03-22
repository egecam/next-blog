import { nanoid } from "nanoid";
export default async function handler(req, res) {
  // CREATE
  if (req.method === 'POST') {
    const { url, userToken, text } = req.body

    if (!url || !text || !userToken)
      return res
        .status(400)
        .json({ message: "Parametreler eksik veya hatalı." });

        const userResponse = await fetch(
            `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`
              }
            }
          )

    const user = await userResponse.json()

    const comment = {
        id: nanoid(),
        createdAt: Date.now(),
        text,
        user: {
          name: user.name,
          picture: user.picture
        }
      }

  }
