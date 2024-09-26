import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Web3 from "web3";
import { stakingAbi, stakingAddress } from "../../contract/stakingContract";
import { AuthUserContext } from "../../conext";
import { toast } from "react-toastify";
import { tokenAbi, tokenAddress } from "../../contract/tokenContract";
export default function Stack() {
    const { pathname } = useLocation();
    const web3 = new Web3(window.ethereum);
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState(false);
    const [addressValidationError, setAddressValidationError] = useState(false);
    const { walletAddress } = useContext(AuthUserContext);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [stakingError, setStakingError] = useState(false);
    const [value, setValue] = useState("");
    const [stakingLoading, setStakingLoading] = useState(false);
    const [redeemLoading, setRedeemLoading] = useState(false);
    const [unlockLoading, setUnlockLoading] = useState(false);
    const [tokenBalance, setTokenBalance] = useState(0);
    const [totalStaked, setTotalStaked] = useState(0);
    const [reeeDisable,setRedeemDisable] = useState(true);
    const [lockDuration,setLockDuration] = useState('')
    const satkingIntegrateContract = () => {
        const staking_Contract = new web3.eth.Contract(
            stakingAbi,
            stakingAddress
        );
        return staking_Contract;
    };
    const tokenIntegrateContract = () => {
        const token_Contract = new web3.eth.Contract(tokenAbi, tokenAddress);
        return token_Contract;
    };
    const validateAddress = (address) => {
        const regex = /^0x[a-fA-F0-9]{40}$/;
        return regex.test(address);
    };
    const handleStaking = async () => {
        try {
            const tokenContract = tokenIntegrateContract();
            const stakingCOntract = satkingIntegrateContract();
            if (!value || !lockDuration) {
                setStakingError(true);
                return;
            }
            const currentTime = new Date();
        const lockTime = new Date(lockDuration);
        const lockDurationInSeconds = Math.floor((lockTime.getTime() - currentTime.getTime()) / 1000);
            const weiValue = web3.utils.toWei(value, "ether");
            if (walletAddress) {
                setStakingLoading(true);
                await tokenContract.methods
                    .approve(stakingAddress, weiValue)
                    .send({ from: walletAddress });
                const stakeTokens = await stakingCOntract.methods
                    .stakeTokens(weiValue, lockDurationInSeconds)
                    .send({ from: walletAddress });
                if (stakeTokens) {
                    toast.success("Tokens Staked Successfully!");
                    setValue("");
                    setStakingError(false);
                    getValue()
                }
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setStakingLoading(false);
        }
    };
    const handleRedeemTokens = async () => {
        try {
            const stakingCOntract = satkingIntegrateContract();
            if (walletAddress) {
                setRedeemLoading(true);
                const redeemTokens = await stakingCOntract.methods
                    .redeemTokens()
                    .send({ from: walletAddress });
                if (redeemTokens) {
                    toast.success("Tokens Redeem Successfully!");
                }
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setRedeemLoading(false);
        }
    };
    const handleUnlockTokens = async () => {
        try {
            const stakingCOntract = satkingIntegrateContract();
            if (walletAddress) {
                if(totalStaked > 0){
                    setUnlockLoading(true);
                const unlockTokens = await stakingCOntract.methods
                    .unlockTokens()
                    .send({ from: walletAddress });
                if (unlockTokens) {
                    toast.success("Tokens Unlocked Successfully!");
                    setRedeemDisable(false)
                    getValue();
                }
                } else{
                    toast.error("You must stake tokens before unlocking them!");
                }
                
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setUnlockLoading(false);
        }
    };
    const getValue = async () => {
        try {
            const tokenContract = tokenIntegrateContract();
            const stakingCOntract = satkingIntegrateContract();
            if (walletAddress) {
                let getTotalStaked = await stakingCOntract.methods
                    .getTotalStaked(walletAddress)
                    .call();
                getTotalStaked = Number(getTotalStaked) / 1e18;
                setTotalStaked(getTotalStaked.toFixed(3));
                let tokenBalance = await tokenContract.methods
                    .balanceOf(walletAddress)
                    .call();
                tokenBalance = Number(tokenBalance) / 1e18;
                setTokenBalance(tokenBalance.toFixed(3));
            }
        } catch (e) {
            console.log("e", e);
        }
    };
    useEffect(()=>{
        getValue()
    },[walletAddress])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const handleRegister = async () => {
        try {
            setAddressValidationError(false);
            const stakingCOntract = satkingIntegrateContract();
            if (!address) {
                setAddressError(true);
                return;
            }
            if (!validateAddress(address)) {
                setAddressValidationError(true);
                return;
            }
            if (walletAddress) {
                if (address === walletAddress) {
                    toast.error("Please Use Another Address");
                } else {
                    setRegisterLoading(true);
                    const registerReferral = await stakingCOntract.methods
                        .registerReferral(address)
                        .send({ from: walletAddress });
                    if (registerReferral) {
                        toast.success("Referral successfully registered.");
                        setAddress("");
                    }
                }
            } else {
                toast.error("Please Wallet Connect First!");
            }
        } catch (e) {
            console.log("e", e);
        } finally {
            setRegisterLoading(false);
        }
    };
    return (
        <div className="flex flex-col mt-14 items-center w-full justify-center h-full">
            <h6 className="flex justify-center items-center text-[30px] md:text-[40px] lg:text-[50px] w-full font-extrabold text-red1 mb-2 md:mb-5">
                Shop With R2PIP
            </h6>
            <div className=" flex flex-col justify-center items-center bg-black text-white p-6 w-full max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between gap-12 w-full  rounded-lg my-8">
                    <div className="flex justify-between rounded-full items-center  py-2 border gap-5 w-full">
                        <span className=" px-4 font-semibold">
                            R2PIP Price
                        </span>
                        <span className="font-bold text-xl px-4">
                            {tokenBalance}
                        </span>
                    </div>
                    <div className="flex justify-between rounded-full items-center  py-2 border gap-5 w-full">
                        <span className=" px-4 font-semibold">Total Staked</span>
                        <span className="font-bold text-xl px-4">
                            {totalStaked}
                        </span>
                    </div>
                    <div className="flex justify-between rounded-full items-center py-2 border gap-5 w-full">
                        <span className=" px-4 font-semibold">NFT Balance</span>
                        <span className="font-bold text-xl px-4">0</span>
                    </div>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg  w-full mb-5">
                    <h6 className="flex justify-start items-center text-[15px] md:text-[15px] lg:text-[25px] w-full font-extrabold text-white mb-4 md:mb-5">
                        Register Referral
                    </h6>
                    <input
                        type="text"
                        placeholder="Enter Address"
                        className="w-full mb-2 p-3 rounded-lg bg-gray-700 text-white"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {addressError && !address ? (
                        <span className="error-message">
                            Please Enter Address
                        </span>
                    ) : (
                        addressValidationError && (
                            <span className="error-message text-red-500">
                                Please enter a valid address.
                            </span>
                        )
                    )}
                    <div className="flex flex-col md:flex-row gap-5 justify-center mt-4">
                        <button
                            className="bg-red1 text-white font-bold px-20 py-2 rounded-lg shadow-md"
                            onClick={handleRegister}
                            disabled={registerLoading}
                        >
                            {registerLoading ? "Loading..." : "Register"}
                        </button>
                    </div>
                </div>
                {/* Form Section */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg  w-full">
                    {/* <input
                        type="text"
                        placeholder="0xB705D6c5d857F7A34ECDF5C7F12550c99A67ee7f"
                        className="w-full mb-4 p-3 rounded-lg bg-gray-700 text-white"
                        disabled
                    /> */}
                    <label className="text-white font-medium">Enter Amount</label>
                    <input
                        type="number"
                        placeholder="0"
                        className="w-full mb-1 p-3 rounded-lg bg-gray-700 text-white"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {stakingError && !value && (
                        <span className="error-message">
                            Please Enter Amount
                        </span>
                    )}
                    <div>
                    <label className="text-white font-medium mt-3">Enter Lock Duration</label>
                    <input
                        type="date"
                        placeholder="0"
                        className="w-full mb-1 p-3 rounded-lg bg-gray-700 text-white"
                        value={lockDuration}
                        onChange={(e) => setLockDuration(e.target.value)}
                    />
                    {stakingError && !lockDuration && (
                        <span className="error-message">
                            Please Enter Lock Duration
                        </span>
                    )}  
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-5 justify-center mt-4">
                        <button
                            className="bg-red1 text-white font-bold px-10 md:px-20  py-2 rounded-lg shadow-md"
                            onClick={handleStaking}
                            disabled={registerLoading}
                        >
                            {stakingLoading ? "Loading..." : "Staking"}
                        </button>
                        <button
                            className="bg-red1 text-white text-nowrap font-bold px-10 md:px-20  py-2 rounded-lg shadow-md"
                            onClick={handleUnlockTokens}
                            disabled={unlockLoading}
                        >
                            {unlockLoading ? "Loading..." : "Unlock Tokens"}
                        </button>
                        <button
                            className={redeemLoading ? "bg-red2 text-white text-nowrap font-bold px-10 md:px-20 py-2 rounded-lg shadow-md" : "bg-red1 text-white font-bold px-10 md:px-20 text-nowrap py-2 rounded-lg shadow-md"}
                            onClick={handleRedeemTokens}
                            disabled={redeemLoading}
                        >
                            {redeemLoading ? "Loading..." : "Redeem Tokens"}
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
