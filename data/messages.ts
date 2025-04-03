import { Agent, AGENT_SWAVV, AGENT_YIELDO } from './agents';

type Message = {
  id: number;
  type: 'user' | 'agent';
  agent?: Agent;
  text: string;
  toolName?: string;
  metadata?: {
    [key: string]: unknown;
  };
};

export const MESSAGES: Message[] = [
  {
    id: 1,
    type: 'user',
    text: '@Agent token list',
  },
  {
    id: 2,
    type: 'agent',
    agent: AGENT_YIELDO,
    text: 'Here is the token list',
    toolName: 'TokenList',
    metadata: {
      tokens: [
        {
          name: 'TKA',
          amount: 1000,
        },
        {
          name: 'TKB',
          amount: 500,
        },
        {
          name: 'TKC',
          amount: 250,
        },
        {
          name: 'TKD',
          amount: 0,
        },
        {
          name: 'TKE',
          amount: 0,
        },
      ],
    },
  },
  {
    id: 3,
    type: 'user',
    text: '@Agent I want to swap TKA to TKB',
  },
  {
    id: 4,
    type: 'agent',
    agent: AGENT_SWAVV,
    text: 'Here is the swap transaction form',
    toolName: 'SwapForm',
    metadata: {
      feeUnit: 'USD',
      providersFee: 0.001,
      networkFee: 0.123,

      fromToken: {
        name: 'TKA',
        amount: 0,
        tokenPerUSD: 0.04,
      },
      toToken: {
        name: 'TKB',
        tokenPerUSD: 0.0292,
      },
    },
  },
  {
    id: 5,
    type: 'user',
    text: '@Agent I want to swap 100 TKA to TKB',
  },
  {
    id: 6,
    type: 'agent',
    agent: AGENT_SWAVV,
    text: 'Swap transaction successfully submitted',
    toolName: 'SwapResult',
    metadata: {
      tx: '0x1234567890abcdef1234567890abcdef12345678',
      state: 'success',

      feeUnit: 'USD',
      providersFee: 0.001,
      networkFee: 0.123,

      fromToken: {
        name: 'TKA',
        amount: 100,
        tokenPerUSD: 0.04,
      },
      toToken: {
        name: 'TKB',
        amount: 200,
        tokenPerUSD: 0.0292,
      },
    },
  },
  {
    id: 7,
    type: 'user',
    text: '@Agent show me the Liquid Pool',
  },
  {
    id: 8,
    type: 'agent',
    agent: AGENT_YIELDO,
    text: 'Here is the Liquid Pool information',
    toolName: 'LiquidPools',
    metadata: {
      pools: [
        {
          name: 'TKA-TKB',
          tokenSymbols: ['TKA', 'TKB'],
          apy: 0.05,
          tvl: 8240000,
          fee: 2.0,
        },
        {
          name: 'TKC-TKD',
          tokenSymbols: ['TKC', 'TKD'],
          apy: 0.03,
          tvl: 5000000,
          fee: 1.5,
        },
        {
          name: 'TKE-TKA',
          tokenSymbols: ['TKE', 'TKA'],
          apy: 0.04,
          tvl: 3000000,
          fee: 2.5,
        },
        {
          name: 'TKB-TKC',
          tokenSymbols: ['TKB', 'TKC'],
          apy: 0.06,
          tvl: 2000000,
          fee: 1.0,
        },
        {
          name: 'TKD-TKE',
          tokenSymbols: ['TKD', 'TKE'],
          apy: 0.02,
          tvl: 1000000,
          fee: 1.5,
        },
      ],
    },
  },
  {
    id: 9,
    type: 'user',
    text: '@Agent i want to sign Marinade pool transaction',
  },
  {
    id: 10,
    type: 'agent',
    agent: AGENT_YIELDO,
    text: 'Here is the Marinade pool information',
    toolName: 'TransactionConfirm',
    metadata: {
      poolName: 'Marinade',
      amount: 100,
      tokenSymbol: 'mSOL',
    },
  },
  {
    id: 11,
    type: 'user',
    text: '@Agent confirm',
  },
  {
    id: 12,
    type: 'agent',
    agent: AGENT_YIELDO,
    text: 'Marinade pool transaction successfully submitted',
    toolName: 'TransactionResult',
    metadata: {
      tx: '0x1234567890abcdef1234567890abcdef12345678',
      state: 'success',
      poolName: 'Marinade',
      amount: 100,
      tokenSymbol: 'mSOL',
    },
  },
  {
    id: 13,
    type: 'user',
    text: '@Agent Could you display my liquidity positions?',
  },
  {
    id: 14,
    type: 'agent',
    agent: AGENT_YIELDO,
    text: 'Here are your liquidity positions',
    toolName: 'LiquidPoolPositions',
    metadata: {
      pools: [
        {
          name: 'TKA-TKB',
          tokenSymbols: ['TKA', 'TKB'],
          apy: 0.05,
          amount: 1000,
          value: 50000,
          reward: 0.1,
        },
        {
          name: 'TKC-TKD',
          tokenSymbols: ['TKC', 'TKD'],
          apy: 0.03,
          amount: 500,
          value: 25000,
          reward: 0.05,
        },
        {
          name: 'TKE-TKA',
          tokenSymbols: ['TKE', 'TKA'],
          apy: 0.04,
          amount: 300,
          value: 15000,
          reward: 0.02,
        },
        {
          name: 'TKB-TKC',
          tokenSymbols: ['TKB', 'TKC'],
          apy: 0.06,
          amount: 200,
          value: 10000,
          reward: 0.03,
        },
        {
          name: 'TKD-TKE',
          tokenSymbols: ['TKD', 'TKE'],
          apy: 0.02,
          amount: 100,
          value: 5000,
          reward: 0.01,
        },
      ],
    },
  },
];
