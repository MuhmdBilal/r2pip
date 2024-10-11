import React, { useContext, useEffect } from 'react'
import {
    useWeb3ModalAccount,
    createWeb3Modal,
    defaultConfig,
  } from "@web3modal/ethers/react";
import { AuthUserContext } from './conext';

  const projectId = "57c3ed3f7633af987eda789d503edfee";
const chains = [
  {
    chainId: 71111,
    name: "GuapcoinX",
    currency: "GuapX",
    explorerUrl: "",
    rpcUrl: "https://rpc-mainnet-2.guapcoinx.com",
  },
];

const ethersConfig = defaultConfig({
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  defaultChainId: 1,
  rpcUrl: "https://cloudflare-eth.com",
});
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#E85529",
  }
});
const WalletConnection = () => {
    const { setWalletAddress } = useContext(AuthUserContext);
    const { address, chainId } = useWeb3ModalAccount();
    useEffect(()=>{
        setWalletAddress(address)
    },[address])
  return (
    <div className="d-flex justify-content-center" >
      <div className='p-0' style={{ backgroundColor: '#E85529', color: 'white', borderRadius: '5px' }}>
        <w3m-button />
      </div>
    </div>
  )
}

export default WalletConnection