export const usdtTokenAddress = "0xE5024deD321d741039558E5DB2e5F457d6E13c4A";
export const usdtTokenAbi = [
    { type: "constructor", stateMutability: "nonpayable", inputs: [] },
    {
        type: "error",
        name: "ERC20InsufficientAllowance",
        inputs: [
            { type: "address", name: "spender", internalType: "address" },
            { type: "uint256", name: "allowance", internalType: "uint256" },
            { type: "uint256", name: "needed", internalType: "uint256" },
        ],
    },
    {
        type: "error",
        name: "ERC20InsufficientBalance",
        inputs: [
            { type: "address", name: "sender", internalType: "address" },
            { type: "uint256", name: "balance", internalType: "uint256" },
            { type: "uint256", name: "needed", internalType: "uint256" },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidApprover",
        inputs: [
            { type: "address", name: "approver", internalType: "address" },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidReceiver",
        inputs: [
            { type: "address", name: "receiver", internalType: "address" },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidSender",
        inputs: [{ type: "address", name: "sender", internalType: "address" }],
    },
    {
        type: "error",
        name: "ERC20InvalidSpender",
        inputs: [{ type: "address", name: "spender", internalType: "address" }],
    },
    {
        type: "error",
        name: "OwnableInvalidOwner",
        inputs: [{ type: "address", name: "owner", internalType: "address" }],
    },
    {
        type: "error",
        name: "OwnableUnauthorizedAccount",
        inputs: [{ type: "address", name: "account", internalType: "address" }],
    },
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                type: "address",
                name: "owner",
                internalType: "address",
                indexed: true,
            },
            {
                type: "address",
                name: "spender",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "value",
                internalType: "uint256",
                indexed: false,
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
        name: "Transfer",
        inputs: [
            {
                type: "address",
                name: "from",
                internalType: "address",
                indexed: true,
            },
            {
                type: "address",
                name: "to",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "value",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "COMMUNITY_REWARDS_ALLOCATION",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "LIQUIDITY_POOL_ALLOCATION",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "MARKETING_PARTNERSHIPS_ALLOCATION",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "PRESALE_ALLOCATION",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "RESERVE_FUND_ALLOCATION",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "TEAM_ADVISORS_ALLOCATION",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "TEAM_VESTING_PERIOD",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "TEAM_VESTING_START",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "allowance",
        inputs: [
            { type: "address", name: "owner", internalType: "address" },
            { type: "address", name: "spender", internalType: "address" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "approve",
        inputs: [
            { type: "address", name: "spender", internalType: "address" },
            { type: "uint256", name: "value", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "balanceOf",
        inputs: [{ type: "address", name: "account", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "communityRewardsAddress",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
        name: "decimals",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "distributeTokens",
        inputs: [
            {
                type: "address",
                name: "_presaleAddress",
                internalType: "address",
            },
            {
                type: "address",
                name: "_liquidityPoolAddress",
                internalType: "address",
            },
            {
                type: "address",
                name: "_teamAdvisorsAddress",
                internalType: "address",
            },
            {
                type: "address",
                name: "_communityRewardsAddress",
                internalType: "address",
            },
            {
                type: "address",
                name: "_reserveFundAddress",
                internalType: "address",
            },
            {
                type: "address",
                name: "_marketingPartnershipsAddress",
                internalType: "address",
            },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "extContract",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "liquidityPoolAddress",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "marketingPartnershipsAddress",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "mintByContract",
        inputs: [
            { type: "address", name: "to", internalType: "address" },
            { type: "uint256", name: "amount", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "mintByOwner",
        inputs: [
            { type: "address", name: "to", internalType: "address" },
            { type: "uint256", name: "amount", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "string", name: "", internalType: "string" }],
        name: "name",
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
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "presaleAddress",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "releaseTeamTokens",
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
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "reserveFundAddress",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setContract",
        inputs: [
            { type: "address", name: "_contract", internalType: "address" },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "string", name: "", internalType: "string" }],
        name: "symbol",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "teamAdvisorsAddress",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "teamLockTime",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "totalSupply",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "transfer",
        inputs: [
            { type: "address", name: "to", internalType: "address" },
            { type: "uint256", name: "value", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "transferFrom",
        inputs: [
            { type: "address", name: "from", internalType: "address" },
            { type: "address", name: "to", internalType: "address" },
            { type: "uint256", name: "value", internalType: "uint256" },
        ],
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
];
