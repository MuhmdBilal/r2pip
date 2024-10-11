export const stakingAddress = "0x87cb4087D5e6B8693E03c6b3981F53eE11B7BF84";
export const stakingAbi = [
    {
        type: "constructor",
        stateMutability: "nonpayable",
        inputs: [
            { type: "address", name: "_R2PIPToken", internalType: "address" },
        ],
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
        name: "ProposalSubmitted",
        inputs: [
            {
                type: "uint256",
                name: "proposalId",
                internalType: "uint256",
                indexed: true,
            },
            {
                type: "string",
                name: "description",
                internalType: "string",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ReferralRegistered",
        inputs: [
            {
                type: "address",
                name: "staker",
                internalType: "address",
                indexed: true,
            },
            {
                type: "address",
                name: "referrer",
                internalType: "address",
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TokensRedeemed",
        inputs: [
            {
                type: "address",
                name: "staker",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "amount",
                internalType: "uint256",
                indexed: false,
            },
            {
                type: "uint256",
                name: "reward",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TokensStaked",
        inputs: [
            {
                type: "address",
                name: "staker",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "amount",
                internalType: "uint256",
                indexed: false,
            },
            {
                type: "uint256",
                name: "lockDuration",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TokensUnlocked",
        inputs: [
            {
                type: "address",
                name: "staker",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "amount",
                internalType: "uint256",
                indexed: false,
            },
            {
                type: "uint256",
                name: "penaltyCharged",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Voted",
        inputs: [
            {
                type: "address",
                name: "staker",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "proposalId",
                internalType: "uint256",
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "address", name: "", internalType: "contract IBEP20" },
        ],
        name: "R2PIPToken",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "annualRewardRate",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "bonusTokensPer10Staked",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "earlyUnlockPenalty",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "executeProposals",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "getGovernanceProposalsCount",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256[]", name: "", internalType: "uint256[]" }],
        name: "getRemainingStakeTime",
        inputs: [{ type: "address", name: "staker", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            {
                type: "tuple[]",
                name: "",
                internalType: "struct R2PIncentiveStakingProgram.Stake[]",
                components: [
                    {
                        type: "uint256",
                        name: "amount",
                        internalType: "uint256",
                    },
                    {
                        type: "uint256",
                        name: "timestamp",
                        internalType: "uint256",
                    },
                    {
                        type: "uint256",
                        name: "lockDuration",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        name: "getStakes",
        inputs: [{ type: "address", name: "staker", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "getStakingHistoryCount",
        inputs: [{ type: "address", name: "staker", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "uint256", name: "totalStaked", internalType: "uint256" },
        ],
        name: "getTotalStaked",
        inputs: [{ type: "address", name: "staker", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "uint256", name: "rewards", internalType: "uint256" },
        ],
        name: "getUserRewards",
        inputs: [{ type: "address", name: "staker", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "string", name: "title", internalType: "string" },
            { type: "string", name: "description", internalType: "string" },
            { type: "uint256", name: "voteCount", internalType: "uint256" },
            { type: "uint256", name: "endTime", internalType: "uint256" },
            { type: "bool", name: "executed", internalType: "bool" },
            { type: "address", name: "proposer", internalType: "address" },
        ],
        name: "governanceProposals",
        inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "hasUnlockedTokens",
        inputs: [{ type: "address", name: "", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "maxStakePerDay",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "maxStakePerTransaction",
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
        name: "redeemTokens",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "referrer",
        inputs: [{ type: "address", name: "", internalType: "address" }],
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
        name: "rescueTokens",
        inputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "stakeTokens",
        inputs: [
            { type: "uint256", name: "amount", internalType: "uint256" },
            { type: "uint256", name: "lockDuration", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "uint256", name: "lockedBalance", internalType: "uint256" },
            { type: "uint256", name: "tierLevel", internalType: "uint256" },
            { type: "uint256", name: "referralCount", internalType: "uint256" },
            {
                type: "uint256",
                name: "stakingTimestamp",
                internalType: "uint256",
            },
        ],
        name: "stakerProfiles",
        inputs: [{ type: "address", name: "", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "uint256", name: "timestamp", internalType: "uint256" },
            { type: "string", name: "action", internalType: "string" },
            { type: "uint256", name: "amount", internalType: "uint256" },
        ],
        name: "stakingHistory",
        inputs: [
            { type: "address", name: "", internalType: "address" },
            { type: "uint256", name: "", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "submitProposal",
        inputs: [
            { type: "string", name: "title", internalType: "string" },
            { type: "string", name: "description", internalType: "string" },
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
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "unlockTokens",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "userProposals",
        inputs: [
            { type: "address", name: "", internalType: "address" },
            { type: "uint256", name: "", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "vote",
        inputs: [
            { type: "uint256", name: "proposalId", internalType: "uint256" },
            { type: "uint256", name: "amount", internalType: "uint256" },
        ],
    },
];
