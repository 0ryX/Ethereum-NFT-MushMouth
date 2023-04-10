import { func } from 'prop-types';
import React from 'react';

const NavBar = ({ accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectionAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            {/* Letf Side - Social Media Icons */}
            <div>Opensea</div>
            <div>Instagram</div>
            <div>Twitter</div>

            {/* Right Side - Section and Connect*/}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {/* Connect */}
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectionAccount}>Connect</button>
            )}

        </div>
    );  
};

export default NavBar;