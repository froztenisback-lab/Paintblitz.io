// api/auth.ts
import Ably from 'ably';

export default async function handler(req, res) {
  // Use the API Key you added to Vercel Environment Variables
  const client = new Ably.Rest(process.env.ABLY_API_KEY);
  
  try {
    // This creates a temporary token for the player
    const tokenRequestData = await client.auth.createTokenRequest({ 
      clientId: 'paintblitz-player-' + Math.random().toString(36).substring(7) 
    });
    
    // Send it back to your React app
    return res.status(200).json(tokenRequestData);
  } catch (error) {
    return res.status(500).send("Error creating Ably token");
  }
}