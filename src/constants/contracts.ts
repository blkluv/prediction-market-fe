import { getContract } from 'thirdweb';
import { client } from '@/app/client';
import { baseSepolia } from 'thirdweb/chains';
export const predictionMarketContractAddress = "0xA77048Fd25246acf860B3e728B119a4808859F0d" ;
export const tokenContractAddress = "0x81128b3E0828DaeCC78d2DeBdb6b681F2DBBAcc4" ;


export const predictionMarketContract = getContract({
    client: client,
    chain: baseSepolia,
    address: predictionMarketContractAddress,
})

export const tokenContract = getContract({
    client: client,
    chain: baseSepolia,
    address: tokenContractAddress,
})