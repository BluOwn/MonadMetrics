var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = require("isbot"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.isbot)(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2VR2I54Z.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Monad Testnet Metrics" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "description", content: "Real-time analytics dashboard for Monad Testnet" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "fc:frame", content: '{"version":"next","imageUrl":"https://monaddashboard.vercel.app/og-image.png","button":{"title":"Open Dashboard","action":{"type":"launch_frame","name":"Monad Metrics","url":"https://monaddashboard.vercel.app","splashImageUrl":"https://monaddashboard.vercel.app/logo.png","splashBackgroundColor":"#0c111f"}}}' }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/transactions.tsx
var transactions_exports = {};
__export(transactions_exports, {
  default: () => Transactions,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/lib/monad.server.ts
var import_ethers = require("ethers"), MONAD_RPC_URL = "https://testnet-rpc.monad.xyz", provider = new import_ethers.ethers.JsonRpcProvider(MONAD_RPC_URL), metricsCache = {
  lastUpdated: 0,
  networkStats: null,
  recentBlocks: [],
  recentTransactions: []
}, CACHE_TTL = 3e4, RATE_LIMIT = {
  maxRequests: 15,
  // Reduced from 20 to stay well under the 25/second limit
  timeWindow: 1e3,
  // 1 second
  requests: [],
  retryDelay: 200
  // Increased from 100ms to 200ms
};
async function checkRateLimit() {
  let now = Date.now();
  if (RATE_LIMIT.requests = RATE_LIMIT.requests.filter((time) => now - time < RATE_LIMIT.timeWindow), RATE_LIMIT.requests.length >= RATE_LIMIT.maxRequests) {
    let oldestRequest = RATE_LIMIT.requests[0], waitTime = RATE_LIMIT.timeWindow - (now - oldestRequest);
    waitTime > 0 && await new Promise((resolve) => setTimeout(resolve, waitTime));
  }
  RATE_LIMIT.requests.push(now);
}
async function retryWithBackoff(operation, maxRetries = 3) {
  let lastError;
  for (let i = 0; i < maxRetries; i++)
    try {
      return await checkRateLimit(), await operation();
    } catch (error) {
      if (lastError = error, error?.error?.code === -32007 || error?.error?.message?.includes("request limit reached")) {
        let delay = RATE_LIMIT.retryDelay * Math.pow(2, i);
        console.log(`Rate limit hit, retrying in ${delay}ms...`), await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  throw lastError;
}
async function getNetworkStats() {
  let now = Date.now();
  if (metricsCache.networkStats && now - metricsCache.lastUpdated < CACHE_TTL)
    return metricsCache.networkStats;
  try {
    let latestBlock = await retryWithBackoff(() => provider.getBlockNumber()), blocks = await getRecentBlocks(5), avgBlockTime = 0;
    if (blocks.length > 1) {
      let totalTime = 0;
      for (let i = 1; i < blocks.length; i++)
        totalTime += blocks[i - 1].timestamp - blocks[i].timestamp;
      avgBlockTime = totalTime / (blocks.length - 1);
    }
    let totalTxs = 0;
    blocks.forEach((block) => {
      totalTxs += block.transactions.length;
    });
    let tps = totalTxs / (blocks.length * avgBlockTime), gasPrice = await retryWithBackoff(async () => (await provider.getFeeData()).gasPrice?.toString() || "0"), stats = {
      latestBlock,
      avgBlockTime,
      tps,
      pendingTxCount: 0,
      // Removed pending transactions as it's not supported
      gasPrice,
      nodesCount: 50
    };
    return metricsCache.networkStats = stats, metricsCache.lastUpdated = now, stats;
  } catch (error) {
    if (console.error("Error fetching network stats:", error), metricsCache.networkStats)
      return metricsCache.networkStats;
    throw error;
  }
}
async function getRecentBlocks(count = 5) {
  let now = Date.now();
  if (metricsCache.recentBlocks.length >= count && now - metricsCache.lastUpdated < CACHE_TTL)
    return metricsCache.recentBlocks.slice(0, count);
  try {
    let latestBlock = await retryWithBackoff(() => provider.getBlockNumber()), blocks = [];
    for (let i = 0; i < count; i++) {
      let blockNumber = latestBlock - i;
      if (blockNumber < 0)
        break;
      let block = await retryWithBackoff(() => provider.getBlock(blockNumber));
      block && blocks.push({
        number: Number(block.number),
        hash: block.hash || "",
        timestamp: Number(block.timestamp),
        transactions: [...block.transactions || []],
        gasUsed: block.gasUsed?.toString() || "0",
        gasLimit: block.gasLimit?.toString() || "0",
        difficulty: "0",
        // Not applicable for PoS chains
        totalDifficulty: "0",
        // Not applicable for PoS chains
        size: "0",
        // Need to calculate from raw data
        miner: block.miner || ""
      });
    }
    return metricsCache.recentBlocks = blocks, metricsCache.lastUpdated = now, blocks;
  } catch (error) {
    if (console.error("Error fetching recent blocks:", error), metricsCache.recentBlocks.length > 0)
      return metricsCache.recentBlocks.slice(0, count);
    throw error;
  }
}
async function getRecentTransactions(count = 20) {
  let now = Date.now();
  if (metricsCache.recentTransactions.length >= count && now - metricsCache.lastUpdated < CACHE_TTL)
    return metricsCache.recentTransactions.slice(0, count);
  try {
    let blocks = await getRecentBlocks(5), transactions = [];
    for (let block of blocks) {
      for (let txHash of block.transactions.slice(0, Math.ceil(count / blocks.length))) {
        let tx = await retryWithBackoff(() => provider.getTransaction(txHash));
        if (tx && (transactions.push({
          hash: tx.hash,
          from: tx.from,
          to: tx.to || "",
          value: tx.value.toString(),
          gas: tx.gasLimit.toString(),
          gasPrice: tx.gasPrice?.toString() || "0",
          nonce: tx.nonce,
          blockHash: tx.blockHash || "",
          blockNumber: Number(tx.blockNumber),
          timestamp: block.timestamp
        }), transactions.length >= count))
          break;
      }
      if (transactions.length >= count)
        break;
    }
    return metricsCache.recentTransactions = transactions, metricsCache.lastUpdated = now, transactions;
  } catch (error) {
    if (console.error("Error fetching recent transactions:", error), metricsCache.recentTransactions.length > 0)
      return metricsCache.recentTransactions.slice(0, count);
    throw error;
  }
}
async function getChainComparisons() {
  return [
    { name: "Monad Testnet", tps: 1e4, blockTime: 1, finality: 1 },
    { name: "Ethereum", tps: 15, blockTime: 12, finality: 12 },
    { name: "Solana", tps: 4e3, blockTime: 0.4, finality: 32 },
    { name: "Arbitrum", tps: 50, blockTime: 0.25, finality: 0.25 },
    { name: "Optimism", tps: 35, blockTime: 2, finality: 10 }
  ];
}

// app/routes/transactions.tsx
var import_react5 = require("react"), import_ethers2 = require("ethers");

// app/hooks/useFarcaster.ts
var import_react3 = require("react");
function useFarcaster() {
  (0, import_react3.useEffect)(() => {
    if (!(typeof window > "u"))
      try {
        let sdk = require("@farcaster/frame-sdk");
        return sdk.actions.ready(), sdk.on("primaryButtonClicked", () => {
          console.log("Primary button clicked");
        }), () => {
          sdk.removeAllListeners();
        };
      } catch {
        console.log("Farcaster SDK not available");
      }
  }, []);
}

// app/routes/transactions.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async () => {
  try {
    let transactions = await getRecentTransactions(50);
    return (0, import_node2.json)({ transactions });
  } catch (error) {
    throw console.error("Error loading transactions:", error), new Response("Error loading transactions", { status: 500 });
  }
};
function Transactions() {
  let { transactions } = (0, import_react4.useLoaderData)(), [searchTerm, setSearchTerm] = (0, import_react5.useState)("");
  useFarcaster();
  let formatEther = (wei) => {
    try {
      return parseFloat(import_ethers2.ethers.formatEther(wei)).toFixed(6);
    } catch {
      return "0";
    }
  }, filteredTransactions = transactions.filter(
    (tx) => tx.hash.includes(searchTerm) || tx.from.includes(searchTerm) || tx.to && tx.to.includes(searchTerm)
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/", className: "text-blue-500 hover:text-blue-700", children: "\u2190 Back to Dashboard" }, void 0, !1, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Recent Transactions" }, void 0, !1, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "input",
      {
        type: "text",
        placeholder: "Search by tx hash, from, or to address...",
        className: "w-full p-2 border rounded-md",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tx Hash" }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "From" }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "To" }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Value" }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredTransactions.map((tx) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: `/transactions/${tx.hash}`, children: [
          tx.hash.substring(0, 10),
          "..."
        ] }, void 0, !0, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 84,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "a",
          {
            href: `https://testnet.monadexplorer.com/block/${tx.blockNumber}`,
            target: "_blank",
            rel: "noreferrer",
            className: "text-blue-500 hover:underline",
            children: tx.blockNumber
          },
          void 0,
          !1,
          {
            fileName: "app/routes/transactions.tsx",
            lineNumber: 89,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "a",
          {
            href: `https://testnet.monadexplorer.com/address/${tx.from}`,
            target: "_blank",
            rel: "noreferrer",
            className: "text-blue-500 hover:underline",
            children: [
              tx.from.substring(0, 8),
              "...",
              tx.from.substring(tx.from.length - 6)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/transactions.tsx",
            lineNumber: 99,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: tx.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "a",
          {
            href: `https://testnet.monadexplorer.com/address/${tx.to}`,
            target: "_blank",
            rel: "noreferrer",
            className: "text-blue-500 hover:underline",
            children: [
              tx.to.substring(0, 8),
              "...",
              tx.to.substring(tx.to.length - 6)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/transactions.tsx",
            lineNumber: 110,
            columnNumber: 21
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Contract Creation" }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 119,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          formatEther(tx.value),
          " MON"
        ] }, void 0, !0, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 122,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(tx.timestamp * 1e3).toLocaleString() }, void 0, !1, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 125,
          columnNumber: 17
        }, this)
      ] }, tx.hash, !0, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 82,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/transactions.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/compare.tsx
var compare_exports = {};
__export(compare_exports, {
  default: () => Compare,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/components/ComparisonChart.tsx
var import_recharts = require("recharts"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function ComparisonChart({ data, metric, title, color }) {
  let formatYAxis = (value) => metric === "tps" && value >= 1e3 ? `${(value / 1e3).toFixed(1)}k` : value;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: title }, void 0, !1, {
      fileName: "app/components/ComparisonChart.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_recharts.BarChart,
      {
        data,
        margin: { top: 10, right: 30, left: 20, bottom: 40 },
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/components/ComparisonChart.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.XAxis, { type: "number" }, void 0, !1, {
            fileName: "app/components/ComparisonChart.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_recharts.YAxis,
            {
              type: "category",
              dataKey: "name",
              width: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/ComparisonChart.tsx",
              lineNumber: 32,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_recharts.Tooltip,
            {
              formatter: (value) => metric === "tps" ? [`${value.toLocaleString()} TPS`, "Transactions Per Second"] : metric === "blockTime" ? [`${value} seconds`, "Block Time"] : [`${value} seconds`, "Finality Time"]
            },
            void 0,
            !1,
            {
              fileName: "app/components/ComparisonChart.tsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.Legend, {}, void 0, !1, {
            fileName: "app/components/ComparisonChart.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_recharts.Bar,
            {
              dataKey: metric,
              fill: color,
              name: metric === "tps" ? "Transactions Per Second" : metric === "blockTime" ? "Block Time (s)" : "Finality Time (s)"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ComparisonChart.tsx",
              lineNumber: 49,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ComparisonChart.tsx",
        lineNumber: 25,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ComparisonChart.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ComparisonChart.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ComparisonChart.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/compare.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader2 = async () => {
  try {
    let chainComparisons = await getChainComparisons();
    return (0, import_node3.json)({ chainComparisons });
  } catch (error) {
    throw console.error("Error loading chain comparisons:", error), new Response("Error loading chain comparisons", { status: 500 });
  }
};
function Compare() {
  let { chainComparisons } = (0, import_react6.useLoaderData)();
  return useFarcaster(), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "/", className: "text-blue-500 hover:text-blue-700", children: "\u2190 Back to Dashboard" }, void 0, !1, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Chain Comparisons" }, void 0, !1, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-600", children: "Compare Monad Testnet with other blockchain networks" }, void 0, !1, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/compare.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        ComparisonChart,
        {
          data: chainComparisons,
          metric: "tps",
          title: "Transactions Per Second (TPS)",
          color: "#8884d8"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/compare.tsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        ComparisonChart,
        {
          data: chainComparisons,
          metric: "blockTime",
          title: "Block Time (seconds)",
          color: "#82ca9d"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/compare.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        ComparisonChart,
        {
          data: chainComparisons,
          metric: "finality",
          title: "Finality Time (seconds)",
          color: "#ffc658"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/compare.tsx",
          lineNumber: 54,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Performance Comparison" }, void 0, !1, {
          fileName: "app/routes/compare.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Chain" }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 67,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "TPS" }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block Time (s)" }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 69,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Finality (s)" }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/compare.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/compare.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: chainComparisons.map((chain) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { className: chain.name === "Monad Testnet" ? "bg-blue-50" : "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: chain.name === "Monad Testnet" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: chain.name }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 77,
              columnNumber: 57
            }, this) : chain.name }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 76,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.tps.toLocaleString() }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 79,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.blockTime }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 82,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.finality }, void 0, !1, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 85,
              columnNumber: 21
            }, this)
          ] }, chain.name, !0, {
            fileName: "app/routes/compare.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/compare.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/compare.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/compare.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/compare.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/compare.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/blocks.tsx
var blocks_exports = {};
__export(blocks_exports, {
  default: () => Blocks,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_ethers3 = require("ethers");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader3 = async () => {
  try {
    let blocks = await getRecentBlocks(50);
    return (0, import_node4.json)({ blocks });
  } catch (error) {
    throw console.error("Error loading blocks:", error), new Response("Error loading blocks", { status: 500 });
  }
};
function Blocks() {
  let { blocks } = (0, import_react7.useLoaderData)();
  return useFarcaster(), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "/", className: "text-blue-500 hover:text-blue-700", children: "\u2190 Back to Dashboard" }, void 0, !1, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Recent Blocks" }, void 0, !1, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blocks.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Hash" }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Txs" }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Used" }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Limit" }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: blocks.map((block) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: `/blocks/${block.number}`, children: block.number }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 57,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          block.hash.substring(0, 10),
          "..."
        ] }, void 0, !0, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(block.timestamp * 1e3).toISOString().replace("T", " ").slice(0, 19) }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: block.transactions.length }, void 0, !1, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          import_ethers3.ethers.formatUnits(block.gasUsed, "gwei"),
          " Gwei"
        ] }, void 0, !0, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          import_ethers3.ethers.formatUnits(block.gasLimit, "gwei"),
          " Gwei"
        ] }, void 0, !0, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, block.hash, !0, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blocks.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blocks.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blocks.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/lib/metrics.server.ts
async function getDashboardData() {
  try {
    let [networkStats, recentBlocks, recentTransactions, chainComparisons] = await Promise.all([
      getNetworkStats(),
      getRecentBlocks(10),
      getRecentTransactions(20),
      getChainComparisons()
    ]), blockTimeTrend = calculateBlockTimeTrend(recentBlocks), txTrend = calculateTransactionTrend(recentBlocks);
    return {
      networkStats,
      recentBlocks,
      recentTransactions,
      chainComparisons,
      blockTimeTrend,
      txTrend
    };
  } catch (error) {
    throw console.error("Error fetching dashboard data:", error), error;
  }
}
function calculateBlockTimeTrend(blocks) {
  if (blocks.length <= 1)
    return [];
  let trend = [];
  for (let i = 1; i < blocks.length; i++) {
    let blockTime = blocks[i - 1].timestamp - blocks[i].timestamp;
    trend.push({
      blockNumber: blocks[i].number,
      blockTime
    });
  }
  return trend.reverse();
}
function calculateTransactionTrend(blocks) {
  return blocks.map((block) => ({
    blockNumber: block.number,
    transactionCount: block.transactions.length
  })).reverse();
}

// app/components/Dashboard.tsx
var import_react8 = require("@remix-run/react"), import_ethers5 = require("ethers");

// app/components/MetricCard.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function MetricCard({ title, value, description, trend, icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-between items-start mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-gray-500 text-sm font-medium", children: title }, void 0, !1, {
        fileName: "app/components/MetricCard.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      icon && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-blue-500", children: icon }, void 0, !1, {
        fileName: "app/components/MetricCard.tsx",
        lineNumber: 16,
        columnNumber: 18
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MetricCard.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-baseline mt-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-2xl font-semibold text-gray-900", children: value }, void 0, !1, {
        fileName: "app/components/MetricCard.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      trend !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: `ml-2 text-sm font-medium ${trend >= 0 ? "text-green-600" : "text-red-600"}`, children: [
        trend >= 0 ? "\u2191" : "\u2193",
        " ",
        Math.abs(trend),
        "%"
      ] }, void 0, !0, {
        fileName: "app/components/MetricCard.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MetricCard.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-gray-500 text-sm mt-1", children: description }, void 0, !1, {
      fileName: "app/components/MetricCard.tsx",
      lineNumber: 28,
      columnNumber: 23
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MetricCard.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/TransactionChart.tsx
var import_recharts2 = require("recharts"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function TransactionChart({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Transaction Volume" }, void 0, !1, {
      fileName: "app/components/TransactionChart.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_recharts2.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_recharts2.AreaChart,
      {
        data,
        margin: { top: 10, right: 30, left: 0, bottom: 0 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_recharts2.CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/components/TransactionChart.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_recharts2.XAxis,
            {
              dataKey: "blockNumber",
              label: { value: "Block Number", position: "insideBottomRight", offset: -10 }
            },
            void 0,
            !1,
            {
              fileName: "app/components/TransactionChart.tsx",
              lineNumber: 22,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_recharts2.YAxis,
            {
              label: { value: "Transaction Count", angle: -90, position: "insideLeft" }
            },
            void 0,
            !1,
            {
              fileName: "app/components/TransactionChart.tsx",
              lineNumber: 26,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_recharts2.Tooltip,
            {
              formatter: (value) => [`${value} transactions`, "Count"],
              labelFormatter: (label) => `Block #${label}`
            },
            void 0,
            !1,
            {
              fileName: "app/components/TransactionChart.tsx",
              lineNumber: 29,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_recharts2.Area,
            {
              type: "monotone",
              dataKey: "transactionCount",
              stroke: "#8884d8",
              fill: "#8884d8",
              fillOpacity: 0.3
            },
            void 0,
            !1,
            {
              fileName: "app/components/TransactionChart.tsx",
              lineNumber: 33,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/TransactionChart.tsx",
        lineNumber: 17,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/TransactionChart.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/TransactionChart.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TransactionChart.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/BlockTimeChart.tsx
var import_recharts3 = require("recharts"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function BlockTimeChart({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Block Time (seconds)" }, void 0, !1, {
      fileName: "app/components/BlockTimeChart.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_recharts3.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_recharts3.LineChart,
      {
        data,
        margin: { top: 10, right: 30, left: 0, bottom: 0 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_recharts3.CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/components/BlockTimeChart.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_recharts3.XAxis,
            {
              dataKey: "blockNumber",
              label: { value: "Block Number", position: "insideBottomRight", offset: -10 }
            },
            void 0,
            !1,
            {
              fileName: "app/components/BlockTimeChart.tsx",
              lineNumber: 22,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_recharts3.YAxis,
            {
              label: { value: "Block Time (s)", angle: -90, position: "insideLeft" }
            },
            void 0,
            !1,
            {
              fileName: "app/components/BlockTimeChart.tsx",
              lineNumber: 26,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_recharts3.Tooltip,
            {
              formatter: (value) => [`${value.toFixed(2)} seconds`, "Block Time"],
              labelFormatter: (label) => `Block #${label}`
            },
            void 0,
            !1,
            {
              fileName: "app/components/BlockTimeChart.tsx",
              lineNumber: 29,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_recharts3.Line,
            {
              type: "monotone",
              dataKey: "blockTime",
              stroke: "#82ca9d",
              strokeWidth: 2,
              dot: { r: 3 },
              activeDot: { r: 5 }
            },
            void 0,
            !1,
            {
              fileName: "app/components/BlockTimeChart.tsx",
              lineNumber: 33,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/BlockTimeChart.tsx",
        lineNumber: 17,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/BlockTimeChart.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/BlockTimeChart.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BlockTimeChart.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/NetworkStatus.tsx
var import_ethers4 = require("ethers"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function NetworkStatus({ stats }) {
  let status = (() => stats.tps > 5e3 && stats.avgBlockTime < 2 ? { label: "Excellent", color: "bg-green-500" } : stats.tps > 1e3 && stats.avgBlockTime < 5 ? { label: "Good", color: "bg-green-400" } : stats.tps > 100 && stats.avgBlockTime < 10 ? { label: "Normal", color: "bg-yellow-400" } : { label: "Degraded", color: "bg-red-500" })(), formatGasPrice = (price) => {
    try {
      return `${(0, import_ethers4.formatUnits)(price || "0", "gwei")} Gwei`;
    } catch {
      return `${price || "0"} Gwei`;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Network Status" }, void 0, !1, {
      fileName: "app/components/NetworkStatus.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: `w-3 h-3 rounded-full ${status.color} mr-2` }, void 0, !1, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "font-medium", children: status.label }, void 0, !1, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NetworkStatus.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Latest Block" }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-medium", children: [
          "# ",
          stats.latestBlock.toLocaleString()
        ] }, void 0, !0, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-500", children: "TPS" }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-medium", children: stats.tps.toFixed(2) }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Block Time" }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-medium", children: [
          stats.avgBlockTime.toFixed(2),
          "s"
        ] }, void 0, !0, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Gas Price" }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-medium", children: formatGasPrice(stats.gasPrice) }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Pending Txs" }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-medium", children: stats.pendingTxCount }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Nodes" }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-medium", children: stats.nodesCount }, void 0, !1, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NetworkStatus.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NetworkStatus.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/components/Dashboard.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), formatDate = (timestamp) => new Date(timestamp * 1e3).toISOString().replace("T", " ").slice(0, 19);
function Dashboard({
  networkStats,
  recentBlocks,
  recentTransactions,
  chainComparisons,
  blockTimeTrend,
  txTrend
}) {
  let formatEther = (wei) => {
    try {
      return parseFloat(import_ethers5.ethers.formatEther(wei)).toFixed(6);
    } catch {
      return "0";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800", children: "Monad Testnet Dashboard" }, void 0, !1, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-600", children: "Real-time analytics for the Monad Testnet" }, void 0, !1, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Key Metrics" }, void 0, !1, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          MetricCard,
          {
            title: "TPS",
            value: networkStats.tps.toFixed(2),
            description: "Transactions per second"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 53,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          MetricCard,
          {
            title: "Block Time",
            value: `${networkStats.avgBlockTime.toFixed(2)}s`,
            description: "Average time between blocks"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 58,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          MetricCard,
          {
            title: "Latest Block",
            value: networkStats.latestBlock.toLocaleString(),
            description: "Current blockchain height"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 63,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          MetricCard,
          {
            title: "Gas Price",
            value: `${import_ethers5.ethers.formatUnits(networkStats.gasPrice || "0", "gwei")} Gwei`,
            description: "Current gas price"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 68,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(TransactionChart, { data: txTrend }, void 0, !1, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BlockTimeChart, { data: blockTimeTrend }, void 0, !1, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NetworkStatus, { stats: networkStats }, void 0, !1, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        ComparisonChart,
        {
          data: chainComparisons,
          metric: "tps",
          title: "TPS Comparison",
          color: "#8884d8"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 85,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Chain Comparisons" }, void 0, !1, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid grid-cols-1 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          ComparisonChart,
          {
            data: chainComparisons,
            metric: "blockTime",
            title: "Block Time Comparison (seconds)",
            color: "#82ca9d"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 96,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          ComparisonChart,
          {
            data: chainComparisons,
            metric: "finality",
            title: "Finality Time Comparison (seconds)",
            color: "#ffc658"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 102,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "text-xl font-semibold", children: "Recent Blocks" }, void 0, !1, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Link, { to: "/blocks", className: "text-blue-500 hover:text-blue-700", children: "View All \u2192" }, void 0, !1, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 124,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 125,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Txs" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 126,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Used" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: recentBlocks.slice(0, 5).map((block) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Link, { to: `/blocks/${block.number}`, children: block.number }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 134,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 133,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: formatDate(block.timestamp) }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 138,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: block.transactions.length }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 141,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              import_ethers5.ethers.formatUnits(block.gasUsed, "gwei"),
              " Gwei"
            ] }, void 0, !0, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 144,
              columnNumber: 21
            }, this)
          ] }, block.hash, !0, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "text-xl font-semibold", children: "Recent Transactions" }, void 0, !1, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 156,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Link, { to: "/transactions", className: "text-blue-500 hover:text-blue-700", children: "View All \u2192" }, void 0, !1, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tx Hash" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 165,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "From" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 166,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "To" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 167,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Value" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 168,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 164,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: recentTransactions.slice(0, 5).map((tx) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Link, { to: `/transactions/${tx.hash}`, children: [
              tx.hash.substring(0, 10),
              "..."
            ] }, void 0, !0, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 175,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 174,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              tx.from.substring(0, 8),
              "..."
            ] }, void 0, !0, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 179,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: tx.to ? `${tx.to.substring(0, 8)}...` : "Contract Creation" }, void 0, !1, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 182,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              formatEther(tx.value),
              " MON"
            ] }, void 0, !0, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, this)
          ] }, tx.hash, !0, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader4 = async () => {
  try {
    let dashboardData = await getDashboardData();
    return (0, import_node5.json)(dashboardData);
  } catch (error) {
    throw console.error("Error loading dashboard data:", error), new Response("Error loading dashboard data", { status: 500 });
  }
};
function Index() {
  let dashboardData = (0, import_react9.useLoaderData)();
  return useFarcaster(), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Dashboard, { ...dashboardData }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-BG7YIUSQ.js", imports: ["/build/_shared/chunk-YMSA6ONA.js", "/build/_shared/chunk-FS3FXK7U.js", "/build/_shared/chunk-KGLWBS4V.js", "/build/_shared/chunk-PHP2QVJK.js", "/build/_shared/chunk-UIDJAVJF.js", "/build/_shared/chunk-PVMJWBJB.js", "/build/_shared/chunk-RGTVMBVK.js", "/build/_shared/chunk-EBWBTRXC.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FOT4UB7D.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YQRXD7XD.js", imports: ["/build/_shared/chunk-4OM6PMSE.js", "/build/_shared/chunk-ZK4T36K7.js", "/build/_shared/chunk-B3SKNBH7.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blocks": { id: "routes/blocks", parentId: "root", path: "blocks", index: void 0, caseSensitive: void 0, module: "/build/routes/blocks-GV2E4BTM.js", imports: ["/build/_shared/chunk-7CTKQPSG.js", "/build/_shared/chunk-ZK4T36K7.js", "/build/_shared/chunk-B3SKNBH7.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/compare": { id: "routes/compare", parentId: "root", path: "compare", index: void 0, caseSensitive: void 0, module: "/build/routes/compare-R645PWOI.js", imports: ["/build/_shared/chunk-7CTKQPSG.js", "/build/_shared/chunk-4OM6PMSE.js", "/build/_shared/chunk-B3SKNBH7.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/transactions": { id: "routes/transactions", parentId: "root", path: "transactions", index: void 0, caseSensitive: void 0, module: "/build/routes/transactions-2EKXH2KA.js", imports: ["/build/_shared/chunk-7CTKQPSG.js", "/build/_shared/chunk-ZK4T36K7.js", "/build/_shared/chunk-B3SKNBH7.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "fe5ecc69", hmr: { runtime: "/build/_shared\\chunk-KGLWBS4V.js", timestamp: 1746543980106 }, url: "/build/manifest-FE5ECC69.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/transactions": {
    id: "routes/transactions",
    parentId: "root",
    path: "transactions",
    index: void 0,
    caseSensitive: void 0,
    module: transactions_exports
  },
  "routes/compare": {
    id: "routes/compare",
    parentId: "root",
    path: "compare",
    index: void 0,
    caseSensitive: void 0,
    module: compare_exports
  },
  "routes/blocks": {
    id: "routes/blocks",
    parentId: "root",
    path: "blocks",
    index: void 0,
    caseSensitive: void 0,
    module: blocks_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
