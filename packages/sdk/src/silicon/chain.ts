
export interface HbChain {
  id: number;
  name: string;
  nativeCurrency: HbChainNativeCurrency;
  rpcUrls: {
    [key: string]: HbChainRpcUrls;
    default: HbChainRpcUrls;
  };
  blockExplorers?:
    | {
        [key: string]: HbChainBlockExplorer;
        default: HbChainBlockExplorer;
      }
    | undefined;

  logoURI: string;
}

export interface HbChainNativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface HbChainRpcUrls {
  http: readonly string[];
  webSocket?: readonly string[] | undefined;
  ws?: readonly string[] | undefined;
}

export type HbChainBlockExplorer = {
  name: string;
  url: string;
  apiUrl?: string | undefined;
  blockExplorerApi?: string | undefined;
};


export const Abey: HbChain = {
  id: 179,
  name: "ABEY Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ABEY",
  symbol: "ABEY",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.abeychain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Abey Scan",
    url: "https://abeyscan.com"
  }
}
}

export const AbstractTestnet: HbChain = {
  id: 11124,
  name: "Abstract Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.testnet.abs.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Abstract Block Explorer",
    url: "https://sepolia.abscan.org"
  }
}
}

export const Acala: HbChain = {
  id: 787,
  name: "Acala",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Acala",
  symbol: "ACA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://eth-rpc-acala.aca-api.network"
    ],
    webSocket: [
      "wss://eth-rpc-acala.aca-api.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Acala Blockscout",
    url: "https://blockscout.acala.network",
    apiUrl: "https://blockscout.acala.network/api"
  }
}
}

export const Acria: HbChain = {
  id: 47,
  name: "Acria IntelliChain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ACRIA",
  symbol: "ACRIA"
},
  rpcUrls: {
  default: {
    http: [
      "https://aic.acria.ai"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Acria Explorer",
    url: "https://explorer.acria.ai"
  }
}
}

export const Adf: HbChain = {
  id: 1215,
  name: "ADF Chain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ADDFILL",
  symbol: "ADF",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.adftechnology.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ADF Mainnet Explorer",
    url: "https://explorer.adftechnology.com"
  }
}
}

export const Aioz: HbChain = {
  id: 168,
  name: "AIOZ Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "AIOZ",
  symbol: "AIOZ"
},
  rpcUrls: {
  default: {
    http: [
      "https://eth-dataseed.aioz.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "AIOZ Explorer",
    url: "https://explorer.aioz.network"
  }
}
}

export const AlephZero: HbChain = {
  id: 41455,
  name: "Aleph Zero",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Aleph Zero",
  symbol: "AZERO",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.alephzero.raas.gelato.cloud"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Aleph Zero EVM Explorer",
    url: "https://evm-explorer.alephzero.org",
    apiUrl: "https://evm-explorer.alephzero.org/api"
  }
}
}

export const AlephZeroTestnet: HbChain = {
  id: 2039,
  name: "Aleph Zero Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "TZERO",
  symbol: "TZERO",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.alephzero-testnet.gelato.digital"
    ],
    webSocket: [
      "wss://ws.alephzero-testnet.gelato.digital"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Aleph Zero EVM Testnet explorer",
    url: "https://evm-explorer-testnet.alephzero.org",
    apiUrl: "https://evm-explorer-testnet.alephzero.org/api"
  }
}
}

export const Alienx: HbChain = {
  id: 10241024,
  name: "AlienX Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.alienxchain.io/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "AlienX Explorer",
    url: "https://explorer.alienxchain.io"
  }
}
}

export const AlienxHalTestnet: HbChain = {
  id: 10241025,
  name: "ALIENX Hal Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://hal-rpc.alienxchain.io/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "AlienX Explorer",
    url: "https://hal-explorer.alienxchain.io"
  }
}
}

export const Ancient8: HbChain = {
  id: 888888888,
  name: "Ancient8",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ancient8.gg"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ancient8 explorer",
    url: "https://scan.ancient8.gg",
    apiUrl: "https://scan.ancient8.gg/api"
  }
}
}

export const Ancient8Sepolia: HbChain = {
  id: 28122024,
  name: "Ancient8 Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpcv2-testnet.ancient8.gg"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ancient8 Celestia Testnet explorer",
    url: "https://scanv2-testnet.ancient8.gg",
    apiUrl: "https://scanv2-testnet.ancient8.gg/api"
  }
}
}

export const Anvil: HbChain = {
  id: 31337,
  name: "Anvil",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "http://127.0.0.1:8545"
    ],
    webSocket: [
      "ws://127.0.0.1:8545"
    ]
  }
},
}

export const ApeChain: HbChain = {
  id: 33139,
  name: "Ape Chain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_apechain.jpg",
  nativeCurrency: {
  name: "ApeCoin",
  symbol: "APE",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.apechain.com/http"
    ],
    webSocket: [
      "wss://rpc.apechain.com/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Apescan",
    url: "https://apescan.io",
    apiUrl: "https://api.apescan.io/api"
  }
}
}

export const ApexTestnet: HbChain = {
  id: 3993,
  name: "APEX Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-testnet.apexlayer.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://exp-testnet.apexlayer.xyz",
    apiUrl: "https://exp-testnet.apexlayer.xyz/api"
  }
}
}

export const Arbitrum: HbChain = {
  id: 42161,
  name: "Arbitrum One",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://arb1.arbitrum.io/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Arbiscan",
    url: "https://arbiscan.io",
    apiUrl: "https://api.arbiscan.io/api"
  }
}
}

export const ArbitrumGoerli: HbChain = {
  id: 421613,
  name: "Arbitrum Goerli",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Arbitrum Goerli Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://goerli-rollup.arbitrum.io/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Arbiscan",
    url: "https://goerli.arbiscan.io"
  }
}
}

export const ArbitrumNova: HbChain = {
  id: 42170,
  name: "Arbitrum Nova",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_arbitrum%20nova.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://nova.arbitrum.io/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Arbiscan",
    url: "https://nova.arbiscan.io",
    apiUrl: "https://api-nova.arbiscan.io/api"
  }
}
}

export const ArbitrumSepolia: HbChain = {
  id: 421614,
  name: "Arbitrum Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Arbitrum Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia-rollup.arbitrum.io/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Arbiscan",
    url: "https://sepolia.arbiscan.io",
    apiUrl: "https://api-sepolia.arbiscan.io/api"
  }
}
}

export const AreonNetwork: HbChain = {
  id: 463,
  name: "Areon Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_areon.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "AREA",
  symbol: "AREA"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-rpc.areon.network"
    ],
    webSocket: [
      "wss://mainnet-ws.areon.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Areonscan",
    url: "https://areonscan.com"
  }
}
}

export const AreonNetworkTestnet: HbChain = {
  id: 462,
  name: "Areon Network Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "TAREA",
  symbol: "TAREA"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.areon.network"
    ],
    webSocket: [
      "wss://testnet-ws.areon.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Areonscan",
    url: "https://areonscan.com"
  }
}
}

export const ArtelaTestnet: HbChain = {
  id: 11822,
  name: "Artela Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ART",
  symbol: "ART",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://betanet-rpc1.artela.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Artela",
    url: "https://betanet-scan.artela.network",
    apiUrl: "https://betanet-scan.artela.network/api"
  }
}
}

export const Arthera: HbChain = {
  id: 10242,
  name: "Arthera",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Arthera",
  symbol: "AA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.arthera.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Arthera EVM Explorer",
    url: "https://explorer.arthera.net",
    apiUrl: "https://explorer.arthera.net/api"
  }
}
}

export const ArtheraTestnet: HbChain = {
  id: 10243,
  name: "Arthera Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Arthera",
  symbol: "AA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-test.arthera.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Arthera EVM Explorer",
    url: "https://explorer-test.arthera.net",
    apiUrl: "https://explorer-test.arthera.net/api"
  }
}
}

export const AssetChain: HbChain = {
  id: 42420,
  name: "AssetChain Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_assetchain.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Real World Asset",
  symbol: "RWA"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-rpc.assetchain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Asset Chain Explorer",
    url: "https://scan.assetchain.org",
    apiUrl: "https://scan.assetchain.org/api"
  }
}
}

export const AssetChainTestnet: HbChain = {
  id: 42421,
  name: "AssetChain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Real World Asset",
  symbol: "RWA"
},
  rpcUrls: {
  default: {
    http: [
      "https://enugu-rpc.assetchain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Asset Chain Testnet Explorer",
    url: "https://scan-testnet.assetchain.org",
    apiUrl: "https://scan-testnet.assetchain.org/api"
  }
}
}

export const Astar: HbChain = {
  id: 592,
  name: "Astar",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_astar.jpg",
  nativeCurrency: {
  name: "Astar",
  symbol: "ASTR",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://astar.api.onfinality.io/public"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Astar Subscan",
    url: "https://astar.subscan.io"
  }
}
}

export const AstarZkEVM: HbChain = {
  id: 3776,
  name: "Astar zkEVM",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-zkevm.astar.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Astar zkEVM Explorer",
    url: "https://astar-zkevm.explorer.startale.com"
  }
}
}

export const AstarZkyoto: HbChain = {
  id: 6038361,
  name: "Astar zkEVM Testnet zKyoto",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.startale.com/zkyoto"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "zKyoto Explorer",
    url: "https://zkyoto.explorer.startale.com"
  }
}
}

export const AtletaOlympia: HbChain = {
  id: 2340,
  name: "Atleta Olympia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Atla",
  symbol: "ATLA"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.atleta.network:9944",
      "https://testnet-rpc.atleta.network"
    ],
    ws: [
      "wss://testnet-rpc.atleta.network:9944"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Atleta Olympia Explorer",
    url: "https://blockscout.atleta.network",
    apiUrl: "https://blockscout.atleta.network/api"
  }
}
}

export const Aurora: HbChain = {
  id: 1313161554,
  name: "Aurora",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_aurora.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.aurora.dev"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Aurorascan",
    url: "https://aurorascan.dev",
    apiUrl: "https://aurorascan.dev/api"
  }
}
}

export const AuroraTestnet: HbChain = {
  id: 1313161555,
  name: "Aurora Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.aurora.dev"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Aurorascan",
    url: "https://testnet.aurorascan.dev",
    apiUrl: "https://testnet.aurorascan.dev/api"
  }
}
}

export const Auroria: HbChain = {
  id: 205205,
  name: "Auroria Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Auroria Stratis",
  symbol: "tSTRAX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://auroria.rpc.stratisevm.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Auroria Testnet Explorer",
    url: "https://auroria.explorer.stratisevm.com"
  }
}
}

export const Avalanche: HbChain = {
  id: 43114,
  name: "Avalanche",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Avalanche",
  symbol: "AVAX"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.avax.network/ext/bc/C/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SnowTrace",
    url: "https://snowtrace.io",
    apiUrl: "https://api.snowtrace.io"
  }
}
}

export const AvalancheFuji: HbChain = {
  id: 43113,
  name: "Avalanche Fuji",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Avalanche Fuji",
  symbol: "AVAX"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.avax-test.network/ext/bc/C/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SnowTrace",
    url: "https://testnet.snowtrace.io",
    apiUrl: "https://api-testnet.snowtrace.io"
  }
}
}

export const B3: HbChain = {
  id: 8333,
  name: "B3",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-rpc.b3.fun/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://explorer.b3.fun"
  }
}
}

export const B3Sepolia: HbChain = {
  id: 1993,
  name: "B3 Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.b3.fun/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://sepolia.explorer.b3.fun"
  }
}
}

export const Bahamut: HbChain = {
  id: 5165,
  name: "Bahamut",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Fasttoken",
  symbol: "FTN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc1.bahamut.io",
      "https://bahamut-rpc.publicnode.com",
      "https://rpc2.bahamut.io"
    ],
    webSocket: [
      "wss://ws1.sahara.bahamutchain.com",
      "wss://bahamut-rpc.publicnode.com",
      "wss://ws2.sahara.bahamutchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ftnscan",
    url: "https://www.ftnscan.com",
    apiUrl: "https://www.ftnscan.com/api"
  }
}
}

export const Base: HbChain = {
  id: 8453,
  name: "Base",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_base.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.base.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Basescan",
    url: "https://basescan.org",
    apiUrl: "https://api.basescan.org/api"
  }
}
}

export const BaseGoerli: HbChain = {
  id: 84531,
  name: "Base Goerli",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Goerli Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://goerli.base.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Basescan",
    url: "https://goerli.basescan.org",
    apiUrl: "https://goerli.basescan.org/api"
  }
}
}

export const BaseSepolia: HbChain = {
  id: 84532,
  name: "Base Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.base.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Basescan",
    url: "https://sepolia.basescan.org",
    apiUrl: "https://api-sepolia.basescan.org/api"
  }
}
}

export const Beam: HbChain = {
  id: 4337,
  name: "Beam",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_beam.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Beam",
  symbol: "BEAM"
},
  rpcUrls: {
  default: {
    http: [
      "https://build.onbeam.com/rpc"
    ],
    webSocket: [
      "wss://build.onbeam.com/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Beam Explorer",
    url: "https://subnets.avax.network/beam"
  }
}
}

export const BeamTestnet: HbChain = {
  id: 13337,
  name: "Beam Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Beam",
  symbol: "BEAM"
},
  rpcUrls: {
  default: {
    http: [
      "https://build.onbeam.com/rpc/testnet"
    ],
    webSocket: [
      "wss://build.onbeam.com/ws/testnet"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Beam Explorer",
    url: "https://subnets-test.avax.network/beam"
  }
}
}

export const BearNetworkChainMainnet: HbChain = {
  id: 641230,
  name: "Bear Network Chain Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BearNetworkChain",
  symbol: "BRNKC"
},
  rpcUrls: {
  default: {
    http: [
      "https://brnkc-mainnet.bearnetwork.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BrnkScan",
    url: "https://brnkscan.bearnetwork.net",
    apiUrl: "https://brnkscan.bearnetwork.net/api"
  }
}
}

export const BearNetworkChainTestnet: HbChain = {
  id: 751230,
  name: "Bear Network Chain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "tBRNKC",
  symbol: "tBRNKC"
},
  rpcUrls: {
  default: {
    http: [
      "https://brnkc-test.bearnetwork.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BrnkTestScan",
    url: "https://brnktest-scan.bearnetwork.net",
    apiUrl: "https://brnktest-scan.bearnetwork.net/api"
  }
}
}

export const BerachainTestnet: HbChain = {
  id: 80085,
  name: "Berachain Artio",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BERA Token",
  symbol: "BERA"
},
  rpcUrls: {
  default: {
    http: [
      "https://artio.rpc.berachain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Berachain",
    url: "https://artio.beratrail.io"
  }
}
}

export const BerachainTestnetbArtio: HbChain = {
  id: 80084,
  name: "Berachain bArtio",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BERA Token",
  symbol: "BERA"
},
  rpcUrls: {
  default: {
    http: [
      "https://bartio.rpc.berachain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Berachain bArtio Beratrail",
    url: "https://bartio.beratrail.io"
  }
}
}

export const BevmMainnet: HbChain = {
  id: 11501,
  name: "BEVM Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Bitcoin",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-mainnet-1.bevm.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bevmscan",
    url: "https://scan-mainnet.bevm.io",
    apiUrl: "https://scan-mainnet-api.bevm.io/api"
  }
}
}

export const Bifrost: HbChain = {
  id: 3068,
  name: "Bifrost Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BFC",
  symbol: "BFC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://public-01.mainnet.bifrostnetwork.com/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bifrost Blockscout",
    url: "https://explorer.mainnet.bifrostnetwork.com"
  }
}
}

export const Bitgert: HbChain = {
  id: 32520,
  name: "Bitgert Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_bitgert.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Brise",
  symbol: "Brise"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-bitgert.icecreamswap.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bitgert Scan",
    url: "https://brisescan.com"
  }
}
}

export const Bitkub: HbChain = {
  id: 96,
  name: "Bitkub",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_bitkub.jpg",
  nativeCurrency: {
  name: "Bitkub",
  symbol: "KUB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.bitkubchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bitkub Chain Mainnet Explorer",
    url: "https://www.bkcscan.com",
    apiUrl: "https://www.bkcscan.com/api"
  }
}
}

export const BitkubTestnet: HbChain = {
  id: 25925,
  name: "Bitkub Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Bitkub Test",
  symbol: "tKUB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-testnet.bitkubchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bitkub Chain Testnet Explorer",
    url: "https://testnet.bkcscan.com",
    apiUrl: "https://testnet.bkcscan.com/api"
  }
}
}

export const Bitlayer: HbChain = {
  id: 200901,
  name: "Bitlayer Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_bitlayer.jpg",
  nativeCurrency: {
  name: "BTC",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.bitlayer.org"
    ],
    webSocket: [
      "wss://ws.bitlayer.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "bitlayer mainnet scan",
    url: "https://www.btrscan.com"
  }
}
}

export const BitlayerTestnet: HbChain = {
  id: 200810,
  name: "Bitlayer Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BTC",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.bitlayer.org"
    ],
    webSocket: [
      "wss://testnet-ws.bitlayer.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "bitlayer testnet scan",
    url: "https://testnet.btrscan.com"
  }
}
}

export const Bitrock: HbChain = {
  id: 7171,
  name: "Bitrock Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_bitrock.jpg",
  nativeCurrency: {
  name: "BROCK",
  symbol: "BROCK",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://brockrpc.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bitrock Explorer",
    url: "https://explorer.bit-rock.io"
  }
}
}

export const BitTorrent: HbChain = {
  id: 199,
  name: "BitTorrent",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BitTorrent",
  symbol: "BTT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.bittorrentchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bttcscan",
    url: "https://bttcscan.com",
    apiUrl: "https://api.bttcscan.com/api"
  }
}
}

export const BitTorrentTestnet: HbChain = {
  id: 1028,
  name: "BitTorrent Chain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BitTorrent",
  symbol: "BTT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testrpc.bittorrentchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bttcscan",
    url: "https://testnet.bttcscan.com",
    apiUrl: "https://testnet.bttcscan.com/api"
  }
}
}

export const Blast: HbChain = {
  id: 81457,
  name: "Blast",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_blast.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.blast.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blastscan",
    url: "https://blastscan.io",
    apiUrl: "https://api.blastscan.io/api"
  }
}
}

export const BlastSepolia: HbChain = {
  id: 168587773,
  name: "Blast Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.blast.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blastscan",
    url: "https://sepolia.blastscan.io",
    apiUrl: "https://api-sepolia.blastscan.io/api"
  }
}
}

export const Bob: HbChain = {
  id: 60808,
  name: "BOB",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_bob.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.gobob.xyz"
    ],
    webSocket: [
      "wss://rpc.gobob.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BOB Explorer",
    url: "https://explorer.gobob.xyz"
  }
}
}

export const Boba: HbChain = {
  id: 288,
  name: "Boba Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_boba.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.boba.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BOBAScan",
    url: "https://bobascan.com"
  }
}
}

export const BobaSepolia: HbChain = {
  id: 28882,
  name: "Boba Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.boba.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BOBAScan",
    url: "https://testnet.bobascan.com"
  }
}
}

export const BobSepolia: HbChain = {
  id: 808813,
  name: "BOB Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://bob-sepolia.rpc.gobob.xyz"
    ],
    webSocket: [
      "wss://bob-sepolia.rpc.gobob.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BOB Sepolia Explorer",
    url: "https://bob-sepolia.explorer.gobob.xyz"
  }
}
}

export const BoolBetaMainnet: HbChain = {
  id: 11100,
  name: "Bool Beta Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BOL",
  symbol: "BOL"
},
  rpcUrls: {
  default: {
    http: [
      "https://beta-rpc-node-http.bool.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BoolScan",
    url: "https://beta-mainnet.boolscan.com/"
  }
}
}

export const BotanixTestnet: HbChain = {
  id: 3636,
  name: "Botanix Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Botanix",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://poa-node.botanixlabs.dev"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://blockscout.botanixlabs.dev",
    apiUrl: "https://blockscout.botanixlabs.dev"
  }
}
}

export const BounceBit: HbChain = {
  id: 6001,
  name: "BounceBit Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_bouncebit.jpg",
  nativeCurrency: {
  name: "BounceBit",
  symbol: "BB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://fullnode-mainnet.bouncebitapi.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BB Scan",
    url: "https://bbscan.io"
  }
}
}

export const BounceBitTestnet: HbChain = {
  id: 6000,
  name: "BounceBit Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BounceBit",
  symbol: "BB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://fullnode-testnet.bouncebitapi.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BB Scan",
    url: "https://testnet.bbscan.io"
  }
}
}

export const Bronos: HbChain = {
  id: 1039,
  name: "Bronos",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BRO",
  symbol: "BRO"
},
  rpcUrls: {
  default: {
    http: [
      "https://evm.bronos.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BronoScan",
    url: "https://broscan.bronos.org"
  }
}
}

export const BronosTestnet: HbChain = {
  id: 1038,
  name: "Bronos Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Bronos Coin",
  symbol: "tBRO"
},
  rpcUrls: {
  default: {
    http: [
      "https://evm-testnet.bronos.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BronoScan",
    url: "https://tbroscan.bronos.org"
  }
}
}

export const Bsc: HbChain = {
  id: 56,
  name: "BNB Smart Chain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_binance.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "BNB",
  symbol: "BNB"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ankr.com/bsc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BscScan",
    url: "https://bscscan.com",
    apiUrl: "https://api.bscscan.com/api"
  }
}
}

export const BscGreenfield: HbChain = {
  id: 1017,
  name: "BNB Greenfield Chain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BNB",
  symbol: "BNB"
},
  rpcUrls: {
  default: {
    http: [
      "https://greenfield-chain.bnbchain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BNB Greenfield Mainnet Scan",
    url: "https://greenfieldscan.com"
  }
}
}

export const BscTestnet: HbChain = {
  id: 97,
  name: "Binance Smart Chain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BNB",
  symbol: "tBNB"
},
  rpcUrls: {
  default: {
    http: [
      "https://data-seed-prebsc-1-s1.bnbchain.org:8545"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "BscScan",
    url: "https://testnet.bscscan.com",
    apiUrl: "https://api-testnet.bscscan.com/api"
  }
}
}

export const Bsquared: HbChain = {
  id: 223,
  name: "B2",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Bitcoin",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.bsquared.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://explorer.bsquared.network"
  }
}
}

export const BsquaredTestnet: HbChain = {
  id: 1123,
  name: "B2 Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Bitcoin",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.bsquared.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://testnet-explorer.bsquared.network"
  }
}
}

export const Btr: HbChain = {
  id: 200901,
  name: "Bitlayer",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_bitlayer.jpg",
  nativeCurrency: {
  name: "Bitcoin",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.bitlayer.org",
      "https://rpc.bitlayer-rpc.com",
      "https://rpc.ankr.com/bitlayer"
    ],
    webSocket: [
      "wss://ws.bitlayer.org",
      "wss://ws.bitlayer-rpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bitlayer(BTR) Scan",
    url: "https://www.btrscan.com"
  }
}
}

export const BtrTestnet: HbChain = {
  id: 200810,
  name: "Bitlayer Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Bitcoin",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.bitlayer.org"
    ],
    webSocket: [
      "wss://testnet-ws.bitlayer.org",
      "wss://testnet-ws.bitlayer-rpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Bitlayer(BTR) Scan",
    url: "https://testnet.btrscan.com"
  }
}
}

export const Bxn: HbChain = {
  id: 4999,
  name: "BlackFort Exchange Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BlackFort Token",
  symbol: "BXN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.blackfort.network/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://explorer.blackfort.network",
    apiUrl: "https://explorer.blackfort.network/api"
  }
}
}

export const BxnTestnet: HbChain = {
  id: 4777,
  name: "BlackFort Exchange Network Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BlackFort Testnet Token",
  symbol: "TBXN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.blackfort.network/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://testnet-explorer.blackfort.network",
    apiUrl: "https://testnet-explorer.blackfort.network/api"
  }
}
}

export const Cannon: HbChain = {
  id: 13370,
  name: "Cannon",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "http://127.0.0.1:8545"
    ]
  }
},
}

export const Canto: HbChain = {
  id: 7700,
  name: "Canto",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_canto.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Canto",
  symbol: "CANTO"
},
  rpcUrls: {
  default: {
    http: [
      "https://canto.gravitychain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Tuber.Build (Blockscout)",
    url: "https://tuber.build"
  }
}
}

export const Celo: HbChain = {
  id: 42220,
  name: "Celo",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_celo.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "CELO",
  symbol: "CELO"
},
  rpcUrls: {
  default: {
    http: [
      "https://forno.celo.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Celo Explorer",
    url: "https://celoscan.io",
    apiUrl: "https://api.celoscan.io/api"
  }
}
}

export const CeloAlfajores: HbChain = {
  id: 44787,
  name: "Alfajores",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "CELO",
  symbol: "A-CELO"
},
  rpcUrls: {
  default: {
    http: [
      "https://alfajores-forno.celo-testnet.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Celo Alfajores Explorer",
    url: "https://celo-alfajores.blockscout.com",
    apiUrl: "https://celo-alfajores.blockscout.com/api"
  }
}
}

export const Chang: HbChain = {
  id: 5858,
  name: "Chang Chain Foundation Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "CTH",
  symbol: "CTH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.cthscan.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Chang Chain explorer",
    url: "https://cthscan.com"
  }
}
}

export const Chiliz: HbChain = {
  id: 88888,
  name: "Chiliz Chain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_chiliz.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "CHZ",
  symbol: "CHZ"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ankr.com/chiliz",
      "https://chiliz-rpc.publicnode.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Chiliz Explorer",
    url: "https://scan.chiliz.com",
    apiUrl: "https://scan.chiliz.com/api"
  }
}
}

export const Chips: HbChain = {
  id: 2882,
  name: "Chips Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "IOTA",
  symbol: "IOTA"
},
  rpcUrls: {
  default: {
    http: [
      "https://node.chips.ooo/wasp/api/v1/chains/iota1pp3d3mnap3ufmgqnjsnw344sqmf5svjh26y2khnmc89sv6788y3r207a8fn/evm"
    ]
  }
},
}

export const CitreaTestnet: HbChain = {
  id: 5115,
  name: "Citrea Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "cBTC",
  symbol: "cBTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.citrea.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Citrea Explorer",
    url: "https://explorer.testnet.citrea.xyz",
    apiUrl: "https://explorer.testnet.citrea.xyz/api"
  }
}
}

export const Classic: HbChain = {
  id: 61,
  name: "Ethereum Classic",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_ethereumclassic.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "ETC",
  symbol: "ETC"
},
  rpcUrls: {
  default: {
    http: [
      "https://etc.rivet.link"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://blockscout.com/etc/mainnet"
  }
}
}

export const Coinbit: HbChain = {
  id: 112,
  name: "Coinbit Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "GIDR",
  symbol: "GIDR",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://coinbit-rpc-mainnet.chain.sbcrypto.app"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Coinbit Explorer",
    url: "https://coinbit-explorer.chain.sbcrypto.app"
  }
}
}

export const Coinex: HbChain = {
  id: 52,
  name: "CoinEx Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_csc.jpg",
  nativeCurrency: {
  name: "cet",
  symbol: "cet",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.coinex.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "CoinEx Explorer",
    url: "https://www.coinex.net"
  }
}
}

export const ConfluxESpace: HbChain = {
  id: 1030,
  name: "Conflux eSpace",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_conflux.jpg",
  nativeCurrency: {
  name: "Conflux",
  symbol: "CFX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://evm.confluxrpc.com"
    ],
    webSocket: [
      "wss://evm.confluxrpc.com/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ConfluxScan",
    url: "https://evm.confluxscan.io"
  }
}
}

export const ConfluxESpaceTestnet: HbChain = {
  id: 71,
  name: "Conflux eSpace Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Conflux",
  symbol: "CFX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://evmtestnet.confluxrpc.com"
    ],
    webSocket: [
      "wss://evmtestnet.confluxrpc.com/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ConfluxScan",
    url: "https://evmtestnet.confluxscan.io"
  }
}
}

export const CoreDao: HbChain = {
  id: 1116,
  name: "Core Dao",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_core.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Core",
  symbol: "CORE"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.coredao.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "CoreDao",
    url: "https://scan.coredao.org"
  }
}
}

export const Corn: HbChain = {
  id: 21000000,
  name: "Corn",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_corn.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Bitcorn",
  symbol: "BTCN"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ankr.com/corn_maizenet"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Corn Explorer",
    url: "https://cornscan.io",
    apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/21000000/etherscan/api"
  }
}
}

export const CornTestnet: HbChain = {
  id: 21000001,
  name: "Corn Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Bitcorn",
  symbol: "BTCN"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ankr.com/corn_testnet"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Corn Testnet Explorer",
    url: "https://testnet.cornscan.io",
    apiUrl: "https://api.routescan.io/v2/network/testnet/evm/21000001/etherscan/api"
  }
}
}

export const Crab: HbChain = {
  id: 44,
  name: "Crab Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_crab.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Crab Network Native Token",
  symbol: "CRAB"
},
  rpcUrls: {
  default: {
    http: [
      "https://crab-rpc.darwinia.network"
    ],
    webSocket: [
      "wss://crab-rpc.darwinia.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://crab-scan.darwinia.network"
  }
}
}

export const CreatorTestnet: HbChain = {
  id: 66665,
  name: "Creator",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.creatorchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://explorer.creatorchain.io"
  }
}
}

export const CreditCoin3Mainnet: HbChain = {
  id: 102030,
  name: "Creditcoin3 Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Creditcoin3 Mainnet",
  symbol: "CTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet3.creditcoin.network"
    ],
    webSocket: [
      "wss://mainnet3.creditcoin.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://creditcoin.blockscout.com",
    apiUrl: "https://creditcoin.blockscout.com/api"
  }
}
}

export const CreditCoin3Testnet: HbChain = {
  id: 102031,
  name: "Creditcoin3 Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Creditcoin3 Testnet",
  symbol: "TCTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.cc3-testnet.creditcoin.network"
    ],
    webSocket: [
      "wss://rpc.cc3-testnet.creditcoin.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://creditcoin-testnet.blockscout.com",
    apiUrl: "https://creditcoin-testnet.blockscout.com/api"
  }
}
}

export const Cronos: HbChain = {
  id: 25,
  name: "Cronos Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_cronos.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Cronos",
  symbol: "CRO"
},
  rpcUrls: {
  default: {
    http: [
      "https://evm.cronos.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Cronos Explorer",
    url: "https://explorer.cronos.org",
    apiUrl: "https://explorer-api.cronos.org/mainnet/api"
  }
}
}

export const CronosTestnet: HbChain = {
  id: 338,
  name: "Cronos Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "CRO",
  symbol: "tCRO"
},
  rpcUrls: {
  default: {
    http: [
      "https://evm-t3.cronos.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Cronos Explorer",
    url: "https://cronos.org/explorer/testnet3"
  }
}
}

export const CronoszkEVM: HbChain = {
  id: 388,
  name: "Cronos zkEVM Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_cronos%20zkevm.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Cronos zkEVM CRO",
  symbol: "zkCRO"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.zkevm.cronos.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Cronos zkEVM (Mainnet) Chain Explorer",
    url: "https://explorer.zkevm.cronos.org"
  }
}
}

export const CronoszkEVMTestnet: HbChain = {
  id: 282,
  name: "Cronos zkEVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Cronos zkEVM Test Coin",
  symbol: "zkTCRO"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.zkevm.cronos.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Cronos zkEVM Testnet Explorer",
    url: "https://explorer.zkevm.cronos.org/testnet"
  }
}
}

export const Crossbell: HbChain = {
  id: 3737,
  name: "Crossbell",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "CSB",
  symbol: "CSB"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.crossbell.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "CrossScan",
    url: "https://scan.crossbell.io",
    apiUrl: "https://scan.crossbell.io/api"
  }
}
}

export const Curtis: HbChain = {
  id: 33111,
  name: "Curtis",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ApeCoin",
  symbol: "APE",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.curtis.apechain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Curtis Explorer",
    url: "https://explorer.curtis.apechain.com"
  }
}
}

export const Cyber: HbChain = {
  id: 7560,
  name: "Cyber",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_cyeth.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://cyber.alt.technology"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://cyberscan.co",
    apiUrl: "https://cyberscan.co/api"
  }
}
}

export const CyberTestnet: HbChain = {
  id: 111557560,
  name: "Cyber Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://cyber-testnet.alt.technology"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://testnet.cyberscan.co",
    apiUrl: "https://testnet.cyberscan.co/api"
  }
}
}

export const DailyNetwork: HbChain = {
  id: 824,
  name: "Daily Network Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Daily",
  symbol: "DLY"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mainnet.dailycrypto.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Daily Mainnet Explorer",
    url: "https://explorer.mainnet.dailycrypto.net"
  }
}
}

export const DailyNetworkTestnet: HbChain = {
  id: 825,
  name: "Daily Network Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Daily",
  symbol: "DLY"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.dailycrypto.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Daily Testnet Explorer",
    url: "https://explorer.testnet.dailycrypto.net"
  }
}
}

export const Darwinia: HbChain = {
  id: 46,
  name: "Darwinia Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "RING",
  symbol: "RING"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.darwinia.network"
    ],
    webSocket: [
      "wss://rpc.darwinia.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://explorer.darwinia.network"
  }
}
}

export const Dchain: HbChain = {
  id: 2716446429837000,
  name: "Dchain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://dchain-2716446429837000-1.jsonrpc.sagarpc.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Dchain Explorer",
    url: "https://dchain-2716446429837000-1.sagaexplorer.io",
    apiUrl: "https://api-dchain-2716446429837000-1.sagaexplorer.io/api"
  }
}
}

export const DchainTestnet: HbChain = {
  id: 2713017997578000,
  name: "Dchain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Dchain Explorer",
    url: "https://dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io",
    apiUrl: "https://api-dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io/api"
  }
}
}

export const DefichainEvm: HbChain = {
  id: 1130,
  name: "DeFiChain EVM Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "DeFiChain",
  symbol: "DFI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://eth.mainnet.ocean.jellyfishsdk.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DeFiScan",
    url: "https://meta.defiscan.live"
  }
}
}

export const DefichainEvmTestnet: HbChain = {
  id: 1131,
  name: "DeFiChain EVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "DeFiChain",
  symbol: "DFI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://eth.testnet.ocean.jellyfishsdk.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DeFiScan",
    url: "https://meta.defiscan.live/?network=TestNet"
  }
}
}

export const Degen: HbChain = {
  id: 666666666,
  name: "Degen",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Degen",
  symbol: "DEGEN"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.degen.tips"
    ],
    webSocket: [
      "wss://rpc.degen.tips"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Degen Chain Explorer",
    url: "https://explorer.degen.tips",
    apiUrl: "https://explorer.degen.tips/api/v2"
  }
}
}

export const Dfk: HbChain = {
  id: 53935,
  name: "DFK Chain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Jewel",
  symbol: "JEWEL"
},
  rpcUrls: {
  default: {
    http: [
      "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DFKSubnetScan",
    url: "https://subnets.avax.network/defi-kingdoms"
  }
}
}

export const Diode: HbChain = {
  id: 15,
  name: "Diode Prenet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "DIODE",
  symbol: "DIODE"
},
  rpcUrls: {
  default: {
    http: [
      "https://prenet.diode.io:8443"
    ],
    webSocket: [
      "wss://prenet.diode.io:8443/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Diode Explorer",
    url: "https://diode.io/prenet"
  }
}
}

export const DisChain: HbChain = {
  id: 513100,
  name: "DisChain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "DIS",
  symbol: "DIS"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.dischain.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DisChain Explorer",
    url: "https://www.oklink.com/dis"
  }
}
}

export const DodochainTestnet: HbChain = {
  id: 53457,
  name: "DODOchain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "DODO",
  symbol: "DODO"
},
  rpcUrls: {
  default: {
    http: [
      "https://dodochain-testnet.alt.technology"
    ],
    webSocket: [
      "wss://dodochain-testnet.alt.technology/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DODOchain Testnet (Sepolia) Explorer",
    url: "https://testnet-scan.dodochain.com"
  }
}
}

export const Dogechain: HbChain = {
  id: 2000,
  name: "Dogechain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_dogechain.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Wrapped Dogecoin",
  symbol: "WDOGE"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.dogechain.dog"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DogeChainExplorer",
    url: "https://explorer.dogechain.dog",
    apiUrl: "https://explorer.dogechain.dog/api"
  }
}
}

export const DosChain: HbChain = {
  id: 7979,
  name: "DOS Chain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "DOS Chain",
  symbol: "DOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://main.doschain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DOS Chain Explorer",
    url: "https://doscan.io",
    apiUrl: "https://api.doscan.io"
  }
}
}

export const DosChainTestnet: HbChain = {
  id: 3939,
  name: "DOS Chain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "DOS Chain Testnet",
  symbol: "DOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://test.doschain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DOS Chain Testnet Explorer",
    url: "https://test.doscan.io",
    apiUrl: "https://api-test.doscan.io"
  }
}
}

export const DreyerxMainnet: HbChain = {
  id: 23451,
  name: "DreyerX Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "DreyerX",
  symbol: "DRX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.dreyerx.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DreyerX Scan",
    url: "https://scan.dreyerx.com"
  }
}
}

export const DreyerxTestnet: HbChain = {
  id: 23452,
  name: "DreyerX Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "DreyerX",
  symbol: "DRX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "http://testnet-rpc.dreyerx.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "DreyerX Testnet Scan",
    url: "https://testnet-scan.dreyerx.com"
  }
}
}

export const DustboyIoT: HbChain = {
  id: 555888,
  name: "DustBoy IoT",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "DST",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://dustboy-rpc.jibl2.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://dustboy.jibl2.com",
    apiUrl: "https://dustboy.jibl2.com/api"
  }
}
}

export const Dymension: HbChain = {
  id: 1100,
  name: "Dymension",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_dymension.jpg",
  nativeCurrency: {
  name: "DYM",
  symbol: "DYM",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://dymension-evm-rpc.publicnode.com"
    ],
    webSocket: [
      "wss://dymension-evm-rpc.publicnode.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Dym FYI",
    url: "https://dym.fyi"
  }
}
}

export const Edgeless: HbChain = {
  id: 2026,
  name: "Edgeless Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Edgeless Wrapped ETH",
  symbol: "EwETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.edgeless.network/http"
    ],
    webSocket: [
      "wss://rpc.edgeless.network/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Edgeless Explorer",
    url: "https://explorer.edgeless.network"
  }
}
}

export const EdgelessTestnet: HbChain = {
  id: 202,
  name: "Edgeless Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Edgeless Wrapped ETH",
  symbol: "EwETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://edgeless-testnet.rpc.caldera.xyz/http"
    ],
    webSocket: [
      "wss://edgeless-testnet.rpc.caldera.xyz/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Edgeless Testnet Explorer",
    url: "https://testnet.explorer.edgeless.network"
  }
}
}

export const Edgeware: HbChain = {
  id: 2021,
  name: "Edgeware EdgeEVM Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Edgeware",
  symbol: "EDG"
},
  rpcUrls: {
  default: {
    http: [
      "https://edgeware-evm.jelliedowl.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Edgscan by Bharathcoorg",
    url: "https://edgscan.live",
    apiUrl: "https://edgscan.live/api"
  }
}
}

export const EdgewareTestnet: HbChain = {
  id: 2022,
  name: "Beresheet BereEVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Testnet EDG",
  symbol: "tEDG"
},
  rpcUrls: {
  default: {
    http: [
      "https://beresheet-evm.jelliedowl.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Edgscan by Bharathcoorg",
    url: "https://testnet.edgscan.live",
    apiUrl: "https://testnet.edgscan.live/api"
  }
}
}

export const Ekta: HbChain = {
  id: 1994,
  name: "Ekta",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "EKTA",
  symbol: "EKTA"
},
  rpcUrls: {
  default: {
    http: [
      "https://main.ekta.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ektascan",
    url: "https://ektascan.io",
    apiUrl: "https://ektascan.io/api"
  }
}
}

export const EktaTestnet: HbChain = {
  id: 1004,
  name: "Ekta Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "EKTA",
  symbol: "EKTA"
},
  rpcUrls: {
  default: {
    http: [
      "https://test.ekta.io:8545"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Test Ektascan",
    url: "https://test.ektascan.io",
    apiUrl: "https://test.ektascan.io/api"
  }
}
}

export const Elastos: HbChain = {
  id: 20,
  name: "Elastos Smart Chain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_elastos.jpg",
  nativeCurrency: {
  name: "ELA",
  symbol: "ELA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api2.elastos.io/eth"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Elastos Explorer",
    url: "https://esc.elastos.io"
  }
}
}

export const ElastosTestnet: HbChain = {
  id: 21,
  name: "Elastos Smart Chain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "tELA",
  symbol: "tELA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api-testnet.elastos.io/eth"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Elastos Explorer",
    url: "https://esc-testnet.elastos.io"
  }
}
}

export const Electroneum: HbChain = {
  id: 52014,
  name: "Electroneum Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_etn.jpg",
  nativeCurrency: {
  name: "ETN",
  symbol: "ETN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.electroneum.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Electroneum Block Explorer",
    url: "https://blockexplorer.electroneum.com"
  }
}
}

export const ElectroneumTestnet: HbChain = {
  id: 5201420,
  name: "Electroneum Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ETN",
  symbol: "ETN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.electroneum.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Electroneum Block Explorer",
    url: "https://blockexplorer.thesecurityteam.rocks"
  }
}
}

export const ElysiumTestnet: HbChain = {
  id: 1338,
  name: "Elysium Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "LAVA",
  symbol: "LAVA"
},
  rpcUrls: {
  default: {
    http: [
      "https://elysium-test-rpc.vulcanforged.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Elysium testnet explorer",
    url: "https://elysium-explorer.vulcanforged.com"
  }
}
}

export const Energy: HbChain = {
  id: 246,
  name: "Energy Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_energyweb.jpg",
  nativeCurrency: {
  name: "EWT",
  symbol: "EWT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.energyweb.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "EnergyWeb Explorer",
    url: "https://explorer.energyweb.org"
  }
}
}

export const Enuls: HbChain = {
  id: 119,
  name: "ENULS Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_enuls.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "NULS",
  symbol: "NULS"
},
  rpcUrls: {
  default: {
    http: [
      "https://evmapi2.nuls.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ENULS Explorer",
    url: "https://evmscan.nuls.io"
  }
}
}

export const Eon: HbChain = {
  id: 7332,
  name: "Horizen EON",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ZEN",
  symbol: "ZEN"
},
  rpcUrls: {
  default: {
    http: [
      "https://eon-rpc.horizenlabs.io/ethv1"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "EON Explorer",
    url: "https://eon-explorer.horizenlabs.io"
  }
}
}

export const Eos: HbChain = {
  id: 17777,
  name: "EOS EVM",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_eos%20evm.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "EOS",
  symbol: "EOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.evm.eosnetwork.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "EOS EVM Explorer",
    url: "https://explorer.evm.eosnetwork.com",
    apiUrl: "https://explorer.evm.eosnetwork.com/api"
  }
}
}

export const EosTestnet: HbChain = {
  id: 15557,
  name: "EOS EVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "EOS",
  symbol: "EOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.testnet.evm.eosnetwork.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "EOS EVM Testnet Explorer",
    url: "https://explorer.testnet.evm.eosnetwork.com",
    apiUrl: "https://explorer.testnet.evm.eosnetwork.com/api"
  }
}
}

export const Etherlink: HbChain = {
  id: 42793,
  name: "Etherlink",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_etherlink.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Tez",
  symbol: "XTZ"
},
  rpcUrls: {
  default: {
    http: [
      "https://node.mainnet.etherlink.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherlink",
    url: "https://explorer.etherlink.com"
  }
}
}

export const EtherlinkTestnet: HbChain = {
  id: 128123,
  name: "Etherlink Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Tez",
  symbol: "XTZ"
},
  rpcUrls: {
  default: {
    http: [
      "https://node.ghostnet.etherlink.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherlink Testnet",
    url: "https://testnet-explorer.etherlink.com"
  }
}
}

export const Evmos: HbChain = {
  id: 9001,
  name: "Evmos",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_evmos.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Evmos",
  symbol: "EVMOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://eth.bd.evmos.org:8545"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Evmos Block Explorer",
    url: "https://escan.live"
  }
}
}

export const EvmosTestnet: HbChain = {
  id: 9000,
  name: "Evmos Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Evmos",
  symbol: "EVMOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://eth.bd.evmos.dev:8545"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Evmos Testnet Block Explorer",
    url: "https://evm.evmos.dev/"
  }
}
}

export const ExcelonMainnet: HbChain = {
  id: 22052002,
  name: "Excelon Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Excelon",
  symbol: "xlon"
},
  rpcUrls: {
  default: {
    http: [
      "https://edgewallet1.xlon.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Excelon explorer",
    url: "https://explorer.excelon.io"
  }
}
}

export const Expanse: HbChain = {
  id: 2,
  name: "Expanse Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "EXP",
  symbol: "EXP"
},
  rpcUrls: {
  default: {
    http: [
      "https://node.expanse.tech"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Expanse Explorer",
    url: "https://explorer.expanse.tech"
  }
}
}

export const Exsat: HbChain = {
  id: 7200,
  name: "exSat Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_xsat.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "BTC",
  symbol: "BTC"
},
  rpcUrls: {
  default: {
    http: [
      "https://evm.exsat.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "exSat Explorer",
    url: "https://scan.exsat.network",
    apiUrl: "https://scan.exsat.network/api"
  }
}
}

export const ExsatTestnet: HbChain = {
  id: 839999,
  name: "exSat Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BTC",
  symbol: "BTC"
},
  rpcUrls: {
  default: {
    http: [
      "https://evm-tst3.exsat.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "exSat Explorer",
    url: "https://scan-testnet.exsat.network",
    apiUrl: "https://scan-testnet.exsat.network/api"
  }
}
}

export const Fantom: HbChain = {
  id: 250,
  name: "Fantom",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_fantom.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Fantom",
  symbol: "FTM"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ankr.com/fantom"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "FTMScan",
    url: "https://ftmscan.com",
    apiUrl: "https://api.ftmscan.com/api"
  }
}
}

export const FantomSonicTestnet: HbChain = {
  id: 64240,
  name: "Fantom Sonic Open Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Fantom",
  symbol: "FTM"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpcapi.sonic.fantom.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Fantom Sonic Open Testnet Explorer",
    url: "https://public-sonic.fantom.network"
  }
}
}

export const FantomTestnet: HbChain = {
  id: 4002,
  name: "Fantom Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Fantom",
  symbol: "FTM"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.fantom.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "FTMScan",
    url: "https://testnet.ftmscan.com",
    apiUrl: "https://testnet.ftmscan.com/api"
  }
}
}

export const Fibo: HbChain = {
  id: 12306,
  name: "Fibo Chain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "fibo",
  symbol: "FIBO"
},
  rpcUrls: {
  default: {
    http: [
      "https://network.hzroc.art"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "FiboScan",
    url: "https://scan.fibochain.org"
  }
}
}

export const Filecoin: HbChain = {
  id: 314,
  name: "Filecoin Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_filecoin.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "filecoin",
  symbol: "FIL"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.node.glif.io/rpc/v1"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Filfox",
    url: "https://filfox.info/en"
  }
}
}

export const FilecoinCalibration: HbChain = {
  id: 314159,
  name: "Filecoin Calibration",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "testnet filecoin",
  symbol: "tFIL"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.calibration.node.glif.io/rpc/v1"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Filscan",
    url: "https://calibration.filscan.io"
  }
}
}

export const FilecoinHyperspace: HbChain = {
  id: 3141,
  name: "Filecoin Hyperspace",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "testnet filecoin",
  symbol: "tFIL"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.hyperspace.node.glif.io/rpc/v1"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Filfox",
    url: "https://hyperspace.filfox.info/en"
  }
}
}

export const FireChain: HbChain = {
  id: 995,
  name: "5ireChain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "5ire Token",
  symbol: "5IRE",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.5ire.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "5ireChain Mainnet Explorer",
    url: "https://5irescan.io/"
  }
}
}

export const Flare: HbChain = {
  id: 14,
  name: "Flare Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_flare.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Flare",
  symbol: "FLR"
},
  rpcUrls: {
  default: {
    http: [
      "https://flare-api.flare.network/ext/C/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Flare Explorer",
    url: "https://flare-explorer.flare.network",
    apiUrl: "https://flare-explorer.flare.network/api"
  }
}
}

export const FlareTestnet: HbChain = {
  id: 114,
  name: "Flare Testnet Coston2",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Coston2 Flare",
  symbol: "C2FLR"
},
  rpcUrls: {
  default: {
    http: [
      "https://coston2-api.flare.network/ext/C/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Coston2 Explorer",
    url: "https://coston2-explorer.flare.network",
    apiUrl: "https://coston2-explorer.flare.network/api"
  }
}
}

export const FlowMainnet: HbChain = {
  id: 747,
  name: "Flow EVM Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Flow",
  symbol: "FLOW"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.evm.nodes.onflow.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Mainnet Explorer",
    url: "https://evm.flowscan.io"
  }
}
}

export const FlowPreviewnet: HbChain = {
  id: 646,
  name: "Flow EVM Previewnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Flow",
  symbol: "FLOW"
},
  rpcUrls: {
  default: {
    http: [
      "https://previewnet.evm.nodes.onflow.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Previewnet Explorer",
    url: "https://previewnet.flowdiver.io"
  }
}
}

export const FlowTestnet: HbChain = {
  id: 545,
  name: "Flow EVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Flow",
  symbol: "FLOW"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.evm.nodes.onflow.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Flow Diver",
    url: "https://evm-testnet.flowscan.io"
  }
}
}

export const Fluence: HbChain = {
  id: 9999999,
  name: "Fluence",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "FLT",
  symbol: "FLT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mainnet.fluence.dev"
    ],
    webSocket: [
      "wss://ws.mainnet.fluence.dev"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://blockscout.mainnet.fluence.dev",
    apiUrl: "https://blockscout.mainnet.fluence.dev/api"
  }
}
}

export const FluenceStage: HbChain = {
  id: 123420000220,
  name: "Fluence Stage",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "tFLT",
  symbol: "tFLT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.stage.fluence.dev"
    ],
    webSocket: [
      "wss://ws.stage.fluence.dev"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://blockscout.stage.fluence.dev",
    apiUrl: "https://blockscout.stage.fluence.dev/api"
  }
}
}

export const FluenceTestnet: HbChain = {
  id: 52164803,
  name: "Fluence Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "tFLT",
  symbol: "tFLT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.fluence.dev"
    ],
    webSocket: [
      "wss://ws.testnet.fluence.dev"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://blockscout.testnet.fluence.dev",
    apiUrl: "https://blockscout.testnet.fluence.dev/api"
  }
}
}

export const Forma: HbChain = {
  id: 984122,
  name: "Forma",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  symbol: "TIA",
  name: "TIA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.forma.art"
    ],
    webSocket: [
      "wss://ws.forma.art"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Forma Explorer",
    url: "https://explorer.forma.art"
  }
}
}

export const Foundry: HbChain = {
  id: 31337,
  name: "Foundry",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "http://127.0.0.1:8545"
    ],
    webSocket: [
      "ws://127.0.0.1:8545"
    ]
  }
},
}

export const Fraxtal: HbChain = {
  id: 252,
  name: "Fraxtal",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_fraxtal.jpg",
  nativeCurrency: {
  name: "Frax Ether",
  symbol: "frxETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.frax.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "fraxscan",
    url: "https://fraxscan.com",
    apiUrl: "https://api.fraxscan.com/api"
  }
}
}

export const FraxtalTestnet: HbChain = {
  id: 2522,
  name: "Fraxtal Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Frax Ether",
  symbol: "frxETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.frax.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "fraxscan testnet",
    url: "https://holesky.fraxscan.com",
    apiUrl: "https://api-holesky.fraxscan.com/api"
  }
}
}

export const FunkiMainnet: HbChain = {
  id: 33979,
  name: "Funki",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-mainnet.funkichain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Funki Mainnet Explorer",
    url: "https://funkiscan.io"
  }
}
}

export const FunkiSepolia: HbChain = {
  id: 3397901,
  name: "Funki Sepolia Sandbox",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://funki-testnet.alt.technology"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Funki Sepolia Sandbox Explorer",
    url: "https://sepolia-sandbox.funkichain.com/"
  }
}
}

export const Fuse: HbChain = {
  id: 122,
  name: "Fuse",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_fuse.jpg",
  nativeCurrency: {
  name: "Fuse",
  symbol: "FUSE",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.fuse.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Fuse Explorer",
    url: "https://explorer.fuse.io",
    apiUrl: "https://explorer.fuse.io/api"
  }
}
}

export const FuseSparknet: HbChain = {
  id: 123,
  name: "Fuse Sparknet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Spark",
  symbol: "SPARK",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.fusespark.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Sparkent Explorer",
    url: "https://explorer.fusespark.io",
    apiUrl: "https://explorer.fusespark.io/api"
  }
}
}

export const Fusion: HbChain = {
  id: 32659,
  name: "Fusion Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_fusion.jpg",
  nativeCurrency: {
  name: "Fusion",
  symbol: "FSN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.fusionnetwork.io"
    ],
    webSocket: [
      "wss://mainnet.fusionnetwork.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "FSNscan",
    url: "https://fsnscan.com"
  }
}
}

export const FusionTestnet: HbChain = {
  id: 46688,
  name: "Fusion Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Fusion",
  symbol: "FSN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.fusionnetwork.io"
    ],
    webSocket: [
      "wss://testnet.fusionnetwork.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "FSNscan",
    url: "https://testnet.fsnscan.com"
  }
}
}

export const Garnet: HbChain = {
  id: 17069,
  name: "Garnet Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.garnetchain.com"
    ],
    webSocket: [
      "wss://rpc.garnetchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://explorer.garnetchain.com"
  }
}
}

export const Geist: HbChain = {
  id: 63157,
  name: "Geist Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Aavegotchi GHST Token",
  symbol: "GHST"
},
  rpcUrls: {
  default: {
    http: [
      "https://geist-mainnet.g.alchemy.com/public"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://geist-mainnet.explorer.alchemy.com"
  }
}
}

export const Genesys: HbChain = {
  id: 16507,
  name: "Genesys Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_genesys.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "GSYS",
  symbol: "GSYS"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.genesys.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Genesys Explorer",
    url: "https://gchainexplorer.genesys.network"
  }
}
}

export const GlideL1Protocol: HbChain = {
  id: 251,
  name: "Glide L1 Protocol XP",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "GLXP",
  symbol: "GLXP",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-api.glideprotocol.xyz/l1-rpc"
    ],
    webSocket: [
      "wss://rpc-api.glideprotocol.xyz/l1-rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Glide Protocol Explore",
    url: "https://blockchain-explorer.glideprotocol.xyz"
  }
}
}

export const GlideL2Protocol: HbChain = {
  id: 253,
  name: "Glide L2 Protocol XP",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "GLXP",
  symbol: "GLXP",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-api.glideprotocol.xyz/l2-rpc"
    ],
    webSocket: [
      "wss://rpc-api.glideprotocol.xyz/l2-rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Glide Protocol Explore",
    url: "https://blockchain-explorer.glideprotocol.xyz"
  }
}
}

export const Gnosis: HbChain = {
  id: 100,
  name: "Gnosis",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_xdai.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "xDAI",
  symbol: "XDAI"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.gnosischain.com"
    ],
    webSocket: [
      "wss://rpc.gnosischain.com/wss"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Gnosisscan",
    url: "https://gnosisscan.io",
    apiUrl: "https://api.gnosisscan.io/api"
  }
}
}

export const GnosisChiado: HbChain = {
  id: 10200,
  name: "Gnosis Chiado",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Gnosis",
  symbol: "xDAI"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.chiadochain.net"
    ],
    webSocket: [
      "wss://rpc.chiadochain.net/wss"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://blockscout.chiadochain.net",
    apiUrl: "https://blockscout.chiadochain.net/api"
  }
}
}

export const Goat: HbChain = {
  id: 2345,
  name: "GOAT",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Bitcoin",
  symbol: "BTC"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.goat.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Goat Explorer",
    url: "https://explorer.goat.network"
  }
}
}

export const Gobi: HbChain = {
  id: 1663,
  name: "Horizen Gobi Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Test ZEN",
  symbol: "tZEN"
},
  rpcUrls: {
  default: {
    http: [
      "https://gobi-testnet.horizenlabs.io/ethv1"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Gobi Explorer",
    url: "https://gobi-explorer.horizen.io"
  }
}
}

export const GoChain: HbChain = {
  id: 60,
  name: "GoChain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_gochain.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "GO",
  symbol: "GO"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.gochain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "GoChain Explorer",
    url: "https://explorer.gochain.io"
  }
}
}

export const Godwoken: HbChain = {
  id: 71402,
  name: "Godwoken Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_godwoken.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "pCKB",
  symbol: "pCKB"
},
  rpcUrls: {
  default: {
    http: [
      "https://v1.mainnet.godwoken.io/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "GW Scan",
    url: "https://v1.gwscan.com"
  }
}
}

export const Goerli: HbChain = {
  id: 5,
  name: "Goerli",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Goerli Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ankr.com/eth_goerli"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://goerli.etherscan.io",
    apiUrl: "https://api-goerli.etherscan.io/api"
  }
}
}

export const Gravity: HbChain = {
  id: 1625,
  name: "Gravity Alpha Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_gravity.jpg",
  nativeCurrency: {
  name: "G",
  symbol: "G",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.gravity.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Gravity Explorer",
    url: "https://explorer.gravity.xyz",
    apiUrl: "https://explorer.gravity.xyz/api"
  }
}
}

export const GuruNetwork: HbChain = {
  id: 260,
  name: "Guru Network Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "GURU Token",
  symbol: "GURU",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.gurunetwork.ai/archive/260"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Guruscan",
    url: "https://scan.gurunetwork.ai"
  }
}
}

export const GuruTestnet: HbChain = {
  id: 261,
  name: "Guru Network Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "tGURU Token",
  symbol: "tGURU",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.gurunetwork.ai/archive/261"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Guruscan",
    url: "https://sepolia.gurunetwork.ai"
  }
}
}

export const Ham: HbChain = {
  id: 5112,
  name: "Ham",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ham",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ham.fun"
    ],
    webSocket: [
      "wss://rpc.ham.fun"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ham Chain Explorer",
    url: "https://explorer.ham.fun",
    apiUrl: "https://explorer.ham.fun/api/v2"
  }
}
}

export const HaqqMainnet: HbChain = {
  id: 11235,
  name: "HAQQ Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Islamic Coin",
  symbol: "ISLM"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.eth.haqq.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "HAQQ Explorer",
    url: "https://explorer.haqq.network",
    apiUrl: "https://explorer.haqq.network/api"
  }
}
}

export const HaqqTestedge2: HbChain = {
  id: 54211,
  name: "HAQQ Testedge 2",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Islamic Coin",
  symbol: "ISLMT"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.eth.testedge2.haqq.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "HAQQ Explorer",
    url: "https://explorer.testedge2.haqq.network",
    apiUrl: "https://explorer.testedge2.haqq.network/api"
  }
}
}

export const Hardhat: HbChain = {
  id: 31337,
  name: "Hardhat",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "http://127.0.0.1:8545"
    ]
  }
},
}

export const HarmonyOne: HbChain = {
  id: 1666600000,
  name: "Harmony One",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_harmony.jpg",
  nativeCurrency: {
  name: "Harmony",
  symbol: "ONE",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ankr.com/harmony"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Harmony Explorer",
    url: "https://explorer.harmony.one"
  }
}
}

export const HashkeyTestnet: HbChain = {
  id: 133,
  name: "HashKey Chain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "HashKey EcoPoints",
  symbol: "HSK"
},
  rpcUrls: {
  default: {
    http: [
      "https://hashkeychain-testnet.alt.technology"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "HashKey Chain Explorer",
    url: "https://hashkeychain-testnet-explorer.alt.technology"
  }
}
}

export const Hedera: HbChain = {
  id: 295,
  name: "Hedera Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  symbol: "HBAR",
  name: "HBAR",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.hashio.io/api"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Hashscan",
    url: "https://hashscan.io/mainnet"
  }
}
}

export const HederaPreviewnet: HbChain = {
  id: 297,
  name: "Hedera Previewnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  symbol: "HBAR",
  name: "HBAR",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://previewnet.hashio.io/api"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Hashscan",
    url: "https://hashscan.io/previewnet"
  }
}
}

export const HederaTestnet: HbChain = {
  id: 296,
  name: "Hedera Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  symbol: "HBAR",
  name: "HBAR",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.hashio.io/api"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Hashscan",
    url: "https://hashscan.io/testnet"
  }
}
}

export const Hela: HbChain = {
  id: 8668,
  name: "Hela Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_hela.jpg",
  nativeCurrency: {
  name: "HLUSD",
  symbol: "HLUSD",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-rpc.helachain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Hela explorer",
    url: "https://mainnet-blockexplorer.helachain.com"
  }
}
}

export const HemiSepolia: HbChain = {
  id: 743111,
  name: "Hemi Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.rpc.hemi.network/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Hemi Sepolia explorer",
    url: "https://testnet.explorer.hemi.xyz"
  }
}
}

export const Holesky: HbChain = {
  id: 17000,
  name: "Holesky",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Holesky Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://ethereum-holesky-rpc.publicnode.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://holesky.etherscan.io",
    apiUrl: "https://api-holesky.etherscan.io/api"
  }
}
}

export const Hpb: HbChain = {
  id: 269,
  name: "High Performance Blockchain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_hpb.jpg",
  nativeCurrency: {
  name: "HPB",
  symbol: "HPB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://hpbnode.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "hpbScan",
    url: "https://hscan.org"
  }
}
}

export const Huddle01Mainnet: HbChain = {
  id: 12323,
  name: "Huddle01 dRTC Chain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ethereum",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://huddle01.calderachain.xyz/http"
    ],
    webSocket: [
      "wss://huddle01.calderachain.xyz/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Huddle01 Caldera Explorer",
    url: "https://huddle01.calderaexplorer.xyz",
    apiUrl: "https://huddle01.calderaexplorer.xyz/api"
  }
}
}

export const Huddle01Testnet: HbChain = {
  id: 2524852,
  name: "Huddle01 dRTC Chain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ethereum",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://huddle-testnet.rpc.caldera.xyz/http"
    ],
    webSocket: [
      "wss://huddle-testnet.rpc.caldera.xyz/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Huddle01 Caldera Explorer",
    url: "https://huddle-testnet.explorer.caldera.xyz",
    apiUrl: "https://huddle-testnet.explorer.caldera.xyz/api"
  }
}
}

export const Humanode: HbChain = {
  id: 5234,
  name: "Humanode",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "HMND",
  symbol: "HMND",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://explorer-rpc-http.mainnet.stages.humanode.io"
    ],
    webSocket: [
      "wss://explorer-rpc-ws.mainnet.stages.humanode.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Subscan",
    url: "https://humanode.subscan.io"
  }
}
}

export const HumanodeTestnet5: HbChain = {
  id: 14853,
  name: "Humanode Testnet 5",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "HMND",
  symbol: "HMND",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://explorer-rpc-http.testnet5.stages.humanode.io"
    ],
    webSocket: [
      "wss://explorer-rpc-ws.testnet5.stages.humanode.io"
    ]
  }
},
}

export const Hychain: HbChain = {
  id: 2911,
  name: "HYCHAIN",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "HYTOPIA",
  symbol: "TOPIA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.hychain.com/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "HYCHAIN Explorer",
    url: "https://explorer.hychain.com"
  }
}
}

export const HychainTestnet: HbChain = {
  id: 29112,
  name: "HYCHAIN Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "HYTOPIA",
  symbol: "TOPIA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.hychain.com/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "HYCHAIN Explorer",
    url: "https://testnet-rpc.hychain.com/http"
  }
}
}

export const Idchain: HbChain = {
  id: 74,
  name: "IDChain Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "EIDI",
  symbol: "EIDI"
},
  rpcUrls: {
  default: {
    http: [
      "https://idchain.one/rpc"
    ],
    webSocket: [
      "wss://idchain.one/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "IDChain Explorer",
    url: "https://explorer.idchain.one"
  }
}
}

export const ImmutableZkEvm: HbChain = {
  id: 13371,
  name: "Immutable zkEVM",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_immutable%20zkevm.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Immutable Coin",
  symbol: "IMX"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.immutable.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Immutable Explorer",
    url: "https://explorer.immutable.com",
    apiUrl: "https://explorer.immutable.com/api"
  }
}
}

export const ImmutableZkEvmTestnet: HbChain = {
  id: 13473,
  name: "Immutable zkEVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Immutable Coin",
  symbol: "IMX"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.immutable.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Immutable Testnet Explorer",
    url: "https://explorer.testnet.immutable.com/"
  }
}
}

export const InEVM: HbChain = {
  id: 2525,
  name: "inEVM Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Injective",
  symbol: "INJ"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.rpc.inevm.com/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "inEVM Explorer",
    url: "https://inevm.calderaexplorer.xyz",
    apiUrl: "https://inevm.calderaexplorer.xyz/api/v2"
  }
}
}

export const InitVerse: HbChain = {
  id: 7233,
  name: "InitVerse Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "InitVerse",
  symbol: "INI"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-mainnet.inichain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "InitVerseScan",
    url: "https://www.iniscan.com",
    apiUrl: "https://explorer-api.inichain.com/api"
  }
}
}

export const InitVerseGenesis: HbChain = {
  id: 7234,
  name: "InitVerse Genesis Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "InitVerse",
  symbol: "INI"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-testnet.inichain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "InitVerseGenesisScan",
    url: "https://genesis-testnet.iniscan.com",
    apiUrl: "https://explorer-testnet-api.inichain.com/api"
  }
}
}

export const Ink: HbChain = {
  id: 57073,
  name: "Ink",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_ink.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-gel.inkonchain.com",
      "https://rpc-qnd.inkonchain.com"
    ],
    webSocket: [
      "wss://rpc-gel.inkonchain.com",
      "wss://rpc-qnd.inkonchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://explorer.inkonchain.com",
    apiUrl: "https://explorer.inkonchain.com/api/v2"
  }
}
}

export const InkSepolia: HbChain = {
  id: 763373,
  name: "Ink Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-gel-sepolia.inkonchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://explorer-sepolia.inkonchain.com/",
    apiUrl: "https://explorer-sepolia.inkonchain.com/api/v2"
  }
}
}

export const Iota: HbChain = {
  id: 8822,
  name: "IOTA EVM",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_iotaevm.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "IOTA",
  symbol: "IOTA"
},
  rpcUrls: {
  default: {
    http: [
      "https://json-rpc.evm.iotaledger.net"
    ],
    webSocket: [
      "wss://ws.json-rpc.evm.iotaledger.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://explorer.evm.iota.org",
    apiUrl: "https://explorer.evm.iota.org/api"
  }
}
}

export const IotaTestnet: HbChain = {
  id: 1075,
  name: "IOTA EVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "IOTA",
  symbol: "IOTA"
},
  rpcUrls: {
  default: {
    http: [
      "https://json-rpc.evm.testnet.iotaledger.net"
    ],
    webSocket: [
      "wss://ws.json-rpc.evm.testnet.iotaledger.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://explorer.evm.testnet.iotaledger.net",
    apiUrl: "https://explorer.evm.testnet.iotaledger.net/api"
  }
}
}

export const Iotex: HbChain = {
  id: 4689,
  name: "IoTeX",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_iotex.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "IoTeX",
  symbol: "IOTX"
},
  rpcUrls: {
  default: {
    http: [
      "https://babel-api.mainnet.iotex.io"
    ],
    webSocket: [
      "wss://babel-api.mainnet.iotex.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "IoTeXScan",
    url: "https://iotexscan.io"
  }
}
}

export const IotexTestnet: HbChain = {
  id: 4690,
  name: "IoTeX Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "IoTeX",
  symbol: "IOTX"
},
  rpcUrls: {
  default: {
    http: [
      "https://babel-api.testnet.iotex.io"
    ],
    webSocket: [
      "wss://babel-api.testnet.iotex.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "IoTeXScan",
    url: "https://testnet.iotexscan.io"
  }
}
}

export const ISunCoin: HbChain = {
  id: 8017,
  name: "iSunCoin Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ISC",
  symbol: "ISC"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.isuncoin.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "iSunCoin Explorer",
    url: "https://baifa.io/app/chains/8017"
  }
}
}

export const Jbc: HbChain = {
  id: 8899,
  name: "JIBCHAIN L1",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_jbc.jpg",
  nativeCurrency: {
  name: "JBC",
  symbol: "JBC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-l1.jibchain.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://exp-l1.jibchain.net",
    apiUrl: "https://exp-l1.jibchain.net/api"
  }
}
}

export const JbcTestnet: HbChain = {
  id: 88991,
  name: "Jibchain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "tJBC",
  symbol: "tJBC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.jibchain.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://exp.testnet.jibchain.net",
    apiUrl: "https://exp.testnet.jibchain.net/api"
  }
}
}

export const Karura: HbChain = {
  id: 686,
  name: "Karura",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Karura",
  symbol: "KAR",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://eth-rpc-karura.aca-api.network"
    ],
    webSocket: [
      "wss://eth-rpc-karura.aca-api.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Karura Blockscout",
    url: "https://blockscout.karura.network",
    apiUrl: "https://blockscout.karura.network/api"
  }
}
}

export const KakarotSepolia: HbChain = {
  id: 1802203764,
  name: "Kakarot Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia-rpc.kakarot.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Kakarot Scan",
    url: "https://sepolia.kakarotscan.org"
  }
}
}

export const KakarotStarknetSepolia: HbChain = {
  id: 920637907288165,
  name: "Kakarot Starknet Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia-rpc.kakarot.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Kakarot Scan",
    url: "https://sepolia.kakarotscan.org"
  }
}
}

export const KardiaChain: HbChain = {
  id: 24,
  name: "KardiaChain Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_kardia.jpg",
  nativeCurrency: {
  name: "KAI",
  symbol: "KAI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.kardiachain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "KardiaChain Explorer",
    url: "https://explorer.kardiachain.io"
  }
}
}

export const Kava: HbChain = {
  id: 2222,
  name: "Kava EVM",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_kava.jpg",
  nativeCurrency: {
  name: "Kava",
  symbol: "KAVA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://evm.kava.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Kava EVM Explorer",
    url: "https://kavascan.com",
    apiUrl: "https://kavascan.com/api"
  }
}
}

export const KavaTestnet: HbChain = {
  id: 2221,
  name: "Kava EVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Kava",
  symbol: "KAVA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://evm.testnet.kava.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Kava EVM Testnet Explorer",
    url: "https://testnet.kavascan.com/",
    apiUrl: "https://testnet.kavascan.com/api"
  }
}
}

export const Kcc: HbChain = {
  id: 321,
  name: "KCC Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_kucoin.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "KCS",
  symbol: "KCS"
},
  rpcUrls: {
  default: {
    http: [
      "https://kcc-rpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "KCC Explorer",
    url: "https://explorer.kcc.io"
  }
}
}

export const Kinto: HbChain = {
  id: 7887,
  name: "Kinto Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.kinto.xyz/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Kinto Explorer",
    url: "https://explorer.kinto.xyz"
  }
}
}

export const Klaytn: HbChain = {
  id: 8217,
  name: "Klaytn",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_klaytn.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Klaytn",
  symbol: "KLAY"
},
  rpcUrls: {
  default: {
    http: [
      "https://public-en-cypress.klaytn.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "KlaytnScope",
    url: "https://scope.klaytn.com"
  }
}
}

export const Kaia: HbChain = {
  id: 8217,
  name: "Kaia",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_klaytn.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Kaia",
  symbol: "KAIA"
},
  rpcUrls: {
  default: {
    http: [
      "https://public-en.node.kaia.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "KaiaScan",
    url: "https://kaiascan.io",
    apiUrl: "https://api-cypress.klaytnscope.com/api"
  }
}
}

export const Kairos: HbChain = {
  id: 1001,
  name: "Kairos Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Kairos KAIA",
  symbol: "KAIA"
},
  rpcUrls: {
  default: {
    http: [
      "https://public-en-kairos.node.kaia.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "KaiaScan",
    url: "https://kairos.kaiascan.io"
  }
}
}

export const KlaytnBaobab: HbChain = {
  id: 1001,
  name: "Klaytn Baobab Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Baobab Klaytn",
  symbol: "KLAY"
},
  rpcUrls: {
  default: {
    http: [
      "https://public-en-baobab.klaytn.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "KlaytnScope",
    url: "https://baobab.klaytnscope.com"
  }
}
}

export const Koi: HbChain = {
  id: 701,
  name: "Koi Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Koi Network Native Token",
  symbol: "KRING"
},
  rpcUrls: {
  default: {
    http: [
      "https://koi-rpc.darwinia.network"
    ],
    webSocket: [
      "wss://koi-rpc.darwinia.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://koi-scan.darwinia.network"
  }
}
}

export const Kroma: HbChain = {
  id: 255,
  name: "Kroma",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ETH",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.kroma.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Kroma Explorer",
    url: "https://blockscout.kroma.network",
    apiUrl: "https://blockscout.kroma.network/api"
  }
}
}

export const KromaSepolia: HbChain = {
  id: 2358,
  name: "Kroma Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.sepolia.kroma.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Kroma Sepolia Explorer",
    url: "https://blockscout.sepolia.kroma.network",
    apiUrl: "https://blockscout.sepolia.kroma.network/api"
  }
}
}

export const L3x: HbChain = {
  id: 12324,
  name: "L3X Protocol",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-mainnet.l3x.com"
    ],
    webSocket: [
      "wss://rpc-mainnet.l3x.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "L3X Mainnet Explorer",
    url: "https://explorer.l3x.com",
    apiUrl: "https://explorer.l3x.com/api/v2"
  }
}
}

export const L3xTestnet: HbChain = {
  id: 12325,
  name: "L3X Protocol Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-testnet.l3x.com"
    ],
    webSocket: [
      "wss://rpc-testnet.l3x.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "L3X Testnet Explorer",
    url: "https://explorer-testnet.l3x.com",
    apiUrl: "https://explorer-testnet.l3x.com/api/v2"
  }
}
}

export const Lavita: HbChain = {
  id: 360890,
  name: "LAVITA Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "vTFUEL",
  symbol: "vTFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://tsub360890-eth-rpc.thetatoken.org/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "LAVITA Explorer",
    url: "https://tsub360890-explorer.thetatoken.org"
  }
}
}

export const LensTestnet: HbChain = {
  id: 37111,
  name: "Lens Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "GRASS",
  symbol: "GRASS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.lens.dev"
    ],
    webSocket: [
      "wss://rpc.testnet.lens.dev/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Lens Block Explorer",
    url: "https://block-explorer.testnet.lens.dev",
    apiUrl: "https://block-explorer-api.staging.lens.dev/api"
  }
}
}

export const LightlinkPegasus: HbChain = {
  id: 1891,
  name: "LightLink Pegasus Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://replicator.pegasus.lightlink.io/rpc/v1"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "LightLink Pegasus Explorer",
    url: "https://pegasus.lightlink.io"
  }
}
}

export const LightlinkPhoenix: HbChain = {
  id: 1890,
  name: "LightLink Phoenix Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://replicator.phoenix.lightlink.io/rpc/v1"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "LightLink Phoenix Explorer",
    url: "https://phoenix.lightlink.io"
  }
}
}

export const Linea: HbChain = {
  id: 59144,
  name: "Linea Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_linea.jpg",
  nativeCurrency: {
  name: "Linea Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.linea.build"
    ],
    webSocket: [
      "wss://rpc.linea.build"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://lineascan.build",
    apiUrl: "https://api.lineascan.build/api"
  }
}
}

export const LineaGoerli: HbChain = {
  id: 59140,
  name: "Linea Goerli Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Linea Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.goerli.linea.build"
    ],
    webSocket: [
      "wss://rpc.goerli.linea.build"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://goerli.lineascan.build",
    apiUrl: "https://api-goerli.lineascan.build/api"
  }
}
}

export const LineaSepolia: HbChain = {
  id: 59141,
  name: "Linea Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Linea Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.sepolia.linea.build"
    ],
    webSocket: [
      "wss://rpc.sepolia.linea.build"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://sepolia.lineascan.build",
    apiUrl: "https://api-sepolia.lineascan.build/api"
  }
}
}

export const LineaTestnet: HbChain = {
  id: 59140,
  name: "Linea Goerli Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Linea Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.goerli.linea.build"
    ],
    webSocket: [
      "wss://rpc.goerli.linea.build"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://goerli.lineascan.build",
    apiUrl: "https://goerli.lineascan.build/api"
  }
}
}

export const Lisk: HbChain = {
  id: 1135,
  name: "Lisk",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_lisk.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.api.lisk.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://blockscout.lisk.com",
    apiUrl: "https://blockscout.lisk.com/api"
  }
}
}

export const LiskSepolia: HbChain = {
  id: 4202,
  name: "Lisk Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.sepolia-api.lisk.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://sepolia-blockscout.lisk.com",
    apiUrl: "https://sepolia-blockscout.lisk.com/api"
  }
}
}

export const Localhost: HbChain = {
  id: 1337,
  name: "Localhost",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "http://127.0.0.1:8545"
    ]
  }
},
}

export const Loop: HbChain = {
  id: 15551,
  name: "LoopNetwork Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_loop.jpg",
  nativeCurrency: {
  name: "LOOP",
  symbol: "LOOP",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.mainnetloop.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "LoopNetwork Blockchain Explorer",
    url: "https://explorer.mainnetloop.com/"
  }
}
}

export const Lukso: HbChain = {
  id: 42,
  name: "LUKSO",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_lukso.jpg",
  nativeCurrency: {
  name: "LUKSO",
  symbol: "LYX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mainnet.lukso.network"
    ],
    webSocket: [
      "wss://ws-rpc.mainnet.lukso.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "LUKSO Mainnet Explorer",
    url: "https://explorer.execution.mainnet.lukso.network",
    apiUrl: "https://api.explorer.execution.mainnet.lukso.network/api"
  }
}
}

export const LuksoTestnet: HbChain = {
  id: 4201,
  name: "LUKSO Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "LUKSO Testnet",
  symbol: "LYXt"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.lukso.network"
    ],
    webSocket: [
      "wss://ws-rpc.testnet.lukso.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "LUKSO Testnet Explorer",
    url: "https://explorer.execution.testnet.lukso.network",
    apiUrl: "https://api.explorer.execution.testnet.lukso.network/api"
  }
}
}

export const LumiaMainnet: HbChain = {
  id: 994873017,
  name: "Lumia Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Lumia",
  symbol: "LUMIA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-rpc.lumia.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Lumia Explorer",
    url: "https://explorer.lumia.org/"
  }
}
}

export const LumiaTestnet: HbChain = {
  id: 1952959480,
  name: "Lumia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Lumia",
  symbol: "LUMIA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.lumia.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Lumia Testnet Explorer",
    url: "https://testnet-explorer.lumia.org/"
  }
}
}

export const Lycan: HbChain = {
  id: 721,
  name: "Lycan",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Lycan",
  symbol: "LYC"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.lycanchain.com",
      "https://us-east.lycanchain.com",
      "https://us-west.lycanchain.com",
      "https://eu-north.lycanchain.com",
      "https://eu-west.lycanchain.com",
      "https://asia-southeast.lycanchain.com"
    ],
    webSocket: [
      "wss://rpc.lycanchain.com",
      "wss://us-east.lycanchain.com",
      "wss://us-west.lycanchain.com",
      "wss://eu-north.lycanchain.com",
      "wss://eu-west.lycanchain.com",
      "wss://asia-southeast.lycanchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Lycan Explorer",
    url: "https://explorer.lycanchain.com"
  }
}
}

export const Lyra: HbChain = {
  id: 957,
  name: "Lyra Chain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_lyra%20chain.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.lyra.finance"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Lyra Explorer",
    url: "https://explorer.lyra.finance",
    apiUrl: "https://explorer.lyra.finance/api/v2"
  }
}
}

export const Mainnet: HbChain = {
  id: 1,
  name: "Ethereum",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://eth.merkle.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://etherscan.io",
    apiUrl: "https://api.etherscan.io/api"
  }
}
}

export const Mandala: HbChain = {
  id: 595,
  name: "Mandala TC9",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Mandala",
  symbol: "mACA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://eth-rpc-tc9.aca-staging.network"
    ],
    webSocket: [
      "wss://eth-rpc-tc9.aca-staging.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Mandala Blockscout",
    url: "https://blockscout.mandala.aca-staging.network",
    apiUrl: "https://blockscout.mandala.aca-staging.network/api"
  }
}
}

export const Manta: HbChain = {
  id: 169,
  name: "Manta Pacific Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_manta.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://pacific-rpc.manta.network/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Manta Explorer",
    url: "https://pacific-explorer.manta.network",
    apiUrl: "https://pacific-explorer.manta.network/api"
  }
}
}

export const MantaSepoliaTestnet: HbChain = {
  id: 3441006,
  name: "Manta Pacific Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://pacific-rpc.sepolia-testnet.manta.network/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Manta Sepolia Testnet Explorer",
    url: "https://pacific-explorer.sepolia-testnet.manta.network",
    apiUrl: "https://pacific-explorer.sepolia-testnet.manta.network/api"
  }
}
}

export const MantaTestnet: HbChain = {
  id: 3441005,
  name: "Manta Pacific Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://manta-testnet.calderachain.xyz/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Manta Testnet Explorer",
    url: "https://pacific-explorer.testnet.manta.network",
    apiUrl: "https://pacific-explorer.testnet.manta.network/api"
  }
}
}

export const Mantle: HbChain = {
  id: 5000,
  name: "Mantle",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_mantle.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "MNT",
  symbol: "MNT"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mantle.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Mantle Explorer",
    url: "https://mantlescan.xyz/",
    apiUrl: "https://api.mantlescan.xyz/api"
  }
}
}

export const MantleSepoliaTestnet: HbChain = {
  id: 5003,
  name: "Mantle Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "MNT",
  symbol: "MNT"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.sepolia.mantle.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Mantle Testnet Explorer",
    url: "https://explorer.sepolia.mantle.xyz/",
    apiUrl: "https://explorer.sepolia.mantle.xyz/api"
  }
}
}

export const MantleTestnet: HbChain = {
  id: 5001,
  name: "Mantle Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "MNT",
  symbol: "MNT"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.mantle.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Mantle Testnet Explorer",
    url: "https://explorer.testnet.mantle.xyz",
    apiUrl: "https://explorer.testnet.mantle.xyz/api"
  }
}
}

export const MapProtocol: HbChain = {
  id: 22776,
  name: "MAP Protocol",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_map%20protocol.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "MAPO",
  symbol: "MAPO"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.maplabs.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "MAPO Scan",
    url: "https://maposcan.io"
  }
}
}

export const Matchain: HbChain = {
  id: 698,
  name: "Matchain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_matchain.jpg",
  nativeCurrency: {
  name: "BNB",
  symbol: "BNB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.matchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Matchain Scan",
    url: "https://matchscan.io"
  }
}
}

export const MatchainTestnet: HbChain = {
  id: 699,
  name: "Matchain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BNB",
  symbol: "BNB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.matchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Matchain Scan",
    url: "https://testnet.matchscan.io"
  }
}
}

export const MchVerse: HbChain = {
  id: 29548,
  name: "MCH Verse",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Oasys",
  symbol: "OAS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.oasys.mycryptoheroes.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "MCH Verse Explorer",
    url: "https://explorer.oasys.mycryptoheroes.net",
    apiUrl: "https://explorer.oasys.mycryptoheroes.net/api"
  }
}
}

export const Mekong: HbChain = {
  id: 7078815900,
  name: "Mekong Pectra Devnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "eth",
  symbol: "eth",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mekong.ethpandaops.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Block Explorer",
    url: "https://explorer.mekong.ethpandaops.io"
  }
}
}

export const Meld: HbChain = {
  id: 333000333,
  name: "Meld",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Meld",
  symbol: "MELD"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-1.meld.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "MELDscan",
    url: "https://meldscan.io"
  }
}
}

export const Merlin: HbChain = {
  id: 4200,
  name: "Merlin",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BTC",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.merlinchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://scan.merlinchain.io",
    apiUrl: "https://scan.merlinchain.io/api"
  }
}
}

export const Metachain: HbChain = {
  id: 571,
  name: "MetaChain Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Metatime Coin",
  symbol: "MTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.metatime.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "MetaExplorer",
    url: "https://explorer.metatime.com"
  }
}
}

export const MetachainIstanbul: HbChain = {
  id: 1453,
  name: "MetaChain Istanbul",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Metatime Coin",
  symbol: "MTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://istanbul-rpc.metachain.dev"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "MetaExplorer",
    url: "https://istanbul-explorer.metachain.dev"
  }
}
}

export const Metadium: HbChain = {
  id: 11,
  name: "Metadium Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "META",
  symbol: "META"
},
  rpcUrls: {
  default: {
    http: [
      "https://api.metadium.com/prod"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Metadium Explorer",
    url: "https://explorer.metadium.com"
  }
}
}

export const MetalL2: HbChain = {
  id: 1750,
  name: "Metal L2",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.metall2.com"
    ],
    webSocket: [
      "wss://rpc.metall2.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://explorer.metall2.com",
    apiUrl: "https://explorer.metall2.com/api"
  }
}
}

export const Meter: HbChain = {
  id: 82,
  name: "Meter",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_meter.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "MTR",
  symbol: "MTR"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.meter.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "MeterScan",
    url: "https://scan.meter.io"
  }
}
}

export const MeterTestnet: HbChain = {
  id: 83,
  name: "Meter Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "MTR",
  symbol: "MTR"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpctest.meter.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "MeterTestnetScan",
    url: "https://scan-warringstakes.meter.io"
  }
}
}

export const Metis: HbChain = {
  id: 1088,
  name: "Metis",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_metis.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Metis",
  symbol: "METIS"
},
  rpcUrls: {
  default: {
    http: [
      "https://andromeda.metis.io/?owner=1088"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Metis Explorer",
    url: "https://explorer.metis.io",
    apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan/api"
  }
}
}

export const MetisGoerli: HbChain = {
  id: 599,
  name: "Metis Goerli",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Metis Goerli",
  symbol: "METIS"
},
  rpcUrls: {
  default: {
    http: [
      "https://goerli.gateway.metisdevops.link"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Metis Goerli Explorer",
    url: "https://goerli.explorer.metisdevops.link",
    apiUrl: "https://goerli.explorer.metisdevops.link/api"
  }
}
}

export const Mev: HbChain = {
  id: 7518,
  name: "MEVerse Chain Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "MEVerse",
  symbol: "MEV"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.meversemainnet.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://www.meversescan.io"
  }
}
}

export const MevTestnet: HbChain = {
  id: 4759,
  name: "MEVerse Chain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "MEVerse",
  symbol: "MEV"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.meversetestnet.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://testnet.meversescan.io/"
  }
}
}

export const Mint: HbChain = {
  id: 185,
  name: "Mint Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mintchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Mintchain explorer",
    url: "https://explorer.mintchain.io"
  }
}
}

export const MintSepoliaTestnet: HbChain = {
  id: 1686,
  name: "Mint Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.mintchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Mintchain Testnet explorer",
    url: "https://testnet-explorer.mintchain.io"
  }
}
}

export const MitosisTestnet: HbChain = {
  id: 124832,
  name: "Mitosis Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "MITO",
  symbol: "MITO",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.mitosis.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Mitosis testnet explorer",
    url: "https://testnet.mitosiscan.xyz"
  }
}
}

export const Mode: HbChain = {
  id: 34443,
  name: "Mode Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.mode.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Modescan",
    url: "https://modescan.io"
  }
}
}

export const ModeTestnet: HbChain = {
  id: 919,
  name: "Mode Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.mode.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://sepolia.explorer.mode.network",
    apiUrl: "https://sepolia.explorer.mode.network/api"
  }
}
}

export const MoonbaseAlpha: HbChain = {
  id: 1287,
  name: "Moonbase Alpha",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "DEV",
  symbol: "DEV"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.api.moonbase.moonbeam.network"
    ],
    webSocket: [
      "wss://wss.api.moonbase.moonbeam.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Moonscan",
    url: "https://moonbase.moonscan.io",
    apiUrl: "https://moonbase.moonscan.io/api"
  }
}
}

export const Moonbeam: HbChain = {
  id: 1284,
  name: "Moonbeam",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_moonbeam.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "GLMR",
  symbol: "GLMR"
},
  rpcUrls: {
  default: {
    http: [
      "https://moonbeam.public.blastapi.io"
    ],
    webSocket: [
      "wss://moonbeam.public.blastapi.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Moonscan",
    url: "https://moonscan.io",
    apiUrl: "https://api-moonbeam.moonscan.io/api"
  }
}
}

export const MoonbeamDev: HbChain = {
  id: 1281,
  name: "Moonbeam Development Node",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "DEV",
  symbol: "DEV"
},
  rpcUrls: {
  default: {
    http: [
      "http://127.0.0.1:9944"
    ],
    webSocket: [
      "wss://127.0.0.1:9944"
    ]
  }
},
}

export const Moonriver: HbChain = {
  id: 1285,
  name: "Moonriver",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_moonriver.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "MOVR",
  symbol: "MOVR"
},
  rpcUrls: {
  default: {
    http: [
      "https://moonriver.public.blastapi.io"
    ],
    webSocket: [
      "wss://moonriver.public.blastapi.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Moonscan",
    url: "https://moonriver.moonscan.io",
    apiUrl: "https://api-moonriver.moonscan.io/api"
  }
}
}

export const Morph: HbChain = {
  id: 2818,
  name: "Morph",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_morph.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.morphl2.io"
    ],
    webSocket: [
      "wss://rpc.morphl2.io:8443"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Morph Explorer",
    url: "https://explorer.morphl2.io"
  }
}
}

export const MorphHolesky: HbChain = {
  id: 2810,
  name: "Morph Holesky",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-quicknode-holesky.morphl2.io"
    ],
    webSocket: [
      "wss://rpc-quicknode-holesky.morphl2.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Morph Holesky Explorer",
    url: "https://explorer-holesky.morphl2.io",
    apiUrl: "https://explorer-api-holesky.morphl2.io/api?"
  }
}
}

export const MorphSepolia: HbChain = {
  id: 2710,
  name: "Morph Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-testnet.morphl2.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Morph Testnet Explorer",
    url: "https://explorer-testnet.morphl2.io",
    apiUrl: "https://explorer-api-testnet.morphl2.io/api"
  }
}
}

export const Nahmii: HbChain = {
  id: 5551,
  name: "Nahmii 2 Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_nahmii.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://l2.nahmii.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Nahmii 2 Explorer",
    url: "https://explorer.n2.nahmii.io"
  }
}
}

export const Nautilus: HbChain = {
  id: 22222,
  name: "Nautilus Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ZBC",
  symbol: "ZBC",
  decimals: 9
},
  rpcUrls: {
  default: {
    http: [
      "https://api.nautilus.nautchain.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "NautScan",
    url: "https://nautscan.com"
  }
}
}

export const Near: HbChain = {
  id: 397,
  name: "NEAR Protocol",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "NEAR",
  symbol: "NEAR"
},
  rpcUrls: {
  default: {
    http: [
      "https://eth-rpc.mainnet.near.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "NEAR Explorer",
    url: "https://eth-explorer.near.org"
  }
}
}

export const NearTestnet: HbChain = {
  id: 398,
  name: "NEAR Protocol Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "NEAR",
  symbol: "NEAR"
},
  rpcUrls: {
  default: {
    http: [
      "https://eth-rpc.testnet.near.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "NEAR Explorer",
    url: "https://eth-explorer-testnet.near.org"
  }
}
}

export const NeonDevnet: HbChain = {
  id: 245022926,
  name: "Neon EVM DevNet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "NEON",
  symbol: "NEON",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://devnet.neonevm.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Neonscan",
    url: "https://devnet.neonscan.org"
  }
}
}

export const NeonMainnet: HbChain = {
  id: 245022934,
  name: "Neon EVM MainNet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_neon.jpg",
  nativeCurrency: {
  name: "NEON",
  symbol: "NEON",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://neon-proxy-mainnet.solana.p2p.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Neonscan",
    url: "https://neonscan.org"
  }
}
}

export const NeoxMainnet: HbChain = {
  id: 47763,
  name: "Neo X Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Gas",
  symbol: "GAS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-1.rpc.banelabs.org",
      "https://mainnet-2.rpc.banelabs.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Neo X - Explorer",
    url: "https://xexplorer.neo.org"
  }
}
}

export const NeoxT4: HbChain = {
  id: 12227332,
  name: "Neo X Testnet T4",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Gas",
  symbol: "GAS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.rpc.banelabs.org/"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "neox-scan",
    url: "https://xt4scan.ngd.network"
  }
}
}

export const Nexi: HbChain = {
  id: 4242,
  name: "Nexi",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Nexi",
  symbol: "NEXI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.chain.nexi.technology"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "NexiScan",
    url: "https://www.nexiscan.com",
    apiUrl: "https://www.nexiscan.com/api"
  }
}
}

export const Nexilix: HbChain = {
  id: 240,
  name: "Nexilix Smart Chain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Nexilix",
  symbol: "NEXILIX"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpcurl.pos.nexilix.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "NexilixScan",
    url: "https://scan.nexilix.com"
  }
}
}

export const OasisTestnet: HbChain = {
  id: 4090,
  name: "Oasis Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Fasttoken",
  symbol: "FTN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc1.oasis.bahamutchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ftnscan",
    url: "https://oasis.ftnscan.com",
    apiUrl: "https://oasis.ftnscan.com/api"
  }
}
}

export const Oasys: HbChain = {
  id: 248,
  name: "Oasys",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_oasys.jpg",
  nativeCurrency: {
  name: "Oasys",
  symbol: "OAS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mainnet.oasys.games"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "OasysScan",
    url: "https://scan.oasys.games",
    apiUrl: "https://scan.oasys.games/api"
  }
}
}

export const OdysseyTestnet: HbChain = {
  id: 911867,
  name: "Odyssey Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://odyssey.ithaca.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Odyssey Explorer",
    url: "https://odyssey-explorer.ithaca.xyz",
    apiUrl: "https://odyssey-explorer.ithaca.xyz/api"
  }
}
}

export const Okc: HbChain = {
  id: 66,
  name: "OKC",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_okexchain.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "OKT",
  symbol: "OKT"
},
  rpcUrls: {
  default: {
    http: [
      "https://exchainrpc.okex.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "oklink",
    url: "https://www.oklink.com/okc"
  }
}
}

export const Omax: HbChain = {
  id: 311,
  name: "Omax Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_omax.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "OMAX",
  symbol: "OMAX"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainapi.omaxray.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Omax Explorer",
    url: "https://omaxscan.com"
  }
}
}

export const OneWorld: HbChain = {
  id: 309075,
  name: "One World Chain Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "OWCT",
  symbol: "OWCT"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-rpc.oneworldchain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "One World Explorer",
    url: "https://mainnet.oneworldchain.org"
  }
}
}

export const OortMainnetDev: HbChain = {
  id: 9700,
  name: "OORT MainnetDev",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "OORT",
  symbol: "OORT"
},
  rpcUrls: {
  default: {
    http: [
      "https://dev-rpc.oortech.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "OORT MainnetDev Explorer",
    url: "https://dev-scan.oortech.com"
  }
}
}

export const OpBNB: HbChain = {
  id: 204,
  name: "opBNB",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_op_bnb.jpg",
  nativeCurrency: {
  name: "BNB",
  symbol: "BNB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://opbnb-mainnet-rpc.bnbchain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "opBNB (BSCScan)",
    url: "https://opbnb.bscscan.com",
    apiUrl: "https://api-opbnb.bscscan.com/api"
  }
}
}

export const OpBNBTestnet: HbChain = {
  id: 5611,
  name: "opBNB Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "tBNB",
  symbol: "tBNB"
},
  rpcUrls: {
  default: {
    http: [
      "https://opbnb-testnet-rpc.bnbchain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "opbnbscan",
    url: "https://testnet.opbnbscan.com"
  }
}
}

export const Optimism: HbChain = {
  id: 10,
  name: "OP Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_optimism.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.optimism.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Optimism Explorer",
    url: "https://optimistic.etherscan.io",
    apiUrl: "https://api-optimistic.etherscan.io/api"
  }
}
}

export const OptimismGoerli: HbChain = {
  id: 420,
  name: "Optimism Goerli",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Goerli Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://goerli.optimism.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://goerli-optimism.etherscan.io",
    apiUrl: "https://goerli-optimism.etherscan.io/api"
  }
}
}

export const OptimismSepolia: HbChain = {
  id: 11155420,
  name: "OP Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.optimism.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://optimism-sepolia.blockscout.com",
    apiUrl: "https://optimism-sepolia.blockscout.com/api"
  }
}
}

export const Optopia: HbChain = {
  id: 62050,
  name: "Optopia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-mainnet.optopia.ai"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Optopia Explorer",
    url: "https://scan.optopia.ai"
  }
}
}

export const OptopiaTestnet: HbChain = {
  id: 62049,
  name: "Optopia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-testnet.optopia.ai"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Optopia Explorer",
    url: "https://scan-testnet.optopia.ai"
  }
}
}

export const Orderly: HbChain = {
  id: 291,
  name: "Orderly",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.orderly.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Orderly Explorer",
    url: "https://explorer.orderly.network"
  }
}
}

export const OrderlySepolia: HbChain = {
  id: 4460,
  name: "Orderly Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://l2-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Orderly Explorer",
    url: "https://explorerl2new-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz"
  }
}
}

export const OtimDevnet: HbChain = {
  id: 41144114,
  name: "Otim Devnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "http://devnet.otim.xyz"
    ]
  }
},
}

export const Palm: HbChain = {
  id: 11297108109,
  name: "Palm",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_palm.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "PALM",
  symbol: "PALM"
},
  rpcUrls: {
  default: {
    http: [
      "https://palm-mainnet.public.blastapi.io"
    ],
    webSocket: [
      "wss://palm-mainnet.public.blastapi.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Chainlens",
    url: "https://palm.chainlens.com"
  }
}
}

export const PalmTestnet: HbChain = {
  id: 11297108099,
  name: "Palm Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "PALM",
  symbol: "PALM"
},
  rpcUrls: {
  default: {
    http: [
      "https://palm-mainnet.public.blastapi.io"
    ],
    webSocket: [
      "wss://palm-mainnet.public.blastapi.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Chainlens",
    url: "https://palm.chainlens.com"
  }
}
}

export const Pgn: HbChain = {
  id: 424,
  name: "PGN",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.publicgoods.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PGN Explorer",
    url: "https://explorer.publicgoods.network",
    apiUrl: "https://explorer.publicgoods.network/api"
  }
}
}

export const PgnTestnet: HbChain = {
  id: 58008,
  name: "PGN ",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.publicgoods.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PGN Testnet Explorer",
    url: "https://explorer.sepolia.publicgoods.network",
    apiUrl: "https://explorer.sepolia.publicgoods.network/api"
  }
}
}

export const Phoenix: HbChain = {
  id: 13381,
  name: "Phoenix Blockchain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Phoenix",
  symbol: "PHX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.phoenixplorer.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Phoenixplorer",
    url: "https://phoenixplorer.com",
    apiUrl: "https://phoenixplorer.com/api"
  }
}
}

export const Planq: HbChain = {
  id: 7070,
  name: "Planq Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_planq.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "PLQ",
  symbol: "PLQ"
},
  rpcUrls: {
  default: {
    http: [
      "https://evm-rpc.planq.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Planq Explorer",
    url: "https://evm.planq.network"
  }
}
}

export const PlayfiAlbireo: HbChain = {
  id: 1612127,
  name: "PlayFi Albireo Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://albireo-rpc.playfi.ai"
    ],
    webSocket: [
      "wss://albireo-rpc-ws.playfi.ai/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PlayFi Albireo Explorer",
    url: "https://albireo-explorer.playfi.ai"
  }
}
}

export const Plinga: HbChain = {
  id: 242,
  name: "Plinga",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Plinga",
  symbol: "PLINGA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpcurl.mainnet.plgchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Plgscan",
    url: "https://www.plgscan.com"
  }
}
}

export const Plume: HbChain = {
  id: 98865,
  name: "Plume Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Plume Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.plumenetwork.xyz"
    ],
    webSocket: [
      "wss://rpc.plumenetwork.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://explorer.plumenetwork.xyz",
    apiUrl: "https://explorer.plumenetwork.xyz/api"
  }
}
}

export const PlumeDevnet: HbChain = {
  id: 98864,
  name: "Plume Devnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Plume Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://test-rpc.plumenetwork.xyz"
    ],
    webSocket: [
      "wss://test-rpc.plumenetwork.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://test-explorer.plumenetwork.xyz",
    apiUrl: "https://test-explorer.plumenetwork.xyz/api"
  }
}
}

export const PlumeTestnet: HbChain = {
  id: 161221135,
  name: "Plume Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Plume Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.plumenetwork.xyz/http"
    ],
    webSocket: [
      "wss://testnet-rpc.plumenetwork.xyz/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://testnet-explorer.plumenetwork.xyz",
    apiUrl: "https://testnet-explorer.plumenetwork.xyz/api"
  }
}
}

export const PolterTestnet: HbChain = {
  id: 631571,
  name: "Polter Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Polter GHST",
  symbol: "GHST"
},
  rpcUrls: {
  default: {
    http: [
      "https://geist-polter.g.alchemy.com/public"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://polter-testnet.explorer.alchemy.com"
  }
}
}

export const Polygon: HbChain = {
  id: 137,
  name: "Polygon",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
  nativeCurrency: {
  name: "POL",
  symbol: "POL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://polygon-rpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PolygonScan",
    url: "https://polygonscan.com",
    apiUrl: "https://api.polygonscan.com/api"
  }
}
}

export const PolygonAmoy: HbChain = {
  id: 80002,
  name: "Polygon Amoy",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "POL",
  symbol: "POL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-amoy.polygon.technology"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PolygonScan",
    url: "https://amoy.polygonscan.com",
    apiUrl: "https://api-amoy.polygonscan.com/api"
  }
}
}

export const PolygonMumbai: HbChain = {
  id: 80001,
  name: "Polygon Mumbai",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "MATIC",
  symbol: "MATIC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.ankr.com/polygon_mumbai"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PolygonScan",
    url: "https://mumbai.polygonscan.com",
    apiUrl: "https://api-testnet.polygonscan.com/api"
  }
}
}

export const PolygonZkEvm: HbChain = {
  id: 1101,
  name: "Polygon zkEVM",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_polygon%20zkevm.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://zkevm-rpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PolygonScan",
    url: "https://zkevm.polygonscan.com",
    apiUrl: "https://api-zkevm.polygonscan.com/api"
  }
}
}

export const PolygonZkEvmCardona: HbChain = {
  id: 2442,
  name: "Polygon zkEVM Cardona",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.cardona.zkevm-rpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PolygonScan",
    url: "https://cardona-zkevm.polygonscan.com",
    apiUrl: "https://cardona-zkevm.polygonscan.com/api"
  }
}
}

export const PolygonZkEvmTestnet: HbChain = {
  id: 1442,
  name: "Polygon zkEVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.public.zkevm-test.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PolygonScan",
    url: "https://testnet-zkevm.polygonscan.com",
    apiUrl: "https://testnet-zkevm.polygonscan.com/api"
  }
}
}

export const Pulsechain: HbChain = {
  id: 369,
  name: "PulseChain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_pulse.jpg",
  nativeCurrency: {
  name: "Pulse",
  symbol: "PLS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.pulsechain.com"
    ],
    webSocket: [
      "wss://ws.pulsechain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PulseScan",
    url: "https://scan.pulsechain.com",
    apiUrl: "https://api.scan.pulsechain.com/api"
  }
}
}

export const PulsechainV4: HbChain = {
  id: 943,
  name: "PulseChain V4",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "V4 Pulse",
  symbol: "v4PLS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.v4.testnet.pulsechain.com"
    ],
    webSocket: [
      "wss://ws.v4.testnet.pulsechain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "PulseScan",
    url: "https://scan.v4.testnet.pulsechain.com",
    apiUrl: "https://scan.v4.testnet.pulsechain.com/api"
  }
}
}

export const Ql1: HbChain = {
  id: 766,
  name: "QL1",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "QOM",
  symbol: "QOM"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.qom.one"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ql1 Explorer",
    url: "https://scan.qom.one"
  }
}
}

export const QMainnet: HbChain = {
  id: 35441,
  name: "Q Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Q",
  symbol: "Q"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.q.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Q Mainnet Explorer",
    url: "https://explorer.q.org",
    apiUrl: "https://explorer.q.org/api"
  }
}
}

export const QTestnet: HbChain = {
  id: 35443,
  name: "Q Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Q",
  symbol: "Q"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.qtestnet.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Q Testnet Explorer",
    url: "https://explorer.qtestnet.org",
    apiUrl: "https://explorer.qtestnet.org/api"
  }
}
}

export const Real: HbChain = {
  id: 111188,
  name: "re.al",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_real.jpg",
  nativeCurrency: {
  name: "reETH",
  decimals: 18,
  symbol: "reETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://real.drpc.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "re.al Explorer",
    url: "https://explorer.re.al",
    apiUrl: "https://explorer.re.al/api/v2"
  }
}
}

export const RedbellyMainnet: HbChain = {
  id: 151,
  name: "Redbelly Network Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_rbn.jpg",
  nativeCurrency: {
  name: "Redbelly Native Coin",
  symbol: "RBNT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://governors.mainnet.redbelly.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Routescan",
    url: "https://redbelly.routescan.io",
    apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/151/etherscan/api"
  }
}
}

export const RedbellyTestnet: HbChain = {
  id: 153,
  name: "Redbelly Network Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Redbelly Native Coin",
  symbol: "RBNT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://governors.testnet.redbelly.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Routescan",
    url: "https://redbelly.testnet.routescan.io",
    apiUrl: "https://api.routescan.io/v2/network/testnet/evm/153_2/etherscan/api"
  }
}
}

export const Redstone: HbChain = {
  id: 690,
  name: "Redstone",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_redstone.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.redstonechain.com"
    ],
    webSocket: [
      "wss://rpc.redstonechain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://explorer.redstone.xyz"
  }
}
}

export const Rei: HbChain = {
  id: 47805,
  name: "REI Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_rei.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "REI",
  symbol: "REI"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.rei.network"
    ],
    webSocket: [
      "wss://rpc.rei.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "REI Scan",
    url: "https://scan.rei.network"
  }
}
}

export const ReyaNetwork: HbChain = {
  id: 1729,
  name: "Reya Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_reya%20network.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.reya.network"
    ],
    webSocket: [
      "wss://ws.reya.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Reya Network Explorer",
    url: "https://explorer.reya.network"
  }
}
}

export const ReddioSepolia: HbChain = {
  id: 50341,
  name: "Reddio Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Reddio",
  symbol: "RED",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://reddio-dev.reddio.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Reddioscan",
    url: "https://reddio-devnet.l2scan.co",
    apiUrl: "https://reddio-devnet.l2scan.co/api"
  }
}
}

export const Rivalz: HbChain = {
  id: 753,
  name: "Rivalz",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rivalz.calderachain.xyz/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Rivalz Caldera Explorer",
    url: "https://rivalz.calderaexplorer.xyz"
  }
}
}

export const Rollux: HbChain = {
  id: 570,
  name: "Rollux Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_rollux.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Syscoin",
  symbol: "SYS"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.rollux.com"
    ],
    webSocket: [
      "wss://rpc.rollux.com/wss"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "RolluxExplorer",
    url: "https://explorer.rollux.com",
    apiUrl: "https://explorer.rollux.com/api"
  }
}
}

export const RolluxTestnet: HbChain = {
  id: 57000,
  name: "Rollux Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Syscoin",
  symbol: "SYS"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-tanenbaum.rollux.com/"
    ],
    webSocket: [
      "wss://rpc-tanenbaum.rollux.com/wss"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "RolluxTestnetExplorer",
    url: "https://rollux.tanenbaum.io",
    apiUrl: "https://rollux.tanenbaum.io/api"
  }
}
}

export const Ronin: HbChain = {
  id: 2020,
  name: "Ronin",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "RON",
  symbol: "RON",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.roninchain.com/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ronin Explorer",
    url: "https://app.roninchain.com"
  }
}
}

export const Root: HbChain = {
  id: 7668,
  name: "The Root Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "XRP",
  symbol: "XRP"
},
  rpcUrls: {
  default: {
    http: [
      "https://root.rootnet.live/archive"
    ],
    webSocket: [
      "wss://root.rootnet.live/archive/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Rootscan",
    url: "https://rootscan.io"
  }
}
}

export const RootPorcini: HbChain = {
  id: 7672,
  name: "The Root Network - Porcini",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "XRP",
  symbol: "XRP"
},
  rpcUrls: {
  default: {
    http: [
      "https://porcini.rootnet.app/archive"
    ],
    webSocket: [
      "wss://porcini.rootnet.app/archive/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Rootscan",
    url: "https://porcini.rootscan.io"
  }
}
}

export const Rootstock: HbChain = {
  id: 30,
  name: "Rootstock Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_rsk.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Rootstock Bitcoin",
  symbol: "RBTC"
},
  rpcUrls: {
  default: {
    http: [
      "https://public-node.rsk.co"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "RSK Explorer",
    url: "https://explorer.rsk.co"
  }
}
}

export const RootstockTestnet: HbChain = {
  id: 31,
  name: "Rootstock Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Rootstock Bitcoin",
  symbol: "tRBTC"
},
  rpcUrls: {
  default: {
    http: [
      "https://public-node.testnet.rsk.co"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "RSK Explorer",
    url: "https://explorer.testnet.rootstock.io"
  }
}
}

export const Rss3: HbChain = {
  id: 12553,
  name: "RSS3 VSL Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "RSS3",
  symbol: "RSS3",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.rss3.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "RSS3 VSL Mainnet Scan",
    url: "https://scan.rss3.io",
    apiUrl: "https://scan.rss3.io/api"
  }
}
}

export const Rss3Sepolia: HbChain = {
  id: 2331,
  name: "RSS3 VSL Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "RSS3",
  symbol: "RSS3",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.rss3.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "RSS3 VSL Sepolia Testnet Scan",
    url: "https://scan.testnet.rss3.io",
    apiUrl: "https://scan.testnet.rss3.io/api"
  }
}
}

export const Saakuru: HbChain = {
  id: 7225878,
  name: "Saakuru Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_saakuru.jpg",
  nativeCurrency: {
  name: "OAS",
  symbol: "OAS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.saakuru.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Saakuru Explorer",
    url: "https://explorer.saakuru.network"
  }
}
}

export const Saga: HbChain = {
  id: 5464,
  name: "Saga",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "gas",
  symbol: "GAS"
},
  rpcUrls: {
  default: {
    http: [
      "http://sagaevm-5464-1.jsonrpc.sagarpc.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Saga Explorer",
    url: "https://sagaevm-5464-1.sagaexplorer.io"
  }
}
}

export const Saigon: HbChain = {
  id: 2021,
  name: "Saigon Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "RON",
  symbol: "RON",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://saigon-testnet.roninchain.com/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Saigon Explorer",
    url: "https://saigon-app.roninchain.com"
  }
}
}

export const Sanko: HbChain = {
  id: 1996,
  name: "Sanko",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_sanko.jpg",
  nativeCurrency: {
  name: "DMT",
  symbol: "DMT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.sanko.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Sanko Explorer",
    url: "https://explorer.sanko.xyz"
  }
}
}

export const Sapphire: HbChain = {
  id: 23294,
  name: "Oasis Sapphire",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_sapphire.jpg",
  nativeCurrency: {
  name: "Sapphire Rose",
  symbol: "ROSE",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sapphire.oasis.io"
    ],
    webSocket: [
      "wss://sapphire.oasis.io/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Oasis Explorer",
    url: "https://explorer.oasis.io/mainnet/sapphire"
  }
}
}

export const SapphireTestnet: HbChain = {
  id: 23295,
  name: "Oasis Sapphire Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sapphire Test Rose",
  symbol: "TEST",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.sapphire.oasis.dev"
    ],
    webSocket: [
      "wss://testnet.sapphire.oasis.dev/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Oasis Explorer",
    url: "https://explorer.oasis.io/testnet/sapphire"
  }
}
}

export const SatoshiVM: HbChain = {
  id: 3109,
  name: "SatoshiVM Alpha Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BTC",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://alpha-rpc-node-http.svmscan.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://svmscan.io",
    apiUrl: "https://svmscan.io/api"
  }
}
}

export const SatoshiVMTestnet: HbChain = {
  id: 3110,
  name: "SatoshiVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BTC",
  symbol: "BTC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://test-rpc-node-http.svmscan.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://testnet.svmscan.io",
    apiUrl: "https://testnet.svmscan.io/api"
  }
}
}

export const ScrollSepolia: HbChain = {
  id: 534351,
  name: "Scroll Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia-rpc.scroll.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Scrollscan",
    url: "https://sepolia.scrollscan.com",
    apiUrl: "https://api-sepolia.scrollscan.com/api"
  }
}
}

export const Sei: HbChain = {
  id: 1329,
  name: "Sei Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_sei.jpg",
  nativeCurrency: {
  name: "Sei",
  symbol: "SEI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://evm-rpc.sei-apis.com/"
    ],
    webSocket: [
      "wss://evm-ws.sei-apis.com/"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Seitrace",
    url: "https://seitrace.com",
    apiUrl: "https://seitrace.com/pacific-1/api"
  }
}
}

export const SeiDevnet: HbChain = {
  id: 713715,
  name: "Sei Devnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sei",
  symbol: "SEI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://evm-rpc-arctic-1.sei-apis.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Seitrace",
    url: "https://seitrace.com"
  }
}
}

export const SeiTestnet: HbChain = {
  id: 1328,
  name: "Sei Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sei",
  symbol: "SEI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://evm-rpc-testnet.sei-apis.com"
    ],
    webSocket: [
      "wss://evm-ws-testnet.sei-apis.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Seitrace",
    url: "https://seitrace.com"
  }
}
}

export const Sepolia: HbChain = {
  id: 11155111,
  name: "Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.drpc.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://sepolia.etherscan.io",
    apiUrl: "https://api-sepolia.etherscan.io/api"
  }
}
}

export const Shape: HbChain = {
  id: 360,
  name: "Shape",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.shape.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "shapescan",
    url: "https://shapescan.xyz",
    apiUrl: "https://shapescan.xyz/api"
  }
}
}

export const ShapeSepolia: HbChain = {
  id: 11011,
  name: "Shape Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.shape.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://explorer-sepolia.shape.network/",
    apiUrl: "https://explorer-sepolia.shape.network/api/v2"
  }
}
}

export const ShardeumSphinx: HbChain = {
  id: 8082,
  name: "Shardeum Sphinx",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "SHARDEUM",
  symbol: "SHM",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sphinx.shardeum.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Shardeum Explorer",
    url: "https://explorer-sphinx.shardeum.org"
  }
}
}

export const Shibarium: HbChain = {
  id: 109,
  name: "Shibarium",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Bone",
  symbol: "BONE",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.shibrpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://shibariumscan.io"
  }
}
}

export const ShibariumTestnet: HbChain = {
  id: 157,
  name: "Puppynet Shibarium",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Bone",
  symbol: "BONE"
},
  rpcUrls: {
  default: {
    http: [
      "https://puppynet.shibrpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://puppyscan.shib.io",
    apiUrl: "https://puppyscan.shib.io/api"
  }
}
}

export const Shiden: HbChain = {
  id: 336,
  name: "Shiden",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_shiden.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "SDN",
  symbol: "SDN"
},
  rpcUrls: {
  default: {
    http: [
      "https://shiden.public.blastapi.io"
    ],
    webSocket: [
      "wss://shiden-rpc.dwellir.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Shiden Scan",
    url: "https://shiden.subscan.io"
  }
}
}

export const Shimmer: HbChain = {
  id: 148,
  name: "Shimmer",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_shimmer_evm.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Shimmer",
  symbol: "SMR"
},
  rpcUrls: {
  default: {
    http: [
      "https://json-rpc.evm.shimmer.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Shimmer Network Explorer",
    url: "https://explorer.evm.shimmer.network",
    apiUrl: "https://explorer.evm.shimmer.network/api"
  }
}
}

export const ShimmerTestnet: HbChain = {
  id: 1073,
  name: "Shimmer Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Shimmer",
  symbol: "SMR"
},
  rpcUrls: {
  default: {
    http: [
      "https://json-rpc.evm.testnet.shimmer.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Shimmer Network Explorer",
    url: "https://explorer.evm.testnet.shimmer.network",
    apiUrl: "https://explorer.evm.testnet.shimmer.network/api"
  }
}
}

export const Silicon: HbChain = {
  id: 2355,
  name: "Silicon zkEVM",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.silicon.network",
      "https://silicon-mainnet.nodeinfra.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SiliconScope",
    url: "https://scope.silicon.network"
  }
}
}

export const SiliconSepolia: HbChain = {
  id: 1722641160,
  name: "Silicon Sepolia zkEVM",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-sepolia.silicon.network",
      "https://silicon-testnet.nodeinfra.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SiliconSepoliaScope",
    url: "https://scope-sepolia.silicon.network"
  }
}
}

export const SixProtocol: HbChain = {
  id: 98,
  name: "Six Protocol",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "SIX",
  symbol: "SIX"
},
  rpcUrls: {
  default: {
    http: [
      "https://sixnet-rpc-evm.sixprotocol.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Six Protocol Scan",
    url: "https://sixscan.io/sixnet"
  }
}
}

export const SkaleBlockBrawlers: HbChain = {
  id: 391845894,
  name: "SKALE | Block Brawlers",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BRAWL",
  symbol: "BRAWL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/frayed-decent-antares"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleCalypso: HbChain = {
  id: 1564830818,
  name: "SKALE | Calypso NFT Hub",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleCalypsoTestnet: HbChain = {
  id: 974399131,
  name: "SKALE Calypso Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.skalenodes.com/v1/giant-half-dual-testnet"
    ],
    webSocket: [
      "wss://testnet.skalenodes.com/v1/ws/giant-half-dual-testnet"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com"
  }
}
}

export const SkaleCryptoBlades: HbChain = {
  id: 1026062157,
  name: "SKALE | CryptoBlades",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleCryptoColosseum: HbChain = {
  id: 1032942172,
  name: "SKALE | Crypto Colosseum",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleEuropa: HbChain = {
  id: 2046399126,
  name: "SKALE | Europa Liquidity Hub",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/elated-tan-skat"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleEuropaTestnet: HbChain = {
  id: 1444673419,
  name: "SKALE Europa Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.skalenodes.com/v1/juicy-low-small-testnet"
    ],
    webSocket: [
      "wss://testnet.skalenodes.com/v1/ws/juicy-low-small-testnet"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com"
  }
}
}

export const SkaleExorde: HbChain = {
  id: 2139927552,
  name: "SKALE | Exorde",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/light-vast-diphda"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleHumanProtocol: HbChain = {
  id: 1273227453,
  name: "SKALE | Human Protocol",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/wan-red-ain"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://wan-red-ain.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleNebula: HbChain = {
  id: 1482601649,
  name: "SKALE | Nebula Gaming Hub",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/green-giddy-denebola"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleNebulaTestnet: HbChain = {
  id: 37084624,
  name: "SKALE Nebula Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet"
    ],
    webSocket: [
      "wss://testnet.skalenodes.com/v1/ws/lanky-ill-funny-testnet"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com"
  }
}
}

export const SkaleRazor: HbChain = {
  id: 278611351,
  name: "SKALE | Razor Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleTitan: HbChain = {
  id: 1350216234,
  name: "SKALE | Titan Community Hub",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.skalenodes.com/v1/parallel-stormy-spica"
    ],
    webSocket: [
      "wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
  }
}
}

export const SkaleTitanTestnet: HbChain = {
  id: 1020352220,
  name: "SKALE Titan Hub",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sFUEL",
  symbol: "sFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.skalenodes.com/v1/aware-fake-trim-testnet"
    ],
    webSocket: [
      "wss://testnet.skalenodes.com/v1/ws/aware-fake-trim-testnet"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SKALE Explorer",
    url: "https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com"
  }
}
}

export const Sketchpad: HbChain = {
  id: 984123,
  name: "Forma Sketchpad",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  symbol: "TIA",
  name: "TIA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.sketchpad-1.forma.art"
    ],
    webSocket: [
      "wss://ws.sketchpad-1.forma.art"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Sketchpad Explorer",
    url: "https://explorer.sketchpad-1.forma.art"
  }
}
}

export const Snax: HbChain = {
  id: 2192,
  name: "SnaxChain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.snaxchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Snax Explorer",
    url: "https://explorer.snaxchain.io",
    apiUrl: "https://explorer.snaxchain.io/api"
  }
}
}

export const SnaxTestnet: HbChain = {
  id: 13001,
  name: "SnaxChain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.snaxchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Snax Explorer",
    url: "https://testnet-explorer.snaxchain.io",
    apiUrl: "https://testnet-explorer.snaxchain.io/api"
  }
}
}

export const Soneium: HbChain = {
  id: 1868,
  name: "Soneium Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_soneium.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.soneium.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://soneium.blockscout.com",
    apiUrl: "https://soneium.blockscout.com/api"
  }
}
}

export const SoneiumMinato: HbChain = {
  id: 1946,
  name: "Soneium Minato Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Sepolia Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.minato.soneium.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://soneium-minato.blockscout.com",
    apiUrl: "https://soneium-minato.blockscout.com/api"
  }
}
}

export const Sonic: HbChain = {
  id: 146,
  name: "Sonic",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_sonic.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Sonic",
  symbol: "S"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.soniclabs.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Sonic Explorer",
    url: "https://sonicscan.org/"
  }
}
}

export const SonicTestnet: HbChain = {
  id: 64165,
  name: "Sonic Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Sonic",
  symbol: "S"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.soniclabs.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Sonic Testnet Explorer",
    url: "https://testnet.soniclabs.com/"
  }
}
}

export const Songbird: HbChain = {
  id: 19,
  name: "Songbird Canary-Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_songbird.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Songbird",
  symbol: "SGB"
},
  rpcUrls: {
  default: {
    http: [
      "https://songbird-api.flare.network/ext/C/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Songbird Explorer",
    url: "https://songbird-explorer.flare.network",
    apiUrl: "https://songbird-explorer.flare.network/api"
  }
}
}

export const SongbirdTestnet: HbChain = {
  id: 16,
  name: "Songbird Testnet Coston",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Coston Flare",
  symbol: "CFLR"
},
  rpcUrls: {
  default: {
    http: [
      "https://coston-api.flare.network/ext/C/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Coston Explorer",
    url: "https://coston-explorer.flare.network",
    apiUrl: "https://coston-explorer.flare.network/api"
  }
}
}

export const Sophon: HbChain = {
  id: 50104,
  name: "Sophon",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_sophon.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Sophon",
  symbol: "SOPH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.sophon.xyz"
    ],
    webSocket: [
      "wss://rpc.sophon.xyz/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Sophon Block Explorer",
    url: "https://explorer.sophon.xyz"
  }
}
}

export const SophonTestnet: HbChain = {
  id: 531050104,
  name: "Sophon Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Sophon",
  symbol: "SOPH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.sophon.xyz"
    ],
    webSocket: [
      "wss://rpc.testnet.sophon.xyz/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Sophon Block Explorer",
    url: "https://explorer.testnet.sophon.xyz"
  }
}
}

export const Spicy: HbChain = {
  id: 88882,
  name: "Chiliz Spicy Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "CHZ",
  symbol: "CHZ"
},
  rpcUrls: {
  default: {
    http: [
      "https://spicy-rpc.chiliz.com",
      "https://chiliz-spicy-rpc.publicnode.com"
    ],
    webSocket: [
      "wss://spicy-rpc-ws.chiliz.com",
      "wss://chiliz-spicy-rpc.publicnode.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Chiliz Explorer",
    url: "http://spicy-explorer.chiliz.com",
    apiUrl: "http://spicy-explorer.chiliz.com/api"
  }
}
}

export const Step: HbChain = {
  id: 1234,
  name: "Step Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_step.jpg",
  nativeCurrency: {
  name: "FITFI",
  symbol: "FITFI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.step.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Step Scan",
    url: "https://stepscan.io"
  }
}
}

export const StoryOdyssey: HbChain = {
  id: 1516,
  name: "Story Odyssey",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "IP",
  symbol: "IP"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.odyssey.storyrpc.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Story Odyssey Explorer",
    url: "https://odyssey.storyscan.xyz"
  }
}
}

export const StoryTestnet: HbChain = {
  id: 1513,
  name: "Story Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "IP",
  symbol: "IP"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.storyrpc.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Story Testnet Explorer",
    url: "https://testnet.storyscan.xyz"
  }
}
}

export const Stratis: HbChain = {
  id: 105105,
  name: "Stratis Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_stratis.jpg",
  nativeCurrency: {
  name: "Stratis",
  symbol: "STRAX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.stratisevm.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Stratis Explorer",
    url: "https://explorer.stratisevm.com"
  }
}
}

export const Superlumio: HbChain = {
  id: 8866,
  name: "SuperLumio",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.lumio.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Lumio explorer",
    url: "https://explorer.lumio.io"
  }
}
}

export const Superposition: HbChain = {
  id: 55244,
  name: "Superposition",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_superposition.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.superposition.so"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Superposition Explorer",
    url: "https://explorer.superposition.so"
  }
}
}

export const Superseed: HbChain = {
  id: 5330,
  name: "Superseed",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.superseed.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Superseed Explorer",
    url: "https://explorer.superseed.xyz",
    apiUrl: "https://explorer.superseed.xyz/api/v2"
  }
}
}

export const SuperseedSepolia: HbChain = {
  id: 53302,
  name: "Superseed Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.superseed.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Superseed Sepolia Explorer",
    url: "https://sepolia-explorer.superseed.xyz",
    apiUrl: "https://sepolia-explorer.superseed.xyz/api/v2"
  }
}
}

export const Swan: HbChain = {
  id: 254,
  name: "Swan Chain Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-rpc.swanchain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Swan Explorer",
    url: "https://swanscan.io"
  }
}
}

export const SwanProximaTestnet: HbChain = {
  id: 20241133,
  name: "Swan Proxima Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Swan Ether",
  symbol: "sETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-proxima.swanchain.io\t"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Swan Explorer",
    url: "https://proxima-explorer.swanchain.io"
  }
}
}

export const SwanSaturnTestnet: HbChain = {
  id: 2024,
  name: "Swan Saturn Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Swan Ether",
  symbol: "sETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://saturn-rpc.swanchain.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Swan Explorer",
    url: "https://saturn-explorer.swanchain.io"
  }
}
}

export const Swellchain: HbChain = {
  id: 1923,
  name: "Swellchain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_swellchain.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://swell-mainnet.alt.technology",
      "https://rpc.ankr.com/swell"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Swell Explorer",
    url: "https://explorer.swellnetwork.io",
    apiUrl: "https://explorer.swellnetwork.io/api"
  }
}
}

export const Swissdlt: HbChain = {
  id: 94,
  name: "SwissDLT Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "BCTS",
  symbol: "BCTS"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.swissdlt.ch"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SwissDLT Explorer",
    url: "https://explorer.swissdlt.ch"
  }
}
}

export const Syscoin: HbChain = {
  id: 57,
  name: "Syscoin Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_syscoin.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Syscoin",
  symbol: "SYS"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.syscoin.org"
    ],
    webSocket: [
      "wss://rpc.syscoin.org/wss"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SyscoinExplorer",
    url: "https://explorer.syscoin.org",
    apiUrl: "https://explorer.syscoin.org/api"
  }
}
}

export const SyscoinTestnet: HbChain = {
  id: 5700,
  name: "Syscoin Tanenbaum Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Syscoin",
  symbol: "SYS"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.tanenbaum.io"
    ],
    webSocket: [
      "wss://rpc.tanenbaum.io/wss"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "SyscoinTestnetExplorer",
    url: "https://tanenbaum.io"
  }
}
}

export const Taiko: HbChain = {
  id: 167000,
  name: "Taiko Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_taiko.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mainnet.taiko.xyz"
    ],
    webSocket: [
      "wss://ws.mainnet.taiko.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Taikoscan",
    url: "https://taikoscan.io",
    apiUrl: "https://api.taikoscan.io/api"
  }
}
}

export const TaikoHekla: HbChain = {
  id: 167009,
  name: "Taiko Hekla L2",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.hekla.taiko.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Taikoscan",
    url: "https://hekla.taikoscan.network"
  }
}
}

export const TaikoJolnir: HbChain = {
  id: 167007,
  name: "Taiko Jolnir (Alpha-5 Testnet)",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.jolnir.taiko.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://explorer.jolnir.taiko.xyz"
  }
}
}

export const TaikoKatla: HbChain = {
  id: 167008,
  name: "Taiko Katla (Alpha-6 Testnet)",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.katla.taiko.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://explorer.katla.taiko.xyz"
  }
}
}

export const TaikoTestnetSepolia: HbChain = {
  id: 167005,
  name: "Taiko (Alpha-3 Testnet)",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.test.taiko.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "blockscout",
    url: "https://explorer.test.taiko.xyz"
  }
}
}

export const Taraxa: HbChain = {
  id: 841,
  name: "Taraxa Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_tara.jpg",
  nativeCurrency: {
  name: "Tara",
  symbol: "TARA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.mainnet.taraxa.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Taraxa Explorer",
    url: "https://explorer.mainnet.taraxa.io"
  }
}
}

export const TaraxaTestnet: HbChain = {
  id: 842,
  name: "Taraxa Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Tara",
  symbol: "TARA",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.taraxa.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Taraxa Explorer",
    url: "https://explorer.testnet.taraxa.io"
  }
}
}

export const TelcoinTestnet: HbChain = {
  id: 2017,
  name: "Telcoin Adiri Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Telcoin",
  symbol: "TEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.telcoin.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "telscan",
    url: "https://telscan.io"
  }
}
}

export const Telos: HbChain = {
  id: 40,
  name: "Telos",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_telos.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Telos",
  symbol: "TLOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.telos.net/evm"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Teloscan",
    url: "https://www.teloscan.io/"
  }
}
}

export const TelosTestnet: HbChain = {
  id: 41,
  name: "Telos",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Telos",
  symbol: "TLOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.telos.net/evm"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Teloscan (testnet)",
    url: "https://testnet.teloscan.io/"
  }
}
}

export const Tenet: HbChain = {
  id: 1559,
  name: "Tenet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_tenet.jpg",
  nativeCurrency: {
  name: "TENET",
  symbol: "TENET",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.tenet.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "TenetScan Mainnet",
    url: "https://tenetscan.io",
    apiUrl: "https://tenetscan.io/api"
  }
}
}

export const Ternoa: HbChain = {
  id: 752025,
  name: "Ternoa",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Capsule Coin",
  symbol: "CAPS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-mainnet.zkevm.ternoa.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ternoa Explorer",
    url: "https://explorer-mainnet.zkevm.ternoa.network"
  }
}
}

export const ThaiChain: HbChain = {
  id: 7,
  name: "ThaiChain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "TCH",
  symbol: "TCH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.thaichain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://exp.thaichain.org",
    apiUrl: "https://exp.thaichain.org/api"
  }
}
}

export const That: HbChain = {
  id: 8428,
  name: "THAT Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_that.jpg",
  nativeCurrency: {
  name: "THAT",
  symbol: "THAT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.thatchain.io/mainnet"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://that.blockscout.com"
  }
}
}

export const Theta: HbChain = {
  id: 361,
  name: "Theta Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_theta.jpg",
  nativeCurrency: {
  name: "TFUEL",
  symbol: "TFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://eth-rpc-api.thetatoken.org/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Theta Explorer",
    url: "https://explorer.thetatoken.org"
  }
}
}

export const ThetaTestnet: HbChain = {
  id: 365,
  name: "Theta Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "TFUEL",
  symbol: "TFUEL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://eth-rpc-api-testnet.thetatoken.org/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Theta Explorer",
    url: "https://testnet-explorer.thetatoken.org"
  }
}
}

export const ThunderCore: HbChain = {
  id: 108,
  name: "ThunderCore Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_thundercore.jpg",
  nativeCurrency: {
  name: "TT",
  symbol: "TT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet-rpc.thundercore.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ThunderCore Explorer",
    url: "https://explorer-mainnet.thundercore.com"
  }
}
}

export const ThunderTestnet: HbChain = {
  id: 997,
  name: "5ireChain Thunder Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "5ire Token",
  symbol: "5IRE",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.5ire.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "5ireChain Thunder Explorer",
    url: "https://testnet.5irescan.io/"
  }
}
}

export const TiktrixTestnet: HbChain = {
  id: 62092,
  name: "TikTrix Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "tTTX",
  symbol: "tTTX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://tiktrix-rpc.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "TikTrix Testnet Explorer",
    url: "https://tiktrix.xyz"
  }
}
}

export const Tomb: HbChain = {
  id: 6969,
  name: "Tomb Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_tombchain.jpg",
  nativeCurrency: {
  name: "TOMB",
  symbol: "TOMB",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.tombchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Tomb Explorer",
    url: "https://tombscout.com"
  }
}
}

export const Treasure: HbChain = {
  id: 61166,
  name: "Treasure",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "MAGIC",
  symbol: "MAGIC"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.treasure.lol"
    ],
    webSocket: [
      "wss://rpc.treasure.lol/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Treasure Block Explorer",
    url: "https://treasurescan.io"
  }
}
}

export const TreasureTopaz: HbChain = {
  id: 978658,
  name: "Treasure Topaz Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "MAGIC",
  symbol: "MAGIC"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.topaz.treasure.lol"
    ],
    webSocket: [
      "wss://rpc.topaz.treasure.lol/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Treasure Topaz Block Explorer",
    url: "https://topaz.treasurescan.io"
  }
}
}

export const Tron: HbChain = {
  id: 728126428,
  name: "Tron",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "TRON",
  symbol: "TRX",
  decimals: 6
},
  rpcUrls: {
  default: {
    http: [
      "https://api.trongrid.io/jsonrpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Tronscan",
    url: "https://tronscan.org",
    apiUrl: "https://apilist.tronscanapi.com/api"
  }
}
}

export const Ubiq: HbChain = {
  id: 8,
  name: "Ubiq Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_ubiq.jpg",
  nativeCurrency: {
  name: "UBQ",
  symbol: "UBQ",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://pyrus2.ubiqscan.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ubiq Scan",
    url: "https://ubiqscan.io"
  }
}
}

export const UltraTestnet: HbChain = {
  id: 18881,
  name: "Ultra EVM Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Ultra Token",
  symbol: "UOS"
},
  rpcUrls: {
  default: {
    http: [
      "https://evm.test.ultra.eosusa.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ultra EVM Testnet Explorer",
    url: "https://evmexplorer.testnet.ultra.io"
  }
}
}

export const Ultron: HbChain = {
  id: 1231,
  name: "Ultron Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_ultron.jpg",
  nativeCurrency: {
  name: "ULX",
  symbol: "ULX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://ultron-rpc.net"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ultron Scan",
    url: "https://ulxscan.com"
  }
}
}

export const UltronTestnet: HbChain = {
  id: 1230,
  name: "Ultron Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ULX",
  symbol: "ULX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://ultron-dev.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ultron Scan",
    url: "https://explorer.ultron-dev.io"
  }
}
}

export const UnichainSepolia: HbChain = {
  id: 1301,
  name: "Unichain Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.unichain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Uniscan",
    url: "https://sepolia.uniscan.xyz",
    apiUrl: "https://api-sepolia.uniscan.xyz/api"
  }
}
}

export const Unique: HbChain = {
  id: 8880,
  name: "Unique Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "UNQ",
  symbol: "UNQ"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.unique.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Unique Subscan",
    url: "https://unique.subscan.io/"
  }
}
}

export const UniqueOpal: HbChain = {
  id: 8882,
  name: "Opal Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "OPL",
  symbol: "OPL"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-opal.unique.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Opal Subscan",
    url: "https://opal.subscan.io/"
  }
}
}

export const UniqueQuartz: HbChain = {
  id: 8881,
  name: "Quartz Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "QTZ",
  symbol: "QTZ"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-quartz.unique.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Quartz Subscan",
    url: "https://quartz.subscan.io/"
  }
}
}

export const Unreal: HbChain = {
  id: 18233,
  name: "Unreal",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "reETH",
  decimals: 18,
  symbol: "reETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.unreal-orbit.gelato.digital"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Unreal Explorer",
    url: "https://unreal.blockscout.com",
    apiUrl: "https://unreal.blockscout.com/api/v2"
  }
}
}

export const Vanar: HbChain = {
  id: 2040,
  name: "Vanar Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "VANRY",
  symbol: "VANRY",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.vanarchain.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Vanar Mainnet Explorer",
    url: "https://explorer.vanarchain.com/"
  }
}
}

export const Vechain: HbChain = {
  id: 100009,
  name: "Vechain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "VeChain",
  symbol: "VET",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.vechain.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Vechain Explorer",
    url: "https://explore.vechain.org"
  },
  vechainStats: {
    name: "Vechain Stats",
    url: "https://vechainstats.com"
  }
}
}

export const Velas: HbChain = {
  id: 106,
  name: "Velas EVM Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_velas.jpg",
  nativeCurrency: {
  name: "VLX",
  symbol: "VLX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://evmexplorer.velas.com/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Velas Explorer",
    url: "https://evmexplorer.velas.com"
  }
}
}

export const Viction: HbChain = {
  id: 88,
  name: "Viction",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  nativeCurrency: {
  name: "Viction",
  symbol: "VIC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.viction.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "VIC Scan",
    url: "https://vicscan.xyz"
  }
}
}

export const VictionTestnet: HbChain = {
  id: 89,
  name: "Viction Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Viction",
  symbol: "VIC",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc-testnet.viction.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "VIC Scan",
    url: "https://testnet.vicscan.xyz"
  }
}
}

export const Vision: HbChain = {
  id: 888888,
  name: "Vision",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_vision.jpg",
  nativeCurrency: {
  name: "VISION",
  symbol: "VS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://infragrid.v.network/ethereum/compatible"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Vision Scan",
    url: "https://visionscan.org"
  }
}
}

export const VisionTestnet: HbChain = {
  id: 666666,
  name: "Vision Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "VISION",
  symbol: "VS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://vpioneer.infragrid.v.network/ethereum/compatible"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Vision Scan",
    url: "https://visionscan.org/?chain=vpioneer"
  }
}
}

export const Wanchain: HbChain = {
  id: 888,
  name: "Wanchain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_wanchain.jpg",
  nativeCurrency: {
  name: "WANCHAIN",
  symbol: "WAN",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://gwan-ssl.wandevs.org:56891",
      "https://gwan2-ssl.wandevs.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "WanScan",
    url: "https://wanscan.org"
  }
}
}

export const WanchainTestnet: HbChain = {
  id: 999,
  name: "Wanchain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "WANCHAIN",
  symbol: "WANt",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://gwan-ssl.wandevs.org:46891"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "WanScanTest",
    url: "https://wanscan.org"
  }
}
}

export const WeaveVMAlphanet: HbChain = {
  id: 9496,
  name: "WeaveVM Alphanet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Testnet WeaveVM",
  symbol: "tWVM",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.wvm.dev"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "WeaveVM Alphanet Explorer",
    url: "https://explorer.wvm.dev"
  }
}
}

export const Wemix: HbChain = {
  id: 1111,
  name: "WEMIX",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "WEMIX",
  symbol: "WEMIX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.wemix.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "wemixExplorer",
    url: "https://explorer.wemix.com"
  }
}
}

export const WemixTestnet: HbChain = {
  id: 1112,
  name: "WEMIX Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "WEMIX",
  symbol: "tWEMIX",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.test.wemix.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "wemixExplorer",
    url: "https://testnet.wemixscan.com",
    apiUrl: "https://testnet.wemixscan.com/api"
  }
}
}

export const Worldchain: HbChain = {
  id: 480,
  name: "World Chain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_wc.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://worldchain-mainnet.g.alchemy.com/public"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Worldscan",
    url: "https://worldscan.org",
    apiUrl: "https://api.worldscan.org/api"
  },
  blockscout: {
    name: "Blockscout",
    url: "https://worldchain-mainnet.explorer.alchemy.com",
    apiUrl: "https://worldchain-mainnet.explorer.alchemy.com/api"
  }
}
}

export const WorldchainSepolia: HbChain = {
  id: 4801,
  name: "World Chain Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://worldchain-sepolia.g.alchemy.com/public"
    ]
  },
  public: {
    http: [
      "https://worldchain-sepolia.g.alchemy.com/public"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Worldscan Sepolia",
    url: "https://sepolia.worldscan.org"
  },
  blockscout: {
    name: "Blockscout",
    url: "https://worldchain-sepolia.explorer.alchemy.com",
    apiUrl: "https://worldchain-sepolia.explorer.alchemy.com/api"
  }
}
}

export const WorldLand: HbChain = {
  id: 103,
  name: "WorldLand Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "WLC",
  symbol: "WLC"
},
  rpcUrls: {
  default: {
    http: [
      "https://seoul.worldland.foundation"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "WorldLand Scan",
    url: "https://scan.worldland.foundation"
  }
}
}

export const Xai: HbChain = {
  id: 660279,
  name: "Xai Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Xai",
  symbol: "XAI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://xai-chain.net/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://explorer.xai-chain.net"
  }
}
}

export const XaiTestnet: HbChain = {
  id: 37714555429,
  name: "Xai Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "sXai",
  symbol: "sXAI",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-v2.xai-chain.net/rpc"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://testnet-explorer-v2.xai-chain.net"
  }
}
}

export const Xdc: HbChain = {
  id: 50,
  name: "XinFin Network",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_xdc.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "XDC",
  symbol: "XDC"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.xdcrpc.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "XDCScan",
    url: "https://xdcscan.com"
  }
}
}

export const XdcTestnet: HbChain = {
  id: 51,
  name: "Apothem Network",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "TXDC",
  symbol: "TXDC"
},
  rpcUrls: {
  default: {
    http: [
      "https://erpc.apothem.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "XDCScan",
    url: "https://testnet.xdcscan.com"
  }
}
}

export const XLayer: HbChain = {
  id: 196,
  name: "X Layer Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_xlayer.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "OKB",
  symbol: "OKB"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.xlayer.tech"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "OKLink",
    url: "https://www.oklink.com/xlayer",
    apiUrl: "https://www.oklink.com/api/v5/explorer/xlayer/api"
  }
}
}

export const X1Testnet: HbChain = {
  id: 195,
  name: "X1 Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "OKB",
  symbol: "OKB"
},
  rpcUrls: {
  default: {
    http: [
      "https://xlayertestrpc.okx.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "OKLink",
    url: "https://www.oklink.com/xlayer-test"
  }
}
}

export const XLayerTestnet: HbChain = {
  id: 195,
  name: "X1 Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "OKB",
  symbol: "OKB"
},
  rpcUrls: {
  default: {
    http: [
      "https://xlayertestrpc.okx.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "OKLink",
    url: "https://www.oklink.com/xlayer-test"
  }
}
}

export const XrOne: HbChain = {
  id: 273,
  name: "XR One",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "XR",
  symbol: "XR"
},
  rpcUrls: {
  default: {
    http: [
      "https://xr-one.calderachain.xyz/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://xr-one.calderaexplorer.xyz"
  }
}
}

export const XrSepolia: HbChain = {
  id: 2730,
  name: "XR Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "tXR",
  symbol: "tXR"
},
  rpcUrls: {
  default: {
    http: [
      "https://xr-sepolia-testnet.rpc.caldera.xyz/http"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "https://xr-sepolia-testnet.explorer.caldera.xyz"
  }
}
}

export const YooldoVerse: HbChain = {
  id: 50005,
  name: "Yooldo Verse",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "OAS",
  symbol: "OAS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.yooldo-verse.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Yooldo Verse Explorer",
    url: "https://explorer.yooldo-verse.xyz"
  }
}
}

export const YooldoVerseTestnet: HbChain = {
  id: 50006,
  name: "Yooldo Verse Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "OAS",
  symbol: "OAS",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.testnet.yooldo-verse.xyz"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Yooldo Verse Testnet Explorer",
    url: "https://explorer.testnet.yooldo-verse.xyz"
  }
}
}

export const ZenchainTestnet: HbChain = {
  id: 8408,
  name: "Zenchain Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ZCX",
  symbol: "ZCX"
},
  rpcUrls: {
  default: {
    http: [
      "https://zenchain-testnet.api.onfinality.io/public"
    ],
    webSocket: [
      "wss://zenchain-testnet.api.onfinality.io/public-ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Zentrace",
    url: "https://zentrace.io"
  }
}
}

export const Zeniq: HbChain = {
  id: 383414847825,
  name: "Zeniq Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_zeniq.jpg",
  nativeCurrency: {
  name: "ZENIQ",
  symbol: "ZENIQ",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.zeniq.network"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Zeniq Explorer",
    url: "https://zeniqscan.com"
  }
}
}

export const Zetachain: HbChain = {
  id: 7000,
  name: "ZetaChain",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_zetachain.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Zeta",
  symbol: "ZETA"
},
  rpcUrls: {
  default: {
    http: [
      "https://zetachain-evm.blockpi.network/v1/rpc/public"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ZetaScan",
    url: "https://explorer.zetachain.com"
  }
}
}

export const ZetachainAthensTestnet: HbChain = {
  id: 7001,
  name: "ZetaChain Athens Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Zeta",
  symbol: "aZETA"
},
  rpcUrls: {
  default: {
    http: [
      "https://zetachain-athens-evm.blockpi.network/v1/rpc/public"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ZetaScan",
    url: "https://athens.explorer.zetachain.com"
  }
}
}

export const Zhejiang: HbChain = {
  id: 1337803,
  name: "Zhejiang",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Zhejiang Ether",
  symbol: "ZhejETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.zhejiang.ethpandaops.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Beaconchain",
    url: "https://zhejiang.beaconcha.in"
  }
}
}

export const Zilliqa: HbChain = {
  id: 32769,
  name: "Zilliqa",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_zilliqa.jpg",
  nativeCurrency: {
  name: "Zilliqa",
  symbol: "ZIL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://api.zilliqa.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ethernal",
    url: "https://evmx.zilliqa.com"
  }
}
}

export const ZilliqaTestnet: HbChain = {
  id: 33101,
  name: "Zilliqa Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Zilliqa",
  symbol: "ZIL",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://dev-api.zilliqa.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Ethernal",
    url: "https://evmx.testnet.zilliqa.com"
  }
}
}

export const Zircuit: HbChain = {
  id: 48900,
  name: "Zircuit Mainnet",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_zircuit.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://zircuit1-mainnet.p2pify.com",
      "https://zircuit1-mainnet.liquify.com",
      "https://zircuit-mainnet.drpc.org"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Zircuit Explorer",
    url: "https://explorer.zircuit.com"
  }
}
}

export const ZircuitTestnet: HbChain = {
  id: 48899,
  name: "Zircuit Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "ETH",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://zircuit1-testnet.p2pify.com",
      "https://zircuit1-testnet.liquify.com"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Zircuit Testnet Explorer",
    url: "https://explorer.testnet.zircuit.com"
  }
}
}

export const ZkFair: HbChain = {
  id: 42766,
  name: "ZKFair Mainnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "USD Coin",
  symbol: "USDC"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.zkfair.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "zkFair Explorer",
    url: "https://scan.zkfair.io",
    apiUrl: "https://scan.zkfair.io/api"
  }
}
}

export const ZkFairTestnet: HbChain = {
  id: 43851,
  name: "ZKFair Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "USD Coin",
  symbol: "USDC"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet-rpc.zkfair.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "zkFair Explorer",
    url: "https://testnet-scan.zkfair.io"
  }
}
}

export const ZkLinkNova: HbChain = {
  id: 810180,
  name: "zkLink Nova",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_zklink%20nova.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.zklink.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "zkLink Nova Block Explorer",
    url: "https://explorer.zklink.io"
  }
}
}

export const ZkLinkNovaSepoliaTestnet: HbChain = {
  id: 810181,
  name: "zkLink Nova Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "ETH",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.rpc.zklink.io"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "zkLink Nova Block Explorer",
    url: "https://sepolia.explorer.zklink.io"
  }
}
}

export const ZkSync: HbChain = {
  id: 324,
  name: "ZKsync Era",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_zksync%20era.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.era.zksync.io"
    ],
    webSocket: [
      "wss://mainnet.era.zksync.io/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://era.zksync.network/",
    apiUrl: "https://api-era.zksync.network/api"
  },
  native: {
    name: "ZKsync Explorer",
    url: "https://explorer.zksync.io/",
    apiUrl: "https://block-explorer-api.mainnet.zksync.io/api"
  }
}
}

export const Zksync: HbChain = {
  id: 324,
  name: "ZKsync Era",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_zksync%20era.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://mainnet.era.zksync.io"
    ],
    webSocket: [
      "wss://mainnet.era.zksync.io/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://era.zksync.network/",
    apiUrl: "https://api-era.zksync.network/api"
  },
  native: {
    name: "ZKsync Explorer",
    url: "https://explorer.zksync.io/",
    apiUrl: "https://block-explorer-api.mainnet.zksync.io/api"
  }
}
}

export const ZkSyncInMemoryNode: HbChain = {
  id: 260,
  name: "ZKsync InMemory Node",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "http://localhost:8011"
    ]
  }
},
}

export const ZksyncInMemoryNode: HbChain = {
  id: 260,
  name: "ZKsync InMemory Node",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "http://localhost:8011"
    ]
  }
},
}

export const ZksyncLocalCustomHyperchain: HbChain = {
  id: 272,
  name: "ZKsync CLI Local Custom Hyperchain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "BAT",
  symbol: "BAT",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "http://localhost:15200"
    ],
    webSocket: [
      "ws://localhost:15201"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ZKsync explorer",
    url: "http://localhost:15005/",
    apiUrl: "http://localhost:15005/api"
  }
}
}

export const ZksyncLocalHyperchain: HbChain = {
  id: 270,
  name: "ZKsync CLI Local Hyperchain",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "http://localhost:15100"
    ],
    webSocket: [
      "ws://localhost:15101"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "ZKsync explorer",
    url: "http://localhost:15005/",
    apiUrl: "http://localhost:15005/api"
  }
}
}

export const ZksyncLocalHyperchainL1: HbChain = {
  id: 9,
  name: "ZKsync CLI Local Hyperchain L1",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "http://localhost:15045"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Blockscout",
    url: "http://localhost:15001/",
    apiUrl: "http://localhost:15001/api/v2"
  }
}
}

export const ZkSyncLocalNode: HbChain = {
  id: 270,
  name: "ZKsync CLI Local Node",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "http://localhost:3050"
    ]
  }
},
}

export const ZksyncLocalNode: HbChain = {
  id: 270,
  name: "ZKsync CLI Local Node",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "http://localhost:3050"
    ]
  }
},
}

export const ZkSyncSepoliaTestnet: HbChain = {
  id: 300,
  name: "ZKsync Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.era.zksync.dev"
    ],
    webSocket: [
      "wss://sepolia.era.zksync.dev/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://sepolia-era.zksync.network/",
    apiUrl: "https://api-sepolia-era.zksync.network/api"
  },
  native: {
    name: "ZKsync Explorer",
    url: "https://sepolia.explorer.zksync.io/",
    blockExplorerApi: "https://block-explorer-api.sepolia.zksync.dev/api"
  }
}
}

export const ZksyncSepoliaTestnet: HbChain = {
  id: 300,
  name: "ZKsync Sepolia Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.era.zksync.dev"
    ],
    webSocket: [
      "wss://sepolia.era.zksync.dev/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Etherscan",
    url: "https://sepolia-era.zksync.network/",
    apiUrl: "https://api-sepolia-era.zksync.network/api"
  },
  native: {
    name: "ZKsync Explorer",
    url: "https://sepolia.explorer.zksync.io/",
    blockExplorerApi: "https://block-explorer-api.sepolia.zksync.dev/api"
  }
}
}

export const Zora: HbChain = {
  id: 7777777,
  name: "Zora",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_zora.jpg",
  nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.zora.energy"
    ],
    webSocket: [
      "wss://rpc.zora.energy"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://explorer.zora.energy",
    apiUrl: "https://explorer.zora.energy/api"
  }
}
}

export const ZoraSepolia: HbChain = {
  id: 999999999,
  name: "Zora Sepolia",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Zora Sepolia",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://sepolia.rpc.zora.energy"
    ],
    webSocket: [
      "wss://sepolia.rpc.zora.energy"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Zora Sepolia Explorer",
    url: "https://sepolia.explorer.zora.energy/",
    apiUrl: "https://sepolia.explorer.zora.energy/api"
  }
}
}

export const ZoraTestnet: HbChain = {
  id: 999,
  name: "Zora Goerli Testnet",
  logoURI: "https://chainlist.org/unknown-logo.png",
  nativeCurrency: {
  decimals: 18,
  name: "Zora Goerli",
  symbol: "ETH"
},
  rpcUrls: {
  default: {
    http: [
      "https://testnet.rpc.zora.energy"
    ],
    webSocket: [
      "wss://testnet.rpc.zora.energy"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Explorer",
    url: "https://testnet.explorer.zora.energy",
    apiUrl: "https://testnet.explorer.zora.energy/api"
  }
}
}

export const Scroll: HbChain = {
  id: 534352,
  name: "Scroll",
  logoURI: "https://icons.llamao.fi/icons/chains/rsz_scroll.jpg",
  nativeCurrency: {
  name: "Ether",
  symbol: "ETH",
  decimals: 18
},
  rpcUrls: {
  default: {
    http: [
      "https://rpc.scroll.io"
    ],
    webSocket: [
      "wss://wss-rpc.scroll.io/ws"
    ]
  }
},
  blockExplorers: {
  default: {
    name: "Scrollscan",
    url: "https://scrollscan.com",
    apiUrl: "https://api.scrollscan.com/api"
  }
}
}



export class HelixboxChain {
  static chains(): HbChain[] {
    return [
      Abey,
      AbstractTestnet,
      Acala,
      Acria,
      Adf,
      Aioz,
      AlephZero,
      AlephZeroTestnet,
      Alienx,
      AlienxHalTestnet,
      Ancient8,
      Ancient8Sepolia,
      Anvil,
      ApeChain,
      ApexTestnet,
      Arbitrum,
      ArbitrumGoerli,
      ArbitrumNova,
      ArbitrumSepolia,
      AreonNetwork,
      AreonNetworkTestnet,
      ArtelaTestnet,
      Arthera,
      ArtheraTestnet,
      AssetChain,
      AssetChainTestnet,
      Astar,
      AstarZkEVM,
      AstarZkyoto,
      AtletaOlympia,
      Aurora,
      AuroraTestnet,
      Auroria,
      Avalanche,
      AvalancheFuji,
      B3,
      B3Sepolia,
      Bahamut,
      Base,
      BaseGoerli,
      BaseSepolia,
      Beam,
      BeamTestnet,
      BearNetworkChainMainnet,
      BearNetworkChainTestnet,
      BerachainTestnet,
      BerachainTestnetbArtio,
      BevmMainnet,
      Bifrost,
      Bitgert,
      Bitkub,
      BitkubTestnet,
      Bitlayer,
      BitlayerTestnet,
      Bitrock,
      BitTorrent,
      BitTorrentTestnet,
      Blast,
      BlastSepolia,
      Bob,
      Boba,
      BobaSepolia,
      BobSepolia,
      BoolBetaMainnet,
      BotanixTestnet,
      BounceBit,
      BounceBitTestnet,
      Bronos,
      BronosTestnet,
      Bsc,
      BscGreenfield,
      BscTestnet,
      Bsquared,
      BsquaredTestnet,
      Btr,
      BtrTestnet,
      Bxn,
      BxnTestnet,
      Cannon,
      Canto,
      Celo,
      CeloAlfajores,
      Chang,
      Chiliz,
      Chips,
      CitreaTestnet,
      Classic,
      Coinbit,
      Coinex,
      ConfluxESpace,
      ConfluxESpaceTestnet,
      CoreDao,
      Corn,
      CornTestnet,
      Crab,
      CreatorTestnet,
      CreditCoin3Mainnet,
      CreditCoin3Testnet,
      Cronos,
      CronosTestnet,
      CronoszkEVM,
      CronoszkEVMTestnet,
      Crossbell,
      Curtis,
      Cyber,
      CyberTestnet,
      DailyNetwork,
      DailyNetworkTestnet,
      Darwinia,
      Dchain,
      DchainTestnet,
      DefichainEvm,
      DefichainEvmTestnet,
      Degen,
      Dfk,
      Diode,
      DisChain,
      DodochainTestnet,
      Dogechain,
      DosChain,
      DosChainTestnet,
      DreyerxMainnet,
      DreyerxTestnet,
      DustboyIoT,
      Dymension,
      Edgeless,
      EdgelessTestnet,
      Edgeware,
      EdgewareTestnet,
      Ekta,
      EktaTestnet,
      Elastos,
      ElastosTestnet,
      Electroneum,
      ElectroneumTestnet,
      ElysiumTestnet,
      Energy,
      Enuls,
      Eon,
      Eos,
      EosTestnet,
      Etherlink,
      EtherlinkTestnet,
      Evmos,
      EvmosTestnet,
      ExcelonMainnet,
      Expanse,
      Exsat,
      ExsatTestnet,
      Fantom,
      FantomSonicTestnet,
      FantomTestnet,
      Fibo,
      Filecoin,
      FilecoinCalibration,
      FilecoinHyperspace,
      FireChain,
      Flare,
      FlareTestnet,
      FlowMainnet,
      FlowPreviewnet,
      FlowTestnet,
      Fluence,
      FluenceStage,
      FluenceTestnet,
      Forma,
      Foundry,
      Fraxtal,
      FraxtalTestnet,
      FunkiMainnet,
      FunkiSepolia,
      Fuse,
      FuseSparknet,
      Fusion,
      FusionTestnet,
      Garnet,
      Geist,
      Genesys,
      GlideL1Protocol,
      GlideL2Protocol,
      Gnosis,
      GnosisChiado,
      Goat,
      Gobi,
      GoChain,
      Godwoken,
      Goerli,
      Gravity,
      GuruNetwork,
      GuruTestnet,
      Ham,
      HaqqMainnet,
      HaqqTestedge2,
      Hardhat,
      HarmonyOne,
      HashkeyTestnet,
      Hedera,
      HederaPreviewnet,
      HederaTestnet,
      Hela,
      HemiSepolia,
      Holesky,
      Hpb,
      Huddle01Mainnet,
      Huddle01Testnet,
      Humanode,
      HumanodeTestnet5,
      Hychain,
      HychainTestnet,
      Idchain,
      ImmutableZkEvm,
      ImmutableZkEvmTestnet,
      InEVM,
      InitVerse,
      InitVerseGenesis,
      Ink,
      InkSepolia,
      Iota,
      IotaTestnet,
      Iotex,
      IotexTestnet,
      ISunCoin,
      Jbc,
      JbcTestnet,
      Karura,
      KakarotSepolia,
      KakarotStarknetSepolia,
      KardiaChain,
      Kava,
      KavaTestnet,
      Kcc,
      Kinto,
      Klaytn,
      Kaia,
      Kairos,
      KlaytnBaobab,
      Koi,
      Kroma,
      KromaSepolia,
      L3x,
      L3xTestnet,
      Lavita,
      LensTestnet,
      LightlinkPegasus,
      LightlinkPhoenix,
      Linea,
      LineaGoerli,
      LineaSepolia,
      LineaTestnet,
      Lisk,
      LiskSepolia,
      Localhost,
      Loop,
      Lukso,
      LuksoTestnet,
      LumiaMainnet,
      LumiaTestnet,
      Lycan,
      Lyra,
      Mainnet,
      Mandala,
      Manta,
      MantaSepoliaTestnet,
      MantaTestnet,
      Mantle,
      MantleSepoliaTestnet,
      MantleTestnet,
      MapProtocol,
      Matchain,
      MatchainTestnet,
      MchVerse,
      Mekong,
      Meld,
      Merlin,
      Metachain,
      MetachainIstanbul,
      Metadium,
      MetalL2,
      Meter,
      MeterTestnet,
      Metis,
      MetisGoerli,
      Mev,
      MevTestnet,
      Mint,
      MintSepoliaTestnet,
      MitosisTestnet,
      Mode,
      ModeTestnet,
      MoonbaseAlpha,
      Moonbeam,
      MoonbeamDev,
      Moonriver,
      Morph,
      MorphHolesky,
      MorphSepolia,
      Nahmii,
      Nautilus,
      Near,
      NearTestnet,
      NeonDevnet,
      NeonMainnet,
      NeoxMainnet,
      NeoxT4,
      Nexi,
      Nexilix,
      OasisTestnet,
      Oasys,
      OdysseyTestnet,
      Okc,
      Omax,
      OneWorld,
      OortMainnetDev,
      OpBNB,
      OpBNBTestnet,
      Optimism,
      OptimismGoerli,
      OptimismSepolia,
      Optopia,
      OptopiaTestnet,
      Orderly,
      OrderlySepolia,
      OtimDevnet,
      Palm,
      PalmTestnet,
      Pgn,
      PgnTestnet,
      Phoenix,
      Planq,
      PlayfiAlbireo,
      Plinga,
      Plume,
      PlumeDevnet,
      PlumeTestnet,
      PolterTestnet,
      Polygon,
      PolygonAmoy,
      PolygonMumbai,
      PolygonZkEvm,
      PolygonZkEvmCardona,
      PolygonZkEvmTestnet,
      Pulsechain,
      PulsechainV4,
      Ql1,
      QMainnet,
      QTestnet,
      Real,
      RedbellyMainnet,
      RedbellyTestnet,
      Redstone,
      Rei,
      ReyaNetwork,
      ReddioSepolia,
      Rivalz,
      Rollux,
      RolluxTestnet,
      Ronin,
      Root,
      RootPorcini,
      Rootstock,
      RootstockTestnet,
      Rss3,
      Rss3Sepolia,
      Saakuru,
      Saga,
      Saigon,
      Sanko,
      Sapphire,
      SapphireTestnet,
      SatoshiVM,
      SatoshiVMTestnet,
      ScrollSepolia,
      Sei,
      SeiDevnet,
      SeiTestnet,
      Sepolia,
      Shape,
      ShapeSepolia,
      ShardeumSphinx,
      Shibarium,
      ShibariumTestnet,
      Shiden,
      Shimmer,
      ShimmerTestnet,
      Silicon,
      SiliconSepolia,
      SixProtocol,
      SkaleBlockBrawlers,
      SkaleCalypso,
      SkaleCalypsoTestnet,
      SkaleCryptoBlades,
      SkaleCryptoColosseum,
      SkaleEuropa,
      SkaleEuropaTestnet,
      SkaleExorde,
      SkaleHumanProtocol,
      SkaleNebula,
      SkaleNebulaTestnet,
      SkaleRazor,
      SkaleTitan,
      SkaleTitanTestnet,
      Sketchpad,
      Snax,
      SnaxTestnet,
      Soneium,
      SoneiumMinato,
      Sonic,
      SonicTestnet,
      Songbird,
      SongbirdTestnet,
      Sophon,
      SophonTestnet,
      Spicy,
      Step,
      StoryOdyssey,
      StoryTestnet,
      Stratis,
      Superlumio,
      Superposition,
      Superseed,
      SuperseedSepolia,
      Swan,
      SwanProximaTestnet,
      SwanSaturnTestnet,
      Swellchain,
      Swissdlt,
      Syscoin,
      SyscoinTestnet,
      Taiko,
      TaikoHekla,
      TaikoJolnir,
      TaikoKatla,
      TaikoTestnetSepolia,
      Taraxa,
      TaraxaTestnet,
      TelcoinTestnet,
      Telos,
      TelosTestnet,
      Tenet,
      Ternoa,
      ThaiChain,
      That,
      Theta,
      ThetaTestnet,
      ThunderCore,
      ThunderTestnet,
      TiktrixTestnet,
      Tomb,
      Treasure,
      TreasureTopaz,
      Tron,
      Ubiq,
      UltraTestnet,
      Ultron,
      UltronTestnet,
      UnichainSepolia,
      Unique,
      UniqueOpal,
      UniqueQuartz,
      Unreal,
      Vanar,
      Vechain,
      Velas,
      Viction,
      VictionTestnet,
      Vision,
      VisionTestnet,
      Wanchain,
      WanchainTestnet,
      WeaveVMAlphanet,
      Wemix,
      WemixTestnet,
      Worldchain,
      WorldchainSepolia,
      WorldLand,
      Xai,
      XaiTestnet,
      Xdc,
      XdcTestnet,
      XLayer,
      X1Testnet,
      XLayerTestnet,
      XrOne,
      XrSepolia,
      YooldoVerse,
      YooldoVerseTestnet,
      ZenchainTestnet,
      Zeniq,
      Zetachain,
      ZetachainAthensTestnet,
      Zhejiang,
      Zilliqa,
      ZilliqaTestnet,
      Zircuit,
      ZircuitTestnet,
      ZkFair,
      ZkFairTestnet,
      ZkLinkNova,
      ZkLinkNovaSepoliaTestnet,
      ZkSync,
      Zksync,
      ZkSyncInMemoryNode,
      ZksyncInMemoryNode,
      ZksyncLocalCustomHyperchain,
      ZksyncLocalHyperchain,
      ZksyncLocalHyperchainL1,
      ZkSyncLocalNode,
      ZksyncLocalNode,
      ZkSyncSepoliaTestnet,
      ZksyncSepoliaTestnet,
      Zora,
      ZoraSepolia,
      ZoraTestnet,
      Scroll,
    ];
  }

  static abey: HbChain = Abey;
  static abstractTestnet: HbChain = AbstractTestnet;
  static acala: HbChain = Acala;
  static acria: HbChain = Acria;
  static adf: HbChain = Adf;
  static aioz: HbChain = Aioz;
  static alephZero: HbChain = AlephZero;
  static alephZeroTestnet: HbChain = AlephZeroTestnet;
  static alienx: HbChain = Alienx;
  static alienxHalTestnet: HbChain = AlienxHalTestnet;
  static ancient8: HbChain = Ancient8;
  static ancient8Sepolia: HbChain = Ancient8Sepolia;
  static anvil: HbChain = Anvil;
  static apeChain: HbChain = ApeChain;
  static apexTestnet: HbChain = ApexTestnet;
  static arbitrum: HbChain = Arbitrum;
  static arbitrumGoerli: HbChain = ArbitrumGoerli;
  static arbitrumNova: HbChain = ArbitrumNova;
  static arbitrumSepolia: HbChain = ArbitrumSepolia;
  static areonNetwork: HbChain = AreonNetwork;
  static areonNetworkTestnet: HbChain = AreonNetworkTestnet;
  static artelaTestnet: HbChain = ArtelaTestnet;
  static arthera: HbChain = Arthera;
  static artheraTestnet: HbChain = ArtheraTestnet;
  static assetChain: HbChain = AssetChain;
  static assetChainTestnet: HbChain = AssetChainTestnet;
  static astar: HbChain = Astar;
  static astarZkEVM: HbChain = AstarZkEVM;
  static astarZkyoto: HbChain = AstarZkyoto;
  static atletaOlympia: HbChain = AtletaOlympia;
  static aurora: HbChain = Aurora;
  static auroraTestnet: HbChain = AuroraTestnet;
  static auroria: HbChain = Auroria;
  static avalanche: HbChain = Avalanche;
  static avalancheFuji: HbChain = AvalancheFuji;
  static b3: HbChain = B3;
  static b3Sepolia: HbChain = B3Sepolia;
  static bahamut: HbChain = Bahamut;
  static base: HbChain = Base;
  static baseGoerli: HbChain = BaseGoerli;
  static baseSepolia: HbChain = BaseSepolia;
  static beam: HbChain = Beam;
  static beamTestnet: HbChain = BeamTestnet;
  static bearNetworkChainMainnet: HbChain = BearNetworkChainMainnet;
  static bearNetworkChainTestnet: HbChain = BearNetworkChainTestnet;
  static berachainTestnet: HbChain = BerachainTestnet;
  static berachainTestnetbArtio: HbChain = BerachainTestnetbArtio;
  static bevmMainnet: HbChain = BevmMainnet;
  static bifrost: HbChain = Bifrost;
  static bitgert: HbChain = Bitgert;
  static bitkub: HbChain = Bitkub;
  static bitkubTestnet: HbChain = BitkubTestnet;
  static bitlayer: HbChain = Bitlayer;
  static bitlayerTestnet: HbChain = BitlayerTestnet;
  static bitrock: HbChain = Bitrock;
  static bitTorrent: HbChain = BitTorrent;
  static bitTorrentTestnet: HbChain = BitTorrentTestnet;
  static blast: HbChain = Blast;
  static blastSepolia: HbChain = BlastSepolia;
  static bob: HbChain = Bob;
  static boba: HbChain = Boba;
  static bobaSepolia: HbChain = BobaSepolia;
  static bobSepolia: HbChain = BobSepolia;
  static boolBetaMainnet: HbChain = BoolBetaMainnet;
  static botanixTestnet: HbChain = BotanixTestnet;
  static bounceBit: HbChain = BounceBit;
  static bounceBitTestnet: HbChain = BounceBitTestnet;
  static bronos: HbChain = Bronos;
  static bronosTestnet: HbChain = BronosTestnet;
  static bsc: HbChain = Bsc;
  static bscGreenfield: HbChain = BscGreenfield;
  static bscTestnet: HbChain = BscTestnet;
  static bsquared: HbChain = Bsquared;
  static bsquaredTestnet: HbChain = BsquaredTestnet;
  static btr: HbChain = Btr;
  static btrTestnet: HbChain = BtrTestnet;
  static bxn: HbChain = Bxn;
  static bxnTestnet: HbChain = BxnTestnet;
  static cannon: HbChain = Cannon;
  static canto: HbChain = Canto;
  static celo: HbChain = Celo;
  static celoAlfajores: HbChain = CeloAlfajores;
  static chang: HbChain = Chang;
  static chiliz: HbChain = Chiliz;
  static chips: HbChain = Chips;
  static citreaTestnet: HbChain = CitreaTestnet;
  static classic: HbChain = Classic;
  static coinbit: HbChain = Coinbit;
  static coinex: HbChain = Coinex;
  static confluxESpace: HbChain = ConfluxESpace;
  static confluxESpaceTestnet: HbChain = ConfluxESpaceTestnet;
  static coreDao: HbChain = CoreDao;
  static corn: HbChain = Corn;
  static cornTestnet: HbChain = CornTestnet;
  static crab: HbChain = Crab;
  static creatorTestnet: HbChain = CreatorTestnet;
  static creditCoin3Mainnet: HbChain = CreditCoin3Mainnet;
  static creditCoin3Testnet: HbChain = CreditCoin3Testnet;
  static cronos: HbChain = Cronos;
  static cronosTestnet: HbChain = CronosTestnet;
  static cronoszkEVM: HbChain = CronoszkEVM;
  static cronoszkEVMTestnet: HbChain = CronoszkEVMTestnet;
  static crossbell: HbChain = Crossbell;
  static curtis: HbChain = Curtis;
  static cyber: HbChain = Cyber;
  static cyberTestnet: HbChain = CyberTestnet;
  static dailyNetwork: HbChain = DailyNetwork;
  static dailyNetworkTestnet: HbChain = DailyNetworkTestnet;
  static darwinia: HbChain = Darwinia;
  static dchain: HbChain = Dchain;
  static dchainTestnet: HbChain = DchainTestnet;
  static defichainEvm: HbChain = DefichainEvm;
  static defichainEvmTestnet: HbChain = DefichainEvmTestnet;
  static degen: HbChain = Degen;
  static dfk: HbChain = Dfk;
  static diode: HbChain = Diode;
  static disChain: HbChain = DisChain;
  static dodochainTestnet: HbChain = DodochainTestnet;
  static dogechain: HbChain = Dogechain;
  static dosChain: HbChain = DosChain;
  static dosChainTestnet: HbChain = DosChainTestnet;
  static dreyerxMainnet: HbChain = DreyerxMainnet;
  static dreyerxTestnet: HbChain = DreyerxTestnet;
  static dustboyIoT: HbChain = DustboyIoT;
  static dymension: HbChain = Dymension;
  static edgeless: HbChain = Edgeless;
  static edgelessTestnet: HbChain = EdgelessTestnet;
  static edgeware: HbChain = Edgeware;
  static edgewareTestnet: HbChain = EdgewareTestnet;
  static ekta: HbChain = Ekta;
  static ektaTestnet: HbChain = EktaTestnet;
  static elastos: HbChain = Elastos;
  static elastosTestnet: HbChain = ElastosTestnet;
  static electroneum: HbChain = Electroneum;
  static electroneumTestnet: HbChain = ElectroneumTestnet;
  static elysiumTestnet: HbChain = ElysiumTestnet;
  static energy: HbChain = Energy;
  static enuls: HbChain = Enuls;
  static eon: HbChain = Eon;
  static eos: HbChain = Eos;
  static eosTestnet: HbChain = EosTestnet;
  static etherlink: HbChain = Etherlink;
  static etherlinkTestnet: HbChain = EtherlinkTestnet;
  static evmos: HbChain = Evmos;
  static evmosTestnet: HbChain = EvmosTestnet;
  static excelonMainnet: HbChain = ExcelonMainnet;
  static expanse: HbChain = Expanse;
  static exsat: HbChain = Exsat;
  static exsatTestnet: HbChain = ExsatTestnet;
  static fantom: HbChain = Fantom;
  static fantomSonicTestnet: HbChain = FantomSonicTestnet;
  static fantomTestnet: HbChain = FantomTestnet;
  static fibo: HbChain = Fibo;
  static filecoin: HbChain = Filecoin;
  static filecoinCalibration: HbChain = FilecoinCalibration;
  static filecoinHyperspace: HbChain = FilecoinHyperspace;
  static fireChain: HbChain = FireChain;
  static flare: HbChain = Flare;
  static flareTestnet: HbChain = FlareTestnet;
  static flowMainnet: HbChain = FlowMainnet;
  static flowPreviewnet: HbChain = FlowPreviewnet;
  static flowTestnet: HbChain = FlowTestnet;
  static fluence: HbChain = Fluence;
  static fluenceStage: HbChain = FluenceStage;
  static fluenceTestnet: HbChain = FluenceTestnet;
  static forma: HbChain = Forma;
  static foundry: HbChain = Foundry;
  static fraxtal: HbChain = Fraxtal;
  static fraxtalTestnet: HbChain = FraxtalTestnet;
  static funkiMainnet: HbChain = FunkiMainnet;
  static funkiSepolia: HbChain = FunkiSepolia;
  static fuse: HbChain = Fuse;
  static fuseSparknet: HbChain = FuseSparknet;
  static fusion: HbChain = Fusion;
  static fusionTestnet: HbChain = FusionTestnet;
  static garnet: HbChain = Garnet;
  static geist: HbChain = Geist;
  static genesys: HbChain = Genesys;
  static glideL1Protocol: HbChain = GlideL1Protocol;
  static glideL2Protocol: HbChain = GlideL2Protocol;
  static gnosis: HbChain = Gnosis;
  static gnosisChiado: HbChain = GnosisChiado;
  static goat: HbChain = Goat;
  static gobi: HbChain = Gobi;
  static goChain: HbChain = GoChain;
  static godwoken: HbChain = Godwoken;
  static goerli: HbChain = Goerli;
  static gravity: HbChain = Gravity;
  static guruNetwork: HbChain = GuruNetwork;
  static guruTestnet: HbChain = GuruTestnet;
  static ham: HbChain = Ham;
  static haqqMainnet: HbChain = HaqqMainnet;
  static haqqTestedge2: HbChain = HaqqTestedge2;
  static hardhat: HbChain = Hardhat;
  static harmonyOne: HbChain = HarmonyOne;
  static hashkeyTestnet: HbChain = HashkeyTestnet;
  static hedera: HbChain = Hedera;
  static hederaPreviewnet: HbChain = HederaPreviewnet;
  static hederaTestnet: HbChain = HederaTestnet;
  static hela: HbChain = Hela;
  static hemiSepolia: HbChain = HemiSepolia;
  static holesky: HbChain = Holesky;
  static hpb: HbChain = Hpb;
  static huddle01Mainnet: HbChain = Huddle01Mainnet;
  static huddle01Testnet: HbChain = Huddle01Testnet;
  static humanode: HbChain = Humanode;
  static humanodeTestnet5: HbChain = HumanodeTestnet5;
  static hychain: HbChain = Hychain;
  static hychainTestnet: HbChain = HychainTestnet;
  static idchain: HbChain = Idchain;
  static immutableZkEvm: HbChain = ImmutableZkEvm;
  static immutableZkEvmTestnet: HbChain = ImmutableZkEvmTestnet;
  static inEVM: HbChain = InEVM;
  static initVerse: HbChain = InitVerse;
  static initVerseGenesis: HbChain = InitVerseGenesis;
  static ink: HbChain = Ink;
  static inkSepolia: HbChain = InkSepolia;
  static iota: HbChain = Iota;
  static iotaTestnet: HbChain = IotaTestnet;
  static iotex: HbChain = Iotex;
  static iotexTestnet: HbChain = IotexTestnet;
  static iSunCoin: HbChain = ISunCoin;
  static jbc: HbChain = Jbc;
  static jbcTestnet: HbChain = JbcTestnet;
  static karura: HbChain = Karura;
  static kakarotSepolia: HbChain = KakarotSepolia;
  static kakarotStarknetSepolia: HbChain = KakarotStarknetSepolia;
  static kardiaChain: HbChain = KardiaChain;
  static kava: HbChain = Kava;
  static kavaTestnet: HbChain = KavaTestnet;
  static kcc: HbChain = Kcc;
  static kinto: HbChain = Kinto;
  static klaytn: HbChain = Klaytn;
  static kaia: HbChain = Kaia;
  static kairos: HbChain = Kairos;
  static klaytnBaobab: HbChain = KlaytnBaobab;
  static koi: HbChain = Koi;
  static kroma: HbChain = Kroma;
  static kromaSepolia: HbChain = KromaSepolia;
  static l3x: HbChain = L3x;
  static l3xTestnet: HbChain = L3xTestnet;
  static lavita: HbChain = Lavita;
  static lensTestnet: HbChain = LensTestnet;
  static lightlinkPegasus: HbChain = LightlinkPegasus;
  static lightlinkPhoenix: HbChain = LightlinkPhoenix;
  static linea: HbChain = Linea;
  static lineaGoerli: HbChain = LineaGoerli;
  static lineaSepolia: HbChain = LineaSepolia;
  static lineaTestnet: HbChain = LineaTestnet;
  static lisk: HbChain = Lisk;
  static liskSepolia: HbChain = LiskSepolia;
  static localhost: HbChain = Localhost;
  static loop: HbChain = Loop;
  static lukso: HbChain = Lukso;
  static luksoTestnet: HbChain = LuksoTestnet;
  static lumiaMainnet: HbChain = LumiaMainnet;
  static lumiaTestnet: HbChain = LumiaTestnet;
  static lycan: HbChain = Lycan;
  static lyra: HbChain = Lyra;
  static mainnet: HbChain = Mainnet;
  static mandala: HbChain = Mandala;
  static manta: HbChain = Manta;
  static mantaSepoliaTestnet: HbChain = MantaSepoliaTestnet;
  static mantaTestnet: HbChain = MantaTestnet;
  static mantle: HbChain = Mantle;
  static mantleSepoliaTestnet: HbChain = MantleSepoliaTestnet;
  static mantleTestnet: HbChain = MantleTestnet;
  static mapProtocol: HbChain = MapProtocol;
  static matchain: HbChain = Matchain;
  static matchainTestnet: HbChain = MatchainTestnet;
  static mchVerse: HbChain = MchVerse;
  static mekong: HbChain = Mekong;
  static meld: HbChain = Meld;
  static merlin: HbChain = Merlin;
  static metachain: HbChain = Metachain;
  static metachainIstanbul: HbChain = MetachainIstanbul;
  static metadium: HbChain = Metadium;
  static metalL2: HbChain = MetalL2;
  static meter: HbChain = Meter;
  static meterTestnet: HbChain = MeterTestnet;
  static metis: HbChain = Metis;
  static metisGoerli: HbChain = MetisGoerli;
  static mev: HbChain = Mev;
  static mevTestnet: HbChain = MevTestnet;
  static mint: HbChain = Mint;
  static mintSepoliaTestnet: HbChain = MintSepoliaTestnet;
  static mitosisTestnet: HbChain = MitosisTestnet;
  static mode: HbChain = Mode;
  static modeTestnet: HbChain = ModeTestnet;
  static moonbaseAlpha: HbChain = MoonbaseAlpha;
  static moonbeam: HbChain = Moonbeam;
  static moonbeamDev: HbChain = MoonbeamDev;
  static moonriver: HbChain = Moonriver;
  static morph: HbChain = Morph;
  static morphHolesky: HbChain = MorphHolesky;
  static morphSepolia: HbChain = MorphSepolia;
  static nahmii: HbChain = Nahmii;
  static nautilus: HbChain = Nautilus;
  static near: HbChain = Near;
  static nearTestnet: HbChain = NearTestnet;
  static neonDevnet: HbChain = NeonDevnet;
  static neonMainnet: HbChain = NeonMainnet;
  static neoxMainnet: HbChain = NeoxMainnet;
  static neoxT4: HbChain = NeoxT4;
  static nexi: HbChain = Nexi;
  static nexilix: HbChain = Nexilix;
  static oasisTestnet: HbChain = OasisTestnet;
  static oasys: HbChain = Oasys;
  static odysseyTestnet: HbChain = OdysseyTestnet;
  static okc: HbChain = Okc;
  static omax: HbChain = Omax;
  static oneWorld: HbChain = OneWorld;
  static oortMainnetDev: HbChain = OortMainnetDev;
  static opBNB: HbChain = OpBNB;
  static opBNBTestnet: HbChain = OpBNBTestnet;
  static optimism: HbChain = Optimism;
  static optimismGoerli: HbChain = OptimismGoerli;
  static optimismSepolia: HbChain = OptimismSepolia;
  static optopia: HbChain = Optopia;
  static optopiaTestnet: HbChain = OptopiaTestnet;
  static orderly: HbChain = Orderly;
  static orderlySepolia: HbChain = OrderlySepolia;
  static otimDevnet: HbChain = OtimDevnet;
  static palm: HbChain = Palm;
  static palmTestnet: HbChain = PalmTestnet;
  static pgn: HbChain = Pgn;
  static pgnTestnet: HbChain = PgnTestnet;
  static phoenix: HbChain = Phoenix;
  static planq: HbChain = Planq;
  static playfiAlbireo: HbChain = PlayfiAlbireo;
  static plinga: HbChain = Plinga;
  static plume: HbChain = Plume;
  static plumeDevnet: HbChain = PlumeDevnet;
  static plumeTestnet: HbChain = PlumeTestnet;
  static polterTestnet: HbChain = PolterTestnet;
  static polygon: HbChain = Polygon;
  static polygonAmoy: HbChain = PolygonAmoy;
  static polygonMumbai: HbChain = PolygonMumbai;
  static polygonZkEvm: HbChain = PolygonZkEvm;
  static polygonZkEvmCardona: HbChain = PolygonZkEvmCardona;
  static polygonZkEvmTestnet: HbChain = PolygonZkEvmTestnet;
  static pulsechain: HbChain = Pulsechain;
  static pulsechainV4: HbChain = PulsechainV4;
  static ql1: HbChain = Ql1;
  static qMainnet: HbChain = QMainnet;
  static qTestnet: HbChain = QTestnet;
  static real: HbChain = Real;
  static redbellyMainnet: HbChain = RedbellyMainnet;
  static redbellyTestnet: HbChain = RedbellyTestnet;
  static redstone: HbChain = Redstone;
  static rei: HbChain = Rei;
  static reyaNetwork: HbChain = ReyaNetwork;
  static reddioSepolia: HbChain = ReddioSepolia;
  static rivalz: HbChain = Rivalz;
  static rollux: HbChain = Rollux;
  static rolluxTestnet: HbChain = RolluxTestnet;
  static ronin: HbChain = Ronin;
  static root: HbChain = Root;
  static rootPorcini: HbChain = RootPorcini;
  static rootstock: HbChain = Rootstock;
  static rootstockTestnet: HbChain = RootstockTestnet;
  static rss3: HbChain = Rss3;
  static rss3Sepolia: HbChain = Rss3Sepolia;
  static saakuru: HbChain = Saakuru;
  static saga: HbChain = Saga;
  static saigon: HbChain = Saigon;
  static sanko: HbChain = Sanko;
  static sapphire: HbChain = Sapphire;
  static sapphireTestnet: HbChain = SapphireTestnet;
  static satoshiVM: HbChain = SatoshiVM;
  static satoshiVMTestnet: HbChain = SatoshiVMTestnet;
  static scrollSepolia: HbChain = ScrollSepolia;
  static sei: HbChain = Sei;
  static seiDevnet: HbChain = SeiDevnet;
  static seiTestnet: HbChain = SeiTestnet;
  static sepolia: HbChain = Sepolia;
  static shape: HbChain = Shape;
  static shapeSepolia: HbChain = ShapeSepolia;
  static shardeumSphinx: HbChain = ShardeumSphinx;
  static shibarium: HbChain = Shibarium;
  static shibariumTestnet: HbChain = ShibariumTestnet;
  static shiden: HbChain = Shiden;
  static shimmer: HbChain = Shimmer;
  static shimmerTestnet: HbChain = ShimmerTestnet;
  static silicon: HbChain = Silicon;
  static siliconSepolia: HbChain = SiliconSepolia;
  static sixProtocol: HbChain = SixProtocol;
  static skaleBlockBrawlers: HbChain = SkaleBlockBrawlers;
  static skaleCalypso: HbChain = SkaleCalypso;
  static skaleCalypsoTestnet: HbChain = SkaleCalypsoTestnet;
  static skaleCryptoBlades: HbChain = SkaleCryptoBlades;
  static skaleCryptoColosseum: HbChain = SkaleCryptoColosseum;
  static skaleEuropa: HbChain = SkaleEuropa;
  static skaleEuropaTestnet: HbChain = SkaleEuropaTestnet;
  static skaleExorde: HbChain = SkaleExorde;
  static skaleHumanProtocol: HbChain = SkaleHumanProtocol;
  static skaleNebula: HbChain = SkaleNebula;
  static skaleNebulaTestnet: HbChain = SkaleNebulaTestnet;
  static skaleRazor: HbChain = SkaleRazor;
  static skaleTitan: HbChain = SkaleTitan;
  static skaleTitanTestnet: HbChain = SkaleTitanTestnet;
  static sketchpad: HbChain = Sketchpad;
  static snax: HbChain = Snax;
  static snaxTestnet: HbChain = SnaxTestnet;
  static soneium: HbChain = Soneium;
  static soneiumMinato: HbChain = SoneiumMinato;
  static sonic: HbChain = Sonic;
  static sonicTestnet: HbChain = SonicTestnet;
  static songbird: HbChain = Songbird;
  static songbirdTestnet: HbChain = SongbirdTestnet;
  static sophon: HbChain = Sophon;
  static sophonTestnet: HbChain = SophonTestnet;
  static spicy: HbChain = Spicy;
  static step: HbChain = Step;
  static storyOdyssey: HbChain = StoryOdyssey;
  static storyTestnet: HbChain = StoryTestnet;
  static stratis: HbChain = Stratis;
  static superlumio: HbChain = Superlumio;
  static superposition: HbChain = Superposition;
  static superseed: HbChain = Superseed;
  static superseedSepolia: HbChain = SuperseedSepolia;
  static swan: HbChain = Swan;
  static swanProximaTestnet: HbChain = SwanProximaTestnet;
  static swanSaturnTestnet: HbChain = SwanSaturnTestnet;
  static swellchain: HbChain = Swellchain;
  static swissdlt: HbChain = Swissdlt;
  static syscoin: HbChain = Syscoin;
  static syscoinTestnet: HbChain = SyscoinTestnet;
  static taiko: HbChain = Taiko;
  static taikoHekla: HbChain = TaikoHekla;
  static taikoJolnir: HbChain = TaikoJolnir;
  static taikoKatla: HbChain = TaikoKatla;
  static taikoTestnetSepolia: HbChain = TaikoTestnetSepolia;
  static taraxa: HbChain = Taraxa;
  static taraxaTestnet: HbChain = TaraxaTestnet;
  static telcoinTestnet: HbChain = TelcoinTestnet;
  static telos: HbChain = Telos;
  static telosTestnet: HbChain = TelosTestnet;
  static tenet: HbChain = Tenet;
  static ternoa: HbChain = Ternoa;
  static thaiChain: HbChain = ThaiChain;
  static that: HbChain = That;
  static theta: HbChain = Theta;
  static thetaTestnet: HbChain = ThetaTestnet;
  static thunderCore: HbChain = ThunderCore;
  static thunderTestnet: HbChain = ThunderTestnet;
  static tiktrixTestnet: HbChain = TiktrixTestnet;
  static tomb: HbChain = Tomb;
  static treasure: HbChain = Treasure;
  static treasureTopaz: HbChain = TreasureTopaz;
  static tron: HbChain = Tron;
  static ubiq: HbChain = Ubiq;
  static ultraTestnet: HbChain = UltraTestnet;
  static ultron: HbChain = Ultron;
  static ultronTestnet: HbChain = UltronTestnet;
  static unichainSepolia: HbChain = UnichainSepolia;
  static unique: HbChain = Unique;
  static uniqueOpal: HbChain = UniqueOpal;
  static uniqueQuartz: HbChain = UniqueQuartz;
  static unreal: HbChain = Unreal;
  static vanar: HbChain = Vanar;
  static vechain: HbChain = Vechain;
  static velas: HbChain = Velas;
  static viction: HbChain = Viction;
  static victionTestnet: HbChain = VictionTestnet;
  static vision: HbChain = Vision;
  static visionTestnet: HbChain = VisionTestnet;
  static wanchain: HbChain = Wanchain;
  static wanchainTestnet: HbChain = WanchainTestnet;
  static weaveVMAlphanet: HbChain = WeaveVMAlphanet;
  static wemix: HbChain = Wemix;
  static wemixTestnet: HbChain = WemixTestnet;
  static worldchain: HbChain = Worldchain;
  static worldchainSepolia: HbChain = WorldchainSepolia;
  static worldLand: HbChain = WorldLand;
  static xai: HbChain = Xai;
  static xaiTestnet: HbChain = XaiTestnet;
  static xdc: HbChain = Xdc;
  static xdcTestnet: HbChain = XdcTestnet;
  static xLayer: HbChain = XLayer;
  static x1Testnet: HbChain = X1Testnet;
  static xLayerTestnet: HbChain = XLayerTestnet;
  static xrOne: HbChain = XrOne;
  static xrSepolia: HbChain = XrSepolia;
  static yooldoVerse: HbChain = YooldoVerse;
  static yooldoVerseTestnet: HbChain = YooldoVerseTestnet;
  static zenchainTestnet: HbChain = ZenchainTestnet;
  static zeniq: HbChain = Zeniq;
  static zetachain: HbChain = Zetachain;
  static zetachainAthensTestnet: HbChain = ZetachainAthensTestnet;
  static zhejiang: HbChain = Zhejiang;
  static zilliqa: HbChain = Zilliqa;
  static zilliqaTestnet: HbChain = ZilliqaTestnet;
  static zircuit: HbChain = Zircuit;
  static zircuitTestnet: HbChain = ZircuitTestnet;
  static zkFair: HbChain = ZkFair;
  static zkFairTestnet: HbChain = ZkFairTestnet;
  static zkLinkNova: HbChain = ZkLinkNova;
  static zkLinkNovaSepoliaTestnet: HbChain = ZkLinkNovaSepoliaTestnet;
  static zkSync: HbChain = ZkSync;
  static zksync: HbChain = Zksync;
  static zkSyncInMemoryNode: HbChain = ZkSyncInMemoryNode;
  static zksyncInMemoryNode: HbChain = ZksyncInMemoryNode;
  static zksyncLocalCustomHyperchain: HbChain = ZksyncLocalCustomHyperchain;
  static zksyncLocalHyperchain: HbChain = ZksyncLocalHyperchain;
  static zksyncLocalHyperchainL1: HbChain = ZksyncLocalHyperchainL1;
  static zkSyncLocalNode: HbChain = ZkSyncLocalNode;
  static zksyncLocalNode: HbChain = ZksyncLocalNode;
  static zkSyncSepoliaTestnet: HbChain = ZkSyncSepoliaTestnet;
  static zksyncSepoliaTestnet: HbChain = ZksyncSepoliaTestnet;
  static zora: HbChain = Zora;
  static zoraSepolia: HbChain = ZoraSepolia;
  static zoraTestnet: HbChain = ZoraTestnet;
  static scroll: HbChain = Scroll;

  static get(chain: string): HbChain | undefined {
    if (!chain) return undefined;

    switch (chain) {
      case "abey": return Abey;
      case "abstractTestnet": return AbstractTestnet;
      case "acala": return Acala;
      case "acria": return Acria;
      case "adf": return Adf;
      case "aioz": return Aioz;
      case "alephZero": return AlephZero;
      case "alephZeroTestnet": return AlephZeroTestnet;
      case "alienx": return Alienx;
      case "alienxHalTestnet": return AlienxHalTestnet;
      case "ancient8": return Ancient8;
      case "ancient8Sepolia": return Ancient8Sepolia;
      case "anvil": return Anvil;
      case "apeChain": return ApeChain;
      case "apexTestnet": return ApexTestnet;
      case "arbitrum": return Arbitrum;
      case "arbitrumGoerli": return ArbitrumGoerli;
      case "arbitrumNova": return ArbitrumNova;
      case "arbitrumSepolia": return ArbitrumSepolia;
      case "areonNetwork": return AreonNetwork;
      case "areonNetworkTestnet": return AreonNetworkTestnet;
      case "artelaTestnet": return ArtelaTestnet;
      case "arthera": return Arthera;
      case "artheraTestnet": return ArtheraTestnet;
      case "assetChain": return AssetChain;
      case "assetChainTestnet": return AssetChainTestnet;
      case "astar": return Astar;
      case "astarZkEVM": return AstarZkEVM;
      case "astarZkyoto": return AstarZkyoto;
      case "atletaOlympia": return AtletaOlympia;
      case "aurora": return Aurora;
      case "auroraTestnet": return AuroraTestnet;
      case "auroria": return Auroria;
      case "avalanche": return Avalanche;
      case "avalancheFuji": return AvalancheFuji;
      case "b3": return B3;
      case "b3Sepolia": return B3Sepolia;
      case "bahamut": return Bahamut;
      case "base": return Base;
      case "baseGoerli": return BaseGoerli;
      case "baseSepolia": return BaseSepolia;
      case "beam": return Beam;
      case "beamTestnet": return BeamTestnet;
      case "bearNetworkChainMainnet": return BearNetworkChainMainnet;
      case "bearNetworkChainTestnet": return BearNetworkChainTestnet;
      case "berachainTestnet": return BerachainTestnet;
      case "berachainTestnetbArtio": return BerachainTestnetbArtio;
      case "bevmMainnet": return BevmMainnet;
      case "bifrost": return Bifrost;
      case "bitgert": return Bitgert;
      case "bitkub": return Bitkub;
      case "bitkubTestnet": return BitkubTestnet;
      case "bitlayer": return Bitlayer;
      case "bitlayerTestnet": return BitlayerTestnet;
      case "bitrock": return Bitrock;
      case "bitTorrent": return BitTorrent;
      case "bitTorrentTestnet": return BitTorrentTestnet;
      case "blast": return Blast;
      case "blastSepolia": return BlastSepolia;
      case "bob": return Bob;
      case "boba": return Boba;
      case "bobaSepolia": return BobaSepolia;
      case "bobSepolia": return BobSepolia;
      case "boolBetaMainnet": return BoolBetaMainnet;
      case "botanixTestnet": return BotanixTestnet;
      case "bounceBit": return BounceBit;
      case "bounceBitTestnet": return BounceBitTestnet;
      case "bronos": return Bronos;
      case "bronosTestnet": return BronosTestnet;
      case "bsc": return Bsc;
      case "bscGreenfield": return BscGreenfield;
      case "bscTestnet": return BscTestnet;
      case "bsquared": return Bsquared;
      case "bsquaredTestnet": return BsquaredTestnet;
      case "btr": return Btr;
      case "btrTestnet": return BtrTestnet;
      case "bxn": return Bxn;
      case "bxnTestnet": return BxnTestnet;
      case "cannon": return Cannon;
      case "canto": return Canto;
      case "celo": return Celo;
      case "celoAlfajores": return CeloAlfajores;
      case "chang": return Chang;
      case "chiliz": return Chiliz;
      case "chips": return Chips;
      case "citreaTestnet": return CitreaTestnet;
      case "classic": return Classic;
      case "coinbit": return Coinbit;
      case "coinex": return Coinex;
      case "confluxESpace": return ConfluxESpace;
      case "confluxESpaceTestnet": return ConfluxESpaceTestnet;
      case "coreDao": return CoreDao;
      case "corn": return Corn;
      case "cornTestnet": return CornTestnet;
      case "crab": return Crab;
      case "creatorTestnet": return CreatorTestnet;
      case "creditCoin3Mainnet": return CreditCoin3Mainnet;
      case "creditCoin3Testnet": return CreditCoin3Testnet;
      case "cronos": return Cronos;
      case "cronosTestnet": return CronosTestnet;
      case "cronoszkEVM": return CronoszkEVM;
      case "cronoszkEVMTestnet": return CronoszkEVMTestnet;
      case "crossbell": return Crossbell;
      case "curtis": return Curtis;
      case "cyber": return Cyber;
      case "cyberTestnet": return CyberTestnet;
      case "dailyNetwork": return DailyNetwork;
      case "dailyNetworkTestnet": return DailyNetworkTestnet;
      case "darwinia": return Darwinia;
      case "dchain": return Dchain;
      case "dchainTestnet": return DchainTestnet;
      case "defichainEvm": return DefichainEvm;
      case "defichainEvmTestnet": return DefichainEvmTestnet;
      case "degen": return Degen;
      case "dfk": return Dfk;
      case "diode": return Diode;
      case "disChain": return DisChain;
      case "dodochainTestnet": return DodochainTestnet;
      case "dogechain": return Dogechain;
      case "dosChain": return DosChain;
      case "dosChainTestnet": return DosChainTestnet;
      case "dreyerxMainnet": return DreyerxMainnet;
      case "dreyerxTestnet": return DreyerxTestnet;
      case "dustboyIoT": return DustboyIoT;
      case "dymension": return Dymension;
      case "edgeless": return Edgeless;
      case "edgelessTestnet": return EdgelessTestnet;
      case "edgeware": return Edgeware;
      case "edgewareTestnet": return EdgewareTestnet;
      case "ekta": return Ekta;
      case "ektaTestnet": return EktaTestnet;
      case "elastos": return Elastos;
      case "elastosTestnet": return ElastosTestnet;
      case "electroneum": return Electroneum;
      case "electroneumTestnet": return ElectroneumTestnet;
      case "elysiumTestnet": return ElysiumTestnet;
      case "energy": return Energy;
      case "enuls": return Enuls;
      case "eon": return Eon;
      case "eos": return Eos;
      case "eosTestnet": return EosTestnet;
      case "etherlink": return Etherlink;
      case "etherlinkTestnet": return EtherlinkTestnet;
      case "evmos": return Evmos;
      case "evmosTestnet": return EvmosTestnet;
      case "excelonMainnet": return ExcelonMainnet;
      case "expanse": return Expanse;
      case "exsat": return Exsat;
      case "exsatTestnet": return ExsatTestnet;
      case "fantom": return Fantom;
      case "fantomSonicTestnet": return FantomSonicTestnet;
      case "fantomTestnet": return FantomTestnet;
      case "fibo": return Fibo;
      case "filecoin": return Filecoin;
      case "filecoinCalibration": return FilecoinCalibration;
      case "filecoinHyperspace": return FilecoinHyperspace;
      case "fireChain": return FireChain;
      case "flare": return Flare;
      case "flareTestnet": return FlareTestnet;
      case "flowMainnet": return FlowMainnet;
      case "flowPreviewnet": return FlowPreviewnet;
      case "flowTestnet": return FlowTestnet;
      case "fluence": return Fluence;
      case "fluenceStage": return FluenceStage;
      case "fluenceTestnet": return FluenceTestnet;
      case "forma": return Forma;
      case "foundry": return Foundry;
      case "fraxtal": return Fraxtal;
      case "fraxtalTestnet": return FraxtalTestnet;
      case "funkiMainnet": return FunkiMainnet;
      case "funkiSepolia": return FunkiSepolia;
      case "fuse": return Fuse;
      case "fuseSparknet": return FuseSparknet;
      case "fusion": return Fusion;
      case "fusionTestnet": return FusionTestnet;
      case "garnet": return Garnet;
      case "geist": return Geist;
      case "genesys": return Genesys;
      case "glideL1Protocol": return GlideL1Protocol;
      case "glideL2Protocol": return GlideL2Protocol;
      case "gnosis": return Gnosis;
      case "gnosisChiado": return GnosisChiado;
      case "goat": return Goat;
      case "gobi": return Gobi;
      case "goChain": return GoChain;
      case "godwoken": return Godwoken;
      case "goerli": return Goerli;
      case "gravity": return Gravity;
      case "guruNetwork": return GuruNetwork;
      case "guruTestnet": return GuruTestnet;
      case "ham": return Ham;
      case "haqqMainnet": return HaqqMainnet;
      case "haqqTestedge2": return HaqqTestedge2;
      case "hardhat": return Hardhat;
      case "harmonyOne": return HarmonyOne;
      case "hashkeyTestnet": return HashkeyTestnet;
      case "hedera": return Hedera;
      case "hederaPreviewnet": return HederaPreviewnet;
      case "hederaTestnet": return HederaTestnet;
      case "hela": return Hela;
      case "hemiSepolia": return HemiSepolia;
      case "holesky": return Holesky;
      case "hpb": return Hpb;
      case "huddle01Mainnet": return Huddle01Mainnet;
      case "huddle01Testnet": return Huddle01Testnet;
      case "humanode": return Humanode;
      case "humanodeTestnet5": return HumanodeTestnet5;
      case "hychain": return Hychain;
      case "hychainTestnet": return HychainTestnet;
      case "idchain": return Idchain;
      case "immutableZkEvm": return ImmutableZkEvm;
      case "immutableZkEvmTestnet": return ImmutableZkEvmTestnet;
      case "inEVM": return InEVM;
      case "initVerse": return InitVerse;
      case "initVerseGenesis": return InitVerseGenesis;
      case "ink": return Ink;
      case "inkSepolia": return InkSepolia;
      case "iota": return Iota;
      case "iotaTestnet": return IotaTestnet;
      case "iotex": return Iotex;
      case "iotexTestnet": return IotexTestnet;
      case "iSunCoin": return ISunCoin;
      case "jbc": return Jbc;
      case "jbcTestnet": return JbcTestnet;
      case "karura": return Karura;
      case "kakarotSepolia": return KakarotSepolia;
      case "kakarotStarknetSepolia": return KakarotStarknetSepolia;
      case "kardiaChain": return KardiaChain;
      case "kava": return Kava;
      case "kavaTestnet": return KavaTestnet;
      case "kcc": return Kcc;
      case "kinto": return Kinto;
      case "klaytn": return Klaytn;
      case "kaia": return Kaia;
      case "kairos": return Kairos;
      case "klaytnBaobab": return KlaytnBaobab;
      case "koi": return Koi;
      case "kroma": return Kroma;
      case "kromaSepolia": return KromaSepolia;
      case "l3x": return L3x;
      case "l3xTestnet": return L3xTestnet;
      case "lavita": return Lavita;
      case "lensTestnet": return LensTestnet;
      case "lightlinkPegasus": return LightlinkPegasus;
      case "lightlinkPhoenix": return LightlinkPhoenix;
      case "linea": return Linea;
      case "lineaGoerli": return LineaGoerli;
      case "lineaSepolia": return LineaSepolia;
      case "lineaTestnet": return LineaTestnet;
      case "lisk": return Lisk;
      case "liskSepolia": return LiskSepolia;
      case "localhost": return Localhost;
      case "loop": return Loop;
      case "lukso": return Lukso;
      case "luksoTestnet": return LuksoTestnet;
      case "lumiaMainnet": return LumiaMainnet;
      case "lumiaTestnet": return LumiaTestnet;
      case "lycan": return Lycan;
      case "lyra": return Lyra;
      case "mainnet": return Mainnet;
      case "mandala": return Mandala;
      case "manta": return Manta;
      case "mantaSepoliaTestnet": return MantaSepoliaTestnet;
      case "mantaTestnet": return MantaTestnet;
      case "mantle": return Mantle;
      case "mantleSepoliaTestnet": return MantleSepoliaTestnet;
      case "mantleTestnet": return MantleTestnet;
      case "mapProtocol": return MapProtocol;
      case "matchain": return Matchain;
      case "matchainTestnet": return MatchainTestnet;
      case "mchVerse": return MchVerse;
      case "mekong": return Mekong;
      case "meld": return Meld;
      case "merlin": return Merlin;
      case "metachain": return Metachain;
      case "metachainIstanbul": return MetachainIstanbul;
      case "metadium": return Metadium;
      case "metalL2": return MetalL2;
      case "meter": return Meter;
      case "meterTestnet": return MeterTestnet;
      case "metis": return Metis;
      case "metisGoerli": return MetisGoerli;
      case "mev": return Mev;
      case "mevTestnet": return MevTestnet;
      case "mint": return Mint;
      case "mintSepoliaTestnet": return MintSepoliaTestnet;
      case "mitosisTestnet": return MitosisTestnet;
      case "mode": return Mode;
      case "modeTestnet": return ModeTestnet;
      case "moonbaseAlpha": return MoonbaseAlpha;
      case "moonbeam": return Moonbeam;
      case "moonbeamDev": return MoonbeamDev;
      case "moonriver": return Moonriver;
      case "morph": return Morph;
      case "morphHolesky": return MorphHolesky;
      case "morphSepolia": return MorphSepolia;
      case "nahmii": return Nahmii;
      case "nautilus": return Nautilus;
      case "near": return Near;
      case "nearTestnet": return NearTestnet;
      case "neonDevnet": return NeonDevnet;
      case "neonMainnet": return NeonMainnet;
      case "neoxMainnet": return NeoxMainnet;
      case "neoxT4": return NeoxT4;
      case "nexi": return Nexi;
      case "nexilix": return Nexilix;
      case "oasisTestnet": return OasisTestnet;
      case "oasys": return Oasys;
      case "odysseyTestnet": return OdysseyTestnet;
      case "okc": return Okc;
      case "omax": return Omax;
      case "oneWorld": return OneWorld;
      case "oortMainnetDev": return OortMainnetDev;
      case "opBNB": return OpBNB;
      case "opBNBTestnet": return OpBNBTestnet;
      case "optimism": return Optimism;
      case "optimismGoerli": return OptimismGoerli;
      case "optimismSepolia": return OptimismSepolia;
      case "optopia": return Optopia;
      case "optopiaTestnet": return OptopiaTestnet;
      case "orderly": return Orderly;
      case "orderlySepolia": return OrderlySepolia;
      case "otimDevnet": return OtimDevnet;
      case "palm": return Palm;
      case "palmTestnet": return PalmTestnet;
      case "pgn": return Pgn;
      case "pgnTestnet": return PgnTestnet;
      case "phoenix": return Phoenix;
      case "planq": return Planq;
      case "playfiAlbireo": return PlayfiAlbireo;
      case "plinga": return Plinga;
      case "plume": return Plume;
      case "plumeDevnet": return PlumeDevnet;
      case "plumeTestnet": return PlumeTestnet;
      case "polterTestnet": return PolterTestnet;
      case "polygon": return Polygon;
      case "polygonAmoy": return PolygonAmoy;
      case "polygonMumbai": return PolygonMumbai;
      case "polygonZkEvm": return PolygonZkEvm;
      case "polygonZkEvmCardona": return PolygonZkEvmCardona;
      case "polygonZkEvmTestnet": return PolygonZkEvmTestnet;
      case "pulsechain": return Pulsechain;
      case "pulsechainV4": return PulsechainV4;
      case "ql1": return Ql1;
      case "qMainnet": return QMainnet;
      case "qTestnet": return QTestnet;
      case "real": return Real;
      case "redbellyMainnet": return RedbellyMainnet;
      case "redbellyTestnet": return RedbellyTestnet;
      case "redstone": return Redstone;
      case "rei": return Rei;
      case "reyaNetwork": return ReyaNetwork;
      case "reddioSepolia": return ReddioSepolia;
      case "rivalz": return Rivalz;
      case "rollux": return Rollux;
      case "rolluxTestnet": return RolluxTestnet;
      case "ronin": return Ronin;
      case "root": return Root;
      case "rootPorcini": return RootPorcini;
      case "rootstock": return Rootstock;
      case "rootstockTestnet": return RootstockTestnet;
      case "rss3": return Rss3;
      case "rss3Sepolia": return Rss3Sepolia;
      case "saakuru": return Saakuru;
      case "saga": return Saga;
      case "saigon": return Saigon;
      case "sanko": return Sanko;
      case "sapphire": return Sapphire;
      case "sapphireTestnet": return SapphireTestnet;
      case "satoshiVM": return SatoshiVM;
      case "satoshiVMTestnet": return SatoshiVMTestnet;
      case "scrollSepolia": return ScrollSepolia;
      case "sei": return Sei;
      case "seiDevnet": return SeiDevnet;
      case "seiTestnet": return SeiTestnet;
      case "sepolia": return Sepolia;
      case "shape": return Shape;
      case "shapeSepolia": return ShapeSepolia;
      case "shardeumSphinx": return ShardeumSphinx;
      case "shibarium": return Shibarium;
      case "shibariumTestnet": return ShibariumTestnet;
      case "shiden": return Shiden;
      case "shimmer": return Shimmer;
      case "shimmerTestnet": return ShimmerTestnet;
      case "silicon": return Silicon;
      case "siliconSepolia": return SiliconSepolia;
      case "sixProtocol": return SixProtocol;
      case "skaleBlockBrawlers": return SkaleBlockBrawlers;
      case "skaleCalypso": return SkaleCalypso;
      case "skaleCalypsoTestnet": return SkaleCalypsoTestnet;
      case "skaleCryptoBlades": return SkaleCryptoBlades;
      case "skaleCryptoColosseum": return SkaleCryptoColosseum;
      case "skaleEuropa": return SkaleEuropa;
      case "skaleEuropaTestnet": return SkaleEuropaTestnet;
      case "skaleExorde": return SkaleExorde;
      case "skaleHumanProtocol": return SkaleHumanProtocol;
      case "skaleNebula": return SkaleNebula;
      case "skaleNebulaTestnet": return SkaleNebulaTestnet;
      case "skaleRazor": return SkaleRazor;
      case "skaleTitan": return SkaleTitan;
      case "skaleTitanTestnet": return SkaleTitanTestnet;
      case "sketchpad": return Sketchpad;
      case "snax": return Snax;
      case "snaxTestnet": return SnaxTestnet;
      case "soneium": return Soneium;
      case "soneiumMinato": return SoneiumMinato;
      case "sonic": return Sonic;
      case "sonicTestnet": return SonicTestnet;
      case "songbird": return Songbird;
      case "songbirdTestnet": return SongbirdTestnet;
      case "sophon": return Sophon;
      case "sophonTestnet": return SophonTestnet;
      case "spicy": return Spicy;
      case "step": return Step;
      case "storyOdyssey": return StoryOdyssey;
      case "storyTestnet": return StoryTestnet;
      case "stratis": return Stratis;
      case "superlumio": return Superlumio;
      case "superposition": return Superposition;
      case "superseed": return Superseed;
      case "superseedSepolia": return SuperseedSepolia;
      case "swan": return Swan;
      case "swanProximaTestnet": return SwanProximaTestnet;
      case "swanSaturnTestnet": return SwanSaturnTestnet;
      case "swellchain": return Swellchain;
      case "swissdlt": return Swissdlt;
      case "syscoin": return Syscoin;
      case "syscoinTestnet": return SyscoinTestnet;
      case "taiko": return Taiko;
      case "taikoHekla": return TaikoHekla;
      case "taikoJolnir": return TaikoJolnir;
      case "taikoKatla": return TaikoKatla;
      case "taikoTestnetSepolia": return TaikoTestnetSepolia;
      case "taraxa": return Taraxa;
      case "taraxaTestnet": return TaraxaTestnet;
      case "telcoinTestnet": return TelcoinTestnet;
      case "telos": return Telos;
      case "telosTestnet": return TelosTestnet;
      case "tenet": return Tenet;
      case "ternoa": return Ternoa;
      case "thaiChain": return ThaiChain;
      case "that": return That;
      case "theta": return Theta;
      case "thetaTestnet": return ThetaTestnet;
      case "thunderCore": return ThunderCore;
      case "thunderTestnet": return ThunderTestnet;
      case "tiktrixTestnet": return TiktrixTestnet;
      case "tomb": return Tomb;
      case "treasure": return Treasure;
      case "treasureTopaz": return TreasureTopaz;
      case "tron": return Tron;
      case "ubiq": return Ubiq;
      case "ultraTestnet": return UltraTestnet;
      case "ultron": return Ultron;
      case "ultronTestnet": return UltronTestnet;
      case "unichainSepolia": return UnichainSepolia;
      case "unique": return Unique;
      case "uniqueOpal": return UniqueOpal;
      case "uniqueQuartz": return UniqueQuartz;
      case "unreal": return Unreal;
      case "vanar": return Vanar;
      case "vechain": return Vechain;
      case "velas": return Velas;
      case "viction": return Viction;
      case "victionTestnet": return VictionTestnet;
      case "vision": return Vision;
      case "visionTestnet": return VisionTestnet;
      case "wanchain": return Wanchain;
      case "wanchainTestnet": return WanchainTestnet;
      case "weaveVMAlphanet": return WeaveVMAlphanet;
      case "wemix": return Wemix;
      case "wemixTestnet": return WemixTestnet;
      case "worldchain": return Worldchain;
      case "worldchainSepolia": return WorldchainSepolia;
      case "worldLand": return WorldLand;
      case "xai": return Xai;
      case "xaiTestnet": return XaiTestnet;
      case "xdc": return Xdc;
      case "xdcTestnet": return XdcTestnet;
      case "xLayer": return XLayer;
      case "x1Testnet": return X1Testnet;
      case "xLayerTestnet": return XLayerTestnet;
      case "xrOne": return XrOne;
      case "xrSepolia": return XrSepolia;
      case "yooldoVerse": return YooldoVerse;
      case "yooldoVerseTestnet": return YooldoVerseTestnet;
      case "zenchainTestnet": return ZenchainTestnet;
      case "zeniq": return Zeniq;
      case "zetachain": return Zetachain;
      case "zetachainAthensTestnet": return ZetachainAthensTestnet;
      case "zhejiang": return Zhejiang;
      case "zilliqa": return Zilliqa;
      case "zilliqaTestnet": return ZilliqaTestnet;
      case "zircuit": return Zircuit;
      case "zircuitTestnet": return ZircuitTestnet;
      case "zkFair": return ZkFair;
      case "zkFairTestnet": return ZkFairTestnet;
      case "zkLinkNova": return ZkLinkNova;
      case "zkLinkNovaSepoliaTestnet": return ZkLinkNovaSepoliaTestnet;
      case "zkSync": return ZkSync;
      case "zksync": return Zksync;
      case "zkSyncInMemoryNode": return ZkSyncInMemoryNode;
      case "zksyncInMemoryNode": return ZksyncInMemoryNode;
      case "zksyncLocalCustomHyperchain": return ZksyncLocalCustomHyperchain;
      case "zksyncLocalHyperchain": return ZksyncLocalHyperchain;
      case "zksyncLocalHyperchainL1": return ZksyncLocalHyperchainL1;
      case "zkSyncLocalNode": return ZkSyncLocalNode;
      case "zksyncLocalNode": return ZksyncLocalNode;
      case "zkSyncSepoliaTestnet": return ZkSyncSepoliaTestnet;
      case "zksyncSepoliaTestnet": return ZksyncSepoliaTestnet;
      case "zora": return Zora;
      case "zoraSepolia": return ZoraSepolia;
      case "zoraTestnet": return ZoraTestnet;
      case "scroll": return Scroll;
    }
    const pickedChain = HelixboxChain.chains().find(
      item => item.id.toString() === chain.toString()
    );
    return pickedChain;
  }
}
