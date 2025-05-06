import {
  Area,
  AreaChart,
  CartesianGrid,
  ComparisonChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "/build/_shared/chunk-CZOLP6YT.js";
import {
  ethers_exports,
  formatUnits
} from "/build/_shared/chunk-HHB33NJO.js";
import {
  require_node
} from "/build/_shared/chunk-IXQKNF5A.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-QVPICV7U.js";
import {
  createHotContext
} from "/build/_shared/chunk-SAX64HLP.js";
import "/build/_shared/chunk-5CTYPWPN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JDDHJGUF.js";
import {
  require_react
} from "/build/_shared/chunk-ZLVDHCXD.js";
import "/build/_shared/chunk-PONQPJE7.js";
import {
  __commonJS,
  __require,
  __toESM
} from "/build/_shared/chunk-AJAKA5UB.js";

// empty-module:~/lib/metrics.server
var require_metrics = __commonJS({
  "empty-module:~/lib/metrics.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.tsx
var import_node = __toESM(require_node());
var import_metrics = __toESM(require_metrics());

// app/components/MetricCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\MetricCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\MetricCard.tsx"
  );
  import.meta.hot.lastModified = "1746539711732.47";
}
function MetricCard({
  title,
  value,
  description,
  trend,
  icon
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-gray-500 text-sm font-medium", children: title }, void 0, false, {
        fileName: "app/components/MetricCard.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-blue-500", children: icon }, void 0, false, {
        fileName: "app/components/MetricCard.tsx",
        lineNumber: 32,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MetricCard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline mt-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl font-semibold text-gray-900", children: value }, void 0, false, {
        fileName: "app/components/MetricCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      trend !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `ml-2 text-sm font-medium ${trend >= 0 ? "text-green-600" : "text-red-600"}`, children: [
        trend >= 0 ? "\u2191" : "\u2193",
        " ",
        Math.abs(trend),
        "%"
      ] }, void 0, true, {
        fileName: "app/components/MetricCard.tsx",
        lineNumber: 37,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MetricCard.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-sm mt-1", children: description }, void 0, false, {
      fileName: "app/components/MetricCard.tsx",
      lineNumber: 42,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MetricCard.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = MetricCard;
var _c;
$RefreshReg$(_c, "MetricCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/TransactionChart.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TransactionChart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TransactionChart.tsx"
  );
  import.meta.hot.lastModified = "1746539711732.47";
}
function TransactionChart({
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Transaction Volume" }, void 0, false, {
      fileName: "app/components/TransactionChart.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AreaChart, { data, margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CartesianGrid, { strokeDasharray: "3 3" }, void 0, false, {
        fileName: "app/components/TransactionChart.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XAxis, { dataKey: "blockNumber", label: {
        value: "Block Number",
        position: "insideBottomRight",
        offset: -10
      } }, void 0, false, {
        fileName: "app/components/TransactionChart.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(YAxis, { label: {
        value: "Transaction Count",
        angle: -90,
        position: "insideLeft"
      } }, void 0, false, {
        fileName: "app/components/TransactionChart.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { formatter: (value) => [`${value} transactions`, "Count"], labelFormatter: (label) => `Block #${label}` }, void 0, false, {
        fileName: "app/components/TransactionChart.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Area, { type: "monotone", dataKey: "transactionCount", stroke: "#8884d8", fill: "#8884d8", fillOpacity: 0.3 }, void 0, false, {
        fileName: "app/components/TransactionChart.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/TransactionChart.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/TransactionChart.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/TransactionChart.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TransactionChart.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = TransactionChart;
var _c2;
$RefreshReg$(_c2, "TransactionChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/BlockTimeChart.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\BlockTimeChart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\BlockTimeChart.tsx"
  );
  import.meta.hot.lastModified = "1746539711731.4705";
}
function BlockTimeChart({
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Block Time (seconds)" }, void 0, false, {
      fileName: "app/components/BlockTimeChart.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LineChart, { data, margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartesianGrid, { strokeDasharray: "3 3" }, void 0, false, {
        fileName: "app/components/BlockTimeChart.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(XAxis, { dataKey: "blockNumber", label: {
        value: "Block Number",
        position: "insideBottomRight",
        offset: -10
      } }, void 0, false, {
        fileName: "app/components/BlockTimeChart.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(YAxis, { label: {
        value: "Block Time (s)",
        angle: -90,
        position: "insideLeft"
      } }, void 0, false, {
        fileName: "app/components/BlockTimeChart.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tooltip, { formatter: (value) => [`${value.toFixed(2)} seconds`, "Block Time"], labelFormatter: (label) => `Block #${label}` }, void 0, false, {
        fileName: "app/components/BlockTimeChart.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Line, { type: "monotone", dataKey: "blockTime", stroke: "#82ca9d", strokeWidth: 2, dot: {
        r: 3
      }, activeDot: {
        r: 5
      } }, void 0, false, {
        fileName: "app/components/BlockTimeChart.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlockTimeChart.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/BlockTimeChart.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/BlockTimeChart.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlockTimeChart.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c3 = BlockTimeChart;
var _c3;
$RefreshReg$(_c3, "BlockTimeChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NetworkStatus.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NetworkStatus.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NetworkStatus.tsx"
  );
  import.meta.hot.lastModified = "1746540730484.562";
}
function NetworkStatus({
  stats
}) {
  const getStatus = () => {
    if (stats.tps > 5e3 && stats.avgBlockTime < 2) {
      return {
        label: "Excellent",
        color: "bg-green-500"
      };
    } else if (stats.tps > 1e3 && stats.avgBlockTime < 5) {
      return {
        label: "Good",
        color: "bg-green-400"
      };
    } else if (stats.tps > 100 && stats.avgBlockTime < 10) {
      return {
        label: "Normal",
        color: "bg-yellow-400"
      };
    } else {
      return {
        label: "Degraded",
        color: "bg-red-500"
      };
    }
  };
  const status = getStatus();
  const formatGasPrice = (price) => {
    try {
      return `${formatUnits(price || "0", "gwei")} Gwei`;
    } catch (error) {
      return `${price || "0"} Gwei`;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Network Status" }, void 0, false, {
      fileName: "app/components/NetworkStatus.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `w-3 h-3 rounded-full ${status.color} mr-2` }, void 0, false, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-medium", children: status.label }, void 0, false, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NetworkStatus.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Latest Block" }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium", children: [
          "# ",
          stats.latestBlock.toLocaleString()
        ] }, void 0, true, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-gray-500", children: "TPS" }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium", children: stats.tps.toFixed(2) }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Block Time" }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium", children: [
          stats.avgBlockTime.toFixed(2),
          "s"
        ] }, void 0, true, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Gas Price" }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium", children: formatGasPrice(stats.gasPrice) }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Pending Txs" }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium", children: stats.pendingTxCount }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Nodes" }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium", children: stats.nodesCount }, void 0, false, {
          fileName: "app/components/NetworkStatus.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NetworkStatus.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NetworkStatus.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NetworkStatus.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_c4 = NetworkStatus;
var _c4;
$RefreshReg$(_c4, "NetworkStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Dashboard.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Dashboard.tsx"
  );
  import.meta.hot.lastModified = "1746539711732.47";
}
function Dashboard({
  networkStats,
  recentBlocks,
  recentTransactions,
  chainComparisons,
  blockTimeTrend,
  txTrend
}) {
  const formatEther = (wei) => {
    try {
      return parseFloat(ethers_exports.formatEther(wei)).toFixed(6);
    } catch {
      return "0";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800", children: "Monad Testnet Dashboard" }, void 0, false, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-600", children: "Real-time analytics for the Monad Testnet" }, void 0, false, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Key Metrics" }, void 0, false, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MetricCard, { title: "TPS", value: networkStats.tps.toFixed(2), description: "Transactions per second" }, void 0, false, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MetricCard, { title: "Block Time", value: `${networkStats.avgBlockTime.toFixed(2)}s`, description: "Average time between blocks" }, void 0, false, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MetricCard, { title: "Latest Block", value: networkStats.latestBlock.toLocaleString(), description: "Current blockchain height" }, void 0, false, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MetricCard, { title: "Gas Price", value: `${ethers_exports.formatUnits(networkStats.gasPrice || "0", "gwei")} Gwei`, description: "Current gas price" }, void 0, false, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TransactionChart, { data: txTrend }, void 0, false, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BlockTimeChart, { data: blockTimeTrend }, void 0, false, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NetworkStatus, { stats: networkStats }, void 0, false, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ComparisonChart, { data: chainComparisons, metric: "tps", title: "TPS Comparison", color: "#8884d8" }, void 0, false, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Chain Comparisons" }, void 0, false, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ComparisonChart, { data: chainComparisons, metric: "blockTime", title: "Block Time Comparison (seconds)", color: "#82ca9d" }, void 0, false, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ComparisonChart, { data: chainComparisons, metric: "finality", title: "Finality Time Comparison (seconds)", color: "#ffc658" }, void 0, false, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-xl font-semibold", children: "Recent Blocks" }, void 0, false, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/blocks", className: "text-blue-500 hover:text-blue-700", children: "View All \u2192" }, void 0, false, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 95,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 96,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Txs" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Used" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 98,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: recentBlocks.slice(0, 5).map((block) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/blocks/${block.number}`, children: block.number }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 104,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 103,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(block.timestamp * 1e3).toLocaleString() }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 108,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: block.transactions.length }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 111,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              ethers_exports.formatUnits(block.gasUsed, "gwei"),
              " Gwei"
            ] }, void 0, true, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this)
          ] }, block.hash, true, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 102,
            columnNumber: 56
          }, this)) }, void 0, false, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-xl font-semibold", children: "Recent Transactions" }, void 0, false, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/transactions", className: "text-blue-500 hover:text-blue-700", children: "View All \u2192" }, void 0, false, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 126,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tx Hash" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 134,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "From" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "To" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Value" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: recentTransactions.slice(0, 5).map((tx) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/transactions/${tx.hash}`, children: [
              tx.hash.substring(0, 10),
              "..."
            ] }, void 0, true, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 143,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 142,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              tx.from.substring(0, 8),
              "..."
            ] }, void 0, true, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 147,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: tx.to ? `${tx.to.substring(0, 8)}...` : "Contract Creation" }, void 0, false, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 150,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
              formatEther(tx.value),
              " MON"
            ] }, void 0, true, {
              fileName: "app/components/Dashboard.tsx",
              lineNumber: 153,
              columnNumber: 21
            }, this)
          ] }, tx.hash, true, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 141,
            columnNumber: 59
          }, this)) }, void 0, false, {
            fileName: "app/components/Dashboard.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Dashboard.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Dashboard.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Dashboard.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Dashboard.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c5 = Dashboard;
var _c5;
$RefreshReg$(_c5, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1746540194656.2727";
}
function Index() {
  _s();
  const dashboardData = useLoaderData();
  (0, import_react3.useEffect)(() => {
    try {
      const sdk = __require("@farcaster/frame-sdk");
      sdk.actions.ready();
      sdk.on("primaryButtonClicked", () => {
        console.log("Primary button clicked");
      });
      return () => {
        sdk.removeAllListeners();
      };
    } catch (error) {
      console.log("Farcaster SDK not available");
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dashboard, { ...dashboardData }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(Index, "j0ZFNKuu/dErv98KBpsFh9V7Y+4=", false, function() {
  return [useLoaderData];
});
_c6 = Index;
var _c6;
$RefreshReg$(_c6, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-VCKFEUDO.js.map
