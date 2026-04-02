import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './game'
import * as Ably from 'ably' // Import the full Ably SDK
import { AblyProvider, ChannelProvider } from 'ably/react'

// 1. Initialize the Ably Client pointing to your Vercel API route
const client = new Ably.Realtime({ authUrl: '/api/auth' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap your app in the AblyProvider */}
    <AblyProvider client={client}>
      {/* 3. Wrap in a ChannelProvider if you want a global game channel */}
      <ChannelProvider channelName="paintblitz-global">
        <App />
      </ChannelProvider>
    </AblyProvider>
  </React.StrictMode>
)
