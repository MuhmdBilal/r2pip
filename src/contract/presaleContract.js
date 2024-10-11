export const presaleAddress = "0xB63dbD1A286717B0DC18EF616A445Fb771D2Dd22";
export const presaleAbi = [
    {
        type: "constructor",
        stateMutability: "nonpayable",
        inputs: [
            { type: "address", name: "_R2PIP", internalType: "address" },
            { type: "address", name: "_usdtToken", internalType: "address" },
            { type: "address", name: "_fundReceiver", internalType: "address" },
            { type: "uint256", name: "_bnbRate", internalType: "uint256" },
            { type: "uint256", name: "_usdtRate", internalType: "uint256" },
        ],
    },
    {
        type: "event",
        name: "FundReceiverUpdated",
        inputs: [
            {
                type: "address",
                name: "newReceiver",
                internalType: "address",
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                type: "address",
                name: "previousOwner",
                internalType: "address",
                indexed: true,
            },
            {
                type: "address",
                name: "newOwner",
                internalType: "address",
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "PresaleStatusUpdated",
        inputs: [
            {
                type: "bool",
                name: "isOpen",
                internalType: "bool",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RateUpdated",
        inputs: [
            {
                type: "string",
                name: "currency",
                internalType: "string",
                indexed: false,
            },
            {
                type: "uint256",
                name: "newRate",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TokensPurchasedWithBNB",
        inputs: [
            {
                type: "address",
                name: "buyer",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "bnbSpent",
                internalType: "uint256",
                indexed: false,
            },
            {
                type: "uint256",
                name: "tokensReceived",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TokensPurchasedWithUSDT",
        inputs: [
            {
                type: "address",
                name: "buyer",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "usdtSpent",
                internalType: "uint256",
                indexed: false,
            },
            {
                type: "uint256",
                name: "tokensReceived",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TokensWithdrawn",
        inputs: [
            {
                type: "address",
                name: "by",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "amount",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "USDTAddressUpdated",
        inputs: [
            {
                type: "address",
                name: "newUSDTAddress",
                internalType: "address",
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "USDTWithdrawn",
        inputs: [
            {
                type: "address",
                name: "by",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "amount",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "address", name: "", internalType: "contract IERC20" },
        ],
        name: "R2PIP",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "payable",
        outputs: [],
        name: "buyTokensWithBNB",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "buyTokensWithUSDT",
        inputs: [
            { type: "uint256", name: "usdtAmount", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "fundReceiver",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "uint256", name: "bnb", internalType: "uint256" },
            { type: "uint256", name: "usdt", internalType: "uint256" },
        ],
        name: "getRates",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "uint256", name: "totalBNB", internalType: "uint256" },
            { type: "uint256", name: "totalUSD", internalType: "uint256" },
        ],
        name: "getTotalRaised",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "isPresaleOpen",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "owner",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "renounceOwnership",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setPresaleOpen",
        inputs: [{ type: "bool", name: "_isOpen", internalType: "bool" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "totalBNBRaised",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "totalTokensSold",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "totalUSDRaised",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "transferOwnership",
        inputs: [
            { type: "address", name: "newOwner", internalType: "address" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "updateBNBRate",
        inputs: [
            { type: "uint256", name: "_newRate", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "updateFundReceiver",
        inputs: [
            { type: "address", name: "_newReceiver", internalType: "address" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "updateUSDRate",
        inputs: [
            { type: "uint256", name: "_newRate", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "updateUSDTAddress",
        inputs: [
            {
                type: "address",
                name: "_newUSDTAddress",
                internalType: "address",
            },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "address", name: "", internalType: "contract IERC20" },
        ],
        name: "usdtToken",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "withdrawTokens",
        inputs: [{ type: "uint256", name: "_amount", internalType: "uint256" }],
    },
];
