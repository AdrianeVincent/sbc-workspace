import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('hrV8YGhUtFd7bBvBUV5oEbWMMAYjKKAigVGoq9Eo9fmmteHagy79YpyN6NAUAZ2jJaPgAK5fBH3Gtqqcpw3xkR9')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('x1Z2xriKhmAzNAZ5yNdZYm6K3V2Yawis1jwxHcjCnKV'); //PUBLIC KEY
    const publicKeyTo = new Web3.PublicKey('x1Z2xriKhmAzNAZ5yNdZYm6K3V2Yawis1jwxHcjCnKV');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();