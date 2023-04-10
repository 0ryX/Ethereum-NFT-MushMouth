import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import MushMouthNFT from './MushMouthNFT.json';

const MushMouthNFTAddress = "0x31FA58eA37b0D532112fE5EB07577431b7201053";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                MushMouthNFTAddress,
                MushMouthNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log("response: ", response);
            } catch (err) {
                console.log("error ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
        if (mintAmount <= 3) return;
        setMintAmount(mintAmount + 1);
    };
    return (
        <div>
            <h1>MushMouth</h1>
            <p>MushMouth NFT's are inspired by the cube loving NFT community. Mint yours today to show support</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>You must be connected to Mint.</p>
            )}
        </div>
    );
};

export default MainMint;