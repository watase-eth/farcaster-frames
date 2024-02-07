// Config file for the app
export const config = {
    // Neynar to get Warpcast reactions
    neynar: {
        apiKey: process.env.NEYNAR_API_KEY,
    },
    // Contract address for the NFT
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    // 
    warpcast: {
        castHash: process.env.NEXT_PUBLIC_WARPCAST_CAST_HASH,
    },
    // Url for the app
    hostUrl : process.env.NEXT_PUBLIC_VERCEL_URL,
    // Engine to interact with the blockchain
    thirdweb: {
        chainId: Number(process.env.NEXT_PUBLIC_THIRDWEB_CHAIN_ID),
        engine: {
            url: process.env.THIRDWEB_ENGINE_URL,
            wallet: process.env.THIRDWEB_ENGINE_WALLET,
            accessToken: process.env.THIRDWEB_ENGINE_ACCESS_TOKEN,
        },
    },
};