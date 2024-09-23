import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Web3 from "web3";
import { stakingAbi, stakingAddress } from "../../contract/stakingContract";
import { AuthUserContext } from "../../conext";
import { toast } from "react-toastify";
export default function Stack() {
    const { pathname } = useLocation();
    const web3 = new Web3(window.ethereum);
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState(false);
    const [addressValidationError, setAddressValidationError] = useState(false);
    const { walletAddress } = useContext(AuthUserContext);
    const [registerLoading, setRegisterLoading] = useState(false);
    const satkingIntegrateContract = () => {
        const staking_Contract = new web3.eth.Contract(
            stakingAbi,
            stakingAddress
        );
        return staking_Contract;
    };
    const validateAddress = (address) => {
        const regex = /^0x[a-fA-F0-9]{40}$/; 
        return regex.test(address);
    };
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
                        <span className="text-gray-400 px-4">Token Price</span>
                        <span className="font-bold text-xl px-4">0</span>
                    </div>
                    <div className="flex justify-between rounded-full items-center  py-2 border gap-5 w-full">
                        <span className="text-gray-400 px-4">NFT Supply</span>
                        <span className="font-bold text-xl px-4">0</span>
                    </div>
                    <div className="flex justify-between rounded-full items-center py-2 border gap-5 w-full">
                        <span className="text-gray-400 px-4">NFT Balance</span>
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
                    <input
                        type="text"
                        placeholder="0xB705D6c5d857F7A34ECDF5C7F12550c99A67ee7f"
                        className="w-full mb-4 p-3 rounded-lg bg-gray-700 text-white"
                        disabled
                    />
                    <input
                        type="number"
                        placeholder="0"
                        className="w-full mb-4 p-3 rounded-lg bg-gray-700 text-white"
                    />

                    <div className="flex flex-col md:flex-row gap-5 justify-between">
                        <button className="bg-transparent text-white border font-bold px-6 py-2 rounded-lg shadow-md">
                            Approve
                        </button>
                        <button className="bg-red1 text-white font-bold px-6 py-2 rounded-lg shadow-md">
                            Mint
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
