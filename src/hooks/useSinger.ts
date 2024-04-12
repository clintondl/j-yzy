import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export function useSigner() {
    const [signer, setSigner] = useState(null);

    useEffect(() => {
        async function getSigner() {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                setSigner(signer);
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        }

        getSigner();
    }, []);

    return signer;
}
