export const stakingAddress = "0x958478Ee0f342213A12F8f3d3b1703D274b0aEeC";
export const stakingAbi = [
    {
        inputs: [
            { internalType: "address", name: "_R2PIPToken", type: "address" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "description",
                type: "string",
            },
        ],
        name: "ProposalSubmitted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "referrer",
                type: "address",
            },
        ],
        name: "ReferralRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TokensLocked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TokensRedeemed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TokensStaked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TokensUnlocked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "Voted",
        type: "event",
    },
    {
        inputs: [],
        name: "R2PIPToken",
        outputs: [
            { internalType: "contract IBEP20", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "annualRewardRate",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "bonusTokensPer10Staked",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "earlyUnlockPenalty",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "executeProposals",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "proposalId", type: "uint256" },
        ],
        name: "getGovernanceProposal",
        outputs: [
            {
                components: [
                    { internalType: "string", name: "title", type: "string" },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "voteCount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "endTime",
                        type: "uint256",
                    },
                    { internalType: "bool", name: "executed", type: "bool" },
                    {
                        internalType: "address",
                        name: "proposer",
                        type: "address",
                    },
                ],
                internalType:
                    "struct R2PIncentiveStakingProgram.GovernanceProposal",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getGovernanceProposalCount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "staker", type: "address" }],
        name: "getReferrer",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "staker", type: "address" }],
        name: "getStakerProfile",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stakedBalance",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "lastUnlockTimestamp",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "lockedBalance",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tierLevel",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "referralCount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "stakingTimestamp",
                        type: "uint256",
                    },
                ],
                internalType: "struct R2PIncentiveStakingProgram.StakerProfile",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "staker", type: "address" }],
        name: "getStakingHistory",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                    },
                    { internalType: "string", name: "action", type: "string" },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType:
                    "struct R2PIncentiveStakingProgram.StakingTransaction[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "governanceProposals",
        outputs: [
            { internalType: "string", name: "title", type: "string" },
            { internalType: "string", name: "description", type: "string" },
            { internalType: "uint256", name: "voteCount", type: "uint256" },
            { internalType: "uint256", name: "endTime", type: "uint256" },
            { internalType: "bool", name: "executed", type: "bool" },
            { internalType: "address", name: "proposer", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "lockTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "maxStakePerDay",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxStakePerTransaction",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maximumLockDuration",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minimumLockDuration",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "redeemTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "referrer",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "rescueTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "stakeTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "stakerProfiles",
        outputs: [
            { internalType: "uint256", name: "stakedBalance", type: "uint256" },
            {
                internalType: "uint256",
                name: "lastUnlockTimestamp",
                type: "uint256",
            },
            { internalType: "uint256", name: "lockedBalance", type: "uint256" },
            { internalType: "uint256", name: "tierLevel", type: "uint256" },
            { internalType: "uint256", name: "referralCount", type: "uint256" },
            {
                internalType: "uint256",
                name: "stakingTimestamp",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "stakingHistory",
        outputs: [
            { internalType: "uint256", name: "timestamp", type: "uint256" },
            { internalType: "string", name: "action", type: "string" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "string", name: "title", type: "string" },
            { internalType: "string", name: "description", type: "string" },
        ],
        name: "submitProposal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unlockTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "proposalId", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
