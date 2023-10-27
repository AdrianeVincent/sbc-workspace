import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("x1Z2xriKhmAzNAZ5yNdZYm6K3V2Yawis1jwxHcjCnKV")
const decoded = base58.decode('hrV8YGhUtFd7bBvBUV5oEbWMMAYjKKAigVGoq9Eo9fmmteHagy79YpyN6NAUAZ2jJaPgAK5fBH3Gtqqcpw3xkR9')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();