import {ethers} from 'ethers'
import { ABI as minABI } from '../assets/ContractABI/ERC20';

const provider=new ethers.BrowserProvider(window.ethereum);

// The ABI for the balanceOf function
// const minABI = [
//     {
//     "constant": true,
//     "inputs": [{ "name": "_owner", "type": "address" }],
//     "name": "balanceOf",
//     "outputs": [{ "name": "balance", "type": "uint256" }],
//     "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "name",
//         "outputs": [{ "name": "", "type": "string" }],
//         "type": "function"
//     },
//     {
//     "constant": true,
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [{ "name": "", "type": "uint8" }],
//     "type": "function"
//   }
// ];

export const Token_Decimals=18;
export const stakingToken="0x1ddbB18ECf92d02Bb386224F0d160f30305150dD";
//export const stakingToken="0x3bA4c4348A6731785fB7fe38894472aDF48727f4"; //TestNet

export async function getERC20Balance(accountAddress,tokenAddress){
    // Create a contract instance
    const contract = new ethers.Contract(tokenAddress, minABI, provider);
    
    // Get the balance
    const balance = await contract.balanceOf(accountAddress);
    const tokenName=await contract.name()
    console.log(balance)
    console.log(`${tokenName} Balance for ${tokenAddress} : ` + ethers.formatUnits(balance, Token_Decimals));

    return ethers.formatUnits(balance, Token_Decimals);
}

export async function getERC20Name(tokenAddress){
    const contract = new ethers.Contract(tokenAddress, minABI, provider);
    const tokenName=await contract.name()

    return "Tensor";
}

export async function approveTransfer(tokenAddress,amount,spender,signer){
    console.log(`Approving ${amount} with ${signer}`)
    const tokenContract = new ethers.Contract(tokenAddress, minABI, signer);
    const decimals=await tokenContract.decimals()
    console.log("Token decimals : ",decimals)

    const numberOfTokens = ethers.parseUnits(amount.toString(), decimals);
    console.log("No of tokens : ",numberOfTokens.toString());
    const tx = await tokenContract.approve(spender, numberOfTokens);
    await tx.wait();
    console.log("Approved")
}