import { MaxUint256 } from 'ethers';
import { isHexString, getNumber, randomBytes, keccak256, toBeHex, toBigInt, ethers } from 'ethers'

export async function mineGasForTransaction(
	nonce: string | number,
	gas: string | number,
	from: string
): Promise<{
		duration: number;
		gasPrice: bigint;
}> {
	let address = from
	nonce = isHexString(nonce) ? getNumber(nonce) : (nonce as number)
	gas = isHexString(gas) ? getNumber(gas) : (gas as number)
	return await mineFreeGas(gas as number, address, nonce as number)
}

async function mineFreeGas(gasAmount: number, address: string, nonce: number): Promise<{
	duration: number;
	gasPrice: bigint;
}> {
    let nonceHash = toBigInt(keccak256(toBeHex(nonce, 32)));
    let addressHash = toBigInt(keccak256(address));
    let nonceAddressXOR = nonceHash ^ addressHash;
    let divConstant = MaxUint256;
    let candidate: Uint8Array;
    let iterations = 0;
    
    const start = performance.now();
    
    while (true) {
      candidate = randomBytes(32)
      let candidateHash = toBigInt(keccak256(candidate));
      let resultHash = nonceAddressXOR ^ candidateHash;
      let externalGas = divConstant / resultHash;
      
      if (externalGas >= gasAmount) {
        break;
      }
      // every 2k iterations, yield to the event loop
      if (iterations++ % 1_000 === 0) {
        await new Promise<void>((resolve) => setTimeout(resolve, 0));
      }
    }
    
    const end = performance.now();
    
    return {
    	duration: start - end,
    	gasPrice: toBigInt(candidate)
    }
  }