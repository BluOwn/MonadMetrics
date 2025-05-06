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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = require("isbot"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
var tailwind_default = "/build/_assets/tailwind-RFPTBBHZ.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", { children: "Monad Testnet Metrics" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "description", content: "Real-time analytics dashboard for Monad Testnet" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "fc:frame", content: '{"version":"next","imageUrl":"https://monaddashboard.vercel.app/og-image.png","button":{"title":"Open Dashboard","action":{"type":"launch_frame","name":"Monad Metrics","url":"https://monaddashboard.vercel.app","splashImageUrl":"https://monaddashboard.vercel.app/logo.png","splashBackgroundColor":"#0c111f"}}}' })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/transactions.tsx
var transactions_exports = {};
__export(transactions_exports, {
  default: () => Transactions,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

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
var import_react4 = require("react"), import_ethers2 = require("ethers"), import_jsx_runtime3 = require("react/jsx-runtime"), loader = async () => {
  try {
    let transactions = await getRecentTransactions(50);
    return (0, import_node2.json)({ transactions });
  } catch (error) {
    throw console.error("Error loading transactions:", error), new Response("Error loading transactions", { status: 500 });
  }
};
function Transactions() {
  let { transactions } = (0, import_react3.useLoaderData)(), [searchTerm, setSearchTerm] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    try {
      require("@farcaster/frame-sdk").actions.ready();
    } catch {
      console.log("Farcaster SDK not available");
    }
  }, []);
  let formatEther = (wei) => {
    try {
      return parseFloat(import_ethers2.ethers.formatEther(wei)).toFixed(6);
    } catch {
      return "0";
    }
  }, filteredTransactions = transactions.filter(
    (tx) => tx.hash.includes(searchTerm) || tx.from.includes(searchTerm) || tx.to && tx.to.includes(searchTerm)
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/", className: "text-blue-500 hover:text-blue-700", children: "\u2190 Back to Dashboard" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Recent Transactions" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "input",
      {
        type: "text",
        placeholder: "Search by tx hash, from, or to address...",
        className: "w-full p-2 border rounded-md",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value)
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tx Hash" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "From" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "To" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Value" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredTransactions.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "a",
          {
            href: `https://testnet.monadexplorer.com/tx/${tx.hash}`,
            target: "_blank",
            rel: "noreferrer",
            className: "hover:underline",
            children: [
              tx.hash.substring(0, 10),
              "..."
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "a",
          {
            href: `https://testnet.monadexplorer.com/block/${tx.blockNumber}`,
            target: "_blank",
            rel: "noreferrer",
            className: "text-blue-500 hover:underline",
            children: tx.blockNumber
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: tx.to ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Contract Creation" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          formatEther(tx.value),
          " MON"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(tx.timestamp * 1e3).toLocaleString() })
      ] }, tx.hash)) })
    ] }) })
  ] });
}

// app/routes/compare.tsx
var compare_exports = {};
__export(compare_exports, {
  default: () => Compare,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/components/ComparisonChart.tsx
var import_recharts = require("recharts"), import_jsx_runtime4 = require("react/jsx-runtime");
function ComparisonChart({ data, metric, title, color }) {
  let formatYAxis = (value) => metric === "tps" && value >= 1e3 ? `${(value / 1e3).toFixed(1)}k` : value;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-lg font-semibold mb-4", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "h-72", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_recharts.BarChart,
      {
        data,
        margin: { top: 10, right: 30, left: 20, bottom: 40 },
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_recharts.CartesianGrid, { strokeDasharray: "3 3" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_recharts.XAxis, { type: "number" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_recharts.YAxis,
            {
              type: "category",
              dataKey: "name",
              width: 100
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_recharts.Tooltip,
            {
              formatter: (value) => metric === "tps" ? [`${value.toLocaleString()} TPS`, "Transactions Per Second"] : metric === "blockTime" ? [`${value} seconds`, "Block Time"] : [`${value} seconds`, "Finality Time"]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_recharts.Legend, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_recharts.Bar,
            {
              dataKey: metric,
              fill: color,
              name: metric === "tps" ? "Transactions Per Second" : metric === "blockTime" ? "Block Time (s)" : "Finality Time (s)"
            }
          )
        ]
      }
    ) }) })
  ] });
}

// app/routes/compare.tsx
var import_react6 = require("react"), import_jsx_runtime5 = require("react/jsx-runtime"), loader2 = async () => {
  try {
    let chainComparisons = await getChainComparisons();
    return (0, import_node3.json)({ chainComparisons });
  } catch (error) {
    throw console.error("Error loading chain comparisons:", error), new Response("Error loading chain comparisons", { status: 500 });
  }
};
function Compare() {
  let { chainComparisons } = (0, import_react5.useLoaderData)();
  return (0, import_react6.useEffect)(() => {
    try {
      require("@farcaster/frame-sdk").actions.ready();
    } catch {
      console.log("Farcaster SDK not available");
    }
  }, []), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, { to: "/", className: "text-blue-500 hover:text-blue-700", children: "\u2190 Back to Dashboard" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Chain Comparisons" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-gray-600", children: "Compare Monad Testnet with other blockchain networks" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid grid-cols-1 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        ComparisonChart,
        {
          data: chainComparisons,
          metric: "tps",
          title: "Transactions Per Second (TPS)",
          color: "#8884d8"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        ComparisonChart,
        {
          data: chainComparisons,
          metric: "blockTime",
          title: "Block Time (seconds)",
          color: "#82ca9d"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        ComparisonChart,
        {
          data: chainComparisons,
          metric: "finality",
          title: "Finality Time (seconds)",
          color: "#ffc658"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-lg font-semibold mb-4", children: "Performance Comparison" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Chain" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "TPS" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block Time (s)" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Finality (s)" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: chainComparisons.map((chain) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { className: chain.name === "Monad Testnet" ? "bg-blue-50" : "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: chain.name === "Monad Testnet" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: chain.name }) : chain.name }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.tps.toLocaleString() }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.blockTime }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.finality })
          ] }, chain.name)) })
        ] }) })
      ] })
    ] })
  ] });
}

// app/routes/blocks.tsx
var blocks_exports = {};
__export(blocks_exports, {
  default: () => Blocks,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_react8 = require("react"), import_ethers3 = require("ethers"), import_jsx_runtime6 = require("react/jsx-runtime"), loader3 = async () => {
  try {
    let blocks = await getRecentBlocks(50);
    return (0, import_node4.json)({ blocks });
  } catch (error) {
    throw console.error("Error loading blocks:", error), new Response("Error loading blocks", { status: 500 });
  }
};
function Blocks() {
  let { blocks } = (0, import_react7.useLoaderData)();
  return (0, import_react8.useEffect)(() => {
    try {
      require("@farcaster/frame-sdk").actions.ready();
    } catch {
      console.log("Farcaster SDK not available");
    }
  }, []), /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Link, { to: "/", className: "text-blue-500 hover:text-blue-700", children: "\u2190 Back to Dashboard" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Recent Blocks" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Hash" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Txs" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Used" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Limit" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "a",
          {
            href: `https://testnet.monadexplorer.com/block/${block.number}`,
            target: "_blank",
            rel: "noreferrer",
            className: "hover:underline",
            children: block.number
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          block.hash.substring(0, 10),
          "...",
          block.hash.substring(block.hash.length - 8)
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(block.timestamp * 1e3).toLocaleString() }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: block.transactions.length }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          import_ethers3.ethers.formatUnits(block.gasUsed, "gwei"),
          " Gwei"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          import_ethers3.ethers.formatUnits(block.gasLimit, "gwei"),
          " Gwei"
        ] })
      ] }, block.hash)) })
    ] }) })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

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
var import_react9 = require("@remix-run/react"), import_ethers5 = require("ethers");

// app/components/MetricCard.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function MetricCard({ title, value, description, trend, icon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex justify-between items-start mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-gray-500 text-sm font-medium", children: title }),
      icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-blue-500", children: icon })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-baseline mt-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-2xl font-semibold text-gray-900", children: value }),
      trend !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: `ml-2 text-sm font-medium ${trend >= 0 ? "text-green-600" : "text-red-600"}`, children: [
        trend >= 0 ? "\u2191" : "\u2193",
        " ",
        Math.abs(trend),
        "%"
      ] })
    ] }),
    description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-gray-500 text-sm mt-1", children: description })
  ] });
}

// app/components/TransactionChart.tsx
var import_recharts2 = require("recharts"), import_jsx_runtime8 = require("react/jsx-runtime");
function TransactionChart({ data }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-lg font-semibold mb-4", children: "Transaction Volume" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "h-64", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_recharts2.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      import_recharts2.AreaChart,
      {
        data,
        margin: { top: 10, right: 30, left: 0, bottom: 0 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_recharts2.CartesianGrid, { strokeDasharray: "3 3" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_recharts2.XAxis,
            {
              dataKey: "blockNumber",
              label: { value: "Block Number", position: "insideBottomRight", offset: -10 }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_recharts2.YAxis,
            {
              label: { value: "Transaction Count", angle: -90, position: "insideLeft" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_recharts2.Tooltip,
            {
              formatter: (value) => [`${value} transactions`, "Count"],
              labelFormatter: (label) => `Block #${label}`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_recharts2.Area,
            {
              type: "monotone",
              dataKey: "transactionCount",
              stroke: "#8884d8",
              fill: "#8884d8",
              fillOpacity: 0.3
            }
          )
        ]
      }
    ) }) })
  ] });
}

// app/components/BlockTimeChart.tsx
var import_recharts3 = require("recharts"), import_jsx_runtime9 = require("react/jsx-runtime");
function BlockTimeChart({ data }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "text-lg font-semibold mb-4", children: "Block Time (seconds)" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "h-64", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts3.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      import_recharts3.LineChart,
      {
        data,
        margin: { top: 10, right: 30, left: 0, bottom: 0 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts3.CartesianGrid, { strokeDasharray: "3 3" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            import_recharts3.XAxis,
            {
              dataKey: "blockNumber",
              label: { value: "Block Number", position: "insideBottomRight", offset: -10 }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            import_recharts3.YAxis,
            {
              label: { value: "Block Time (s)", angle: -90, position: "insideLeft" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            import_recharts3.Tooltip,
            {
              formatter: (value) => [`${value.toFixed(2)} seconds`, "Block Time"],
              labelFormatter: (label) => `Block #${label}`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            import_recharts3.Line,
            {
              type: "monotone",
              dataKey: "blockTime",
              stroke: "#82ca9d",
              strokeWidth: 2,
              dot: { r: 3 },
              activeDot: { r: 5 }
            }
          )
        ]
      }
    ) }) })
  ] });
}

// app/components/NetworkStatus.tsx
var import_ethers4 = require("ethers"), import_jsx_runtime10 = require("react/jsx-runtime");
function NetworkStatus({ stats }) {
  let status = (() => stats.tps > 5e3 && stats.avgBlockTime < 2 ? { label: "Excellent", color: "bg-green-500" } : stats.tps > 1e3 && stats.avgBlockTime < 5 ? { label: "Good", color: "bg-green-400" } : stats.tps > 100 && stats.avgBlockTime < 10 ? { label: "Normal", color: "bg-yellow-400" } : { label: "Degraded", color: "bg-red-500" })(), formatGasPrice = (price) => {
    try {
      return `${(0, import_ethers4.formatUnits)(price || "0", "gwei")} Gwei`;
    } catch {
      return `${price || "0"} Gwei`;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-lg font-semibold mb-4", children: "Network Status" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: `w-3 h-3 rounded-full ${status.color} mr-2` }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "font-medium", children: status.label })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-gray-500", children: "Latest Block" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "font-medium", children: [
          "# ",
          stats.latestBlock.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-gray-500", children: "TPS" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "font-medium", children: stats.tps.toFixed(2) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-gray-500", children: "Block Time" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "font-medium", children: [
          stats.avgBlockTime.toFixed(2),
          "s"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-gray-500", children: "Gas Price" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "font-medium", children: formatGasPrice(stats.gasPrice) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-gray-500", children: "Pending Txs" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "font-medium", children: stats.pendingTxCount })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-gray-500", children: "Nodes" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "font-medium", children: stats.nodesCount })
      ] })
    ] })
  ] });
}

// app/components/Dashboard.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("header", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "text-3xl font-bold text-gray-800", children: "Monad Testnet Dashboard" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-gray-600", children: "Real-time analytics for the Monad Testnet" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold mb-4", children: "Key Metrics" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          MetricCard,
          {
            title: "TPS",
            value: networkStats.tps.toFixed(2),
            description: "Transactions per second"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          MetricCard,
          {
            title: "Block Time",
            value: `${networkStats.avgBlockTime.toFixed(2)}s`,
            description: "Average time between blocks"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          MetricCard,
          {
            title: "Latest Block",
            value: networkStats.latestBlock.toLocaleString(),
            description: "Current blockchain height"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          MetricCard,
          {
            title: "Gas Price",
            value: `${import_ethers5.ethers.formatUnits(networkStats.gasPrice || "0", "gwei")} Gwei`,
            description: "Current gas price"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TransactionChart, { data: txTrend }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlockTimeChart, { data: blockTimeTrend })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(NetworkStatus, { stats: networkStats }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        ComparisonChart,
        {
          data: chainComparisons,
          metric: "tps",
          title: "TPS Comparison",
          color: "#8884d8"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold mb-4", children: "Chain Comparisons" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid grid-cols-1 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          ComparisonChart,
          {
            data: chainComparisons,
            metric: "blockTime",
            title: "Block Time Comparison (seconds)",
            color: "#82ca9d"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          ComparisonChart,
          {
            data: chainComparisons,
            metric: "finality",
            title: "Finality Time Comparison (seconds)",
            color: "#ffc658"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold", children: "Recent Blocks" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react9.Link, { to: "/blocks", className: "text-blue-500 hover:text-blue-700", children: "View All \u2192" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Txs" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Used" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: recentBlocks.slice(0, 5).map((block) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react9.Link, { to: `/blocks/${block.number}`, children: block.number }) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(block.timestamp * 1e3).toLocaleString() }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: block.transactions.length }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              import_ethers5.ethers.formatUnits(block.gasUsed, "gwei"),
              " Gwei"
            ] })
          ] }, block.hash)) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold", children: "Recent Transactions" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react9.Link, { to: "/transactions", className: "text-blue-500 hover:text-blue-700", children: "View All \u2192" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tx Hash" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "From" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "To" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Value" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: recentTransactions.slice(0, 5).map((tx) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react9.Link, { to: `/transactions/${tx.hash}`, children: [
              tx.hash.substring(0, 10),
              "..."
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              tx.from.substring(0, 8),
              "..."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: tx.to ? `${tx.to.substring(0, 8)}...` : "Contract Creation" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              formatEther(tx.value),
              " MON"
            ] })
          ] }, tx.hash)) })
        ] }) })
      ] })
    ] })
  ] });
}

// app/routes/_index.tsx
var import_react11 = require("react"), import_jsx_runtime12 = require("react/jsx-runtime"), loader4 = async () => {
  try {
    let dashboardData = await getDashboardData();
    return (0, import_node5.json)(dashboardData);
  } catch (error) {
    throw console.error("Error loading dashboard data:", error), new Response("Error loading dashboard data", { status: 500 });
  }
};
function Index() {
  let dashboardData = (0, import_react10.useLoaderData)();
  return (0, import_react11.useEffect)(() => {
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
  }, []), /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Dashboard, { ...dashboardData });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MBPRUCDS.js", imports: ["/build/_shared/chunk-6GPAKHYS.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JIW4YBKB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-T7CE4NCR.js", imports: ["/build/_shared/chunk-HWT4I2JF.js", "/build/_shared/chunk-KLOFS663.js", "/build/_shared/chunk-E4E6G4MB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blocks": { id: "routes/blocks", parentId: "root", path: "blocks", index: void 0, caseSensitive: void 0, module: "/build/routes/blocks-EI6JXLVJ.js", imports: ["/build/_shared/chunk-QE4LM4W7.js", "/build/_shared/chunk-KLOFS663.js", "/build/_shared/chunk-E4E6G4MB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/compare": { id: "routes/compare", parentId: "root", path: "compare", index: void 0, caseSensitive: void 0, module: "/build/routes/compare-4OROPWIB.js", imports: ["/build/_shared/chunk-QE4LM4W7.js", "/build/_shared/chunk-HWT4I2JF.js", "/build/_shared/chunk-E4E6G4MB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/transactions": { id: "routes/transactions", parentId: "root", path: "transactions", index: void 0, caseSensitive: void 0, module: "/build/routes/transactions-AJ6JIK6P.js", imports: ["/build/_shared/chunk-QE4LM4W7.js", "/build/_shared/chunk-KLOFS663.js", "/build/_shared/chunk-E4E6G4MB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "2f1da0db", hmr: void 0, url: "/build/manifest-2F1DA0DB.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
