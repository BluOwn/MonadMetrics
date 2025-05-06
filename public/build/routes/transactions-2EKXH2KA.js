import {
  require_monad
} from "/build/_shared/chunk-7CTKQPSG.js";
import {
  ethers_exports
} from "/build/_shared/chunk-ZK4T36K7.js";
import {
  require_node,
  useFarcaster
} from "/build/_shared/chunk-B3SKNBH7.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-FS3FXK7U.js";
import {
  createHotContext
} from "/build/_shared/chunk-KGLWBS4V.js";
import "/build/_shared/chunk-PHP2QVJK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UIDJAVJF.js";
import {
  require_react
} from "/build/_shared/chunk-PVMJWBJB.js";
import "/build/_shared/chunk-RGTVMBVK.js";
import {
  __toESM
} from "/build/_shared/chunk-EBWBTRXC.js";

// app/routes/transactions.tsx
var import_node = __toESM(require_node());
var import_monad = __toESM(require_monad());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\transactions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\transactions.tsx"
  );
  import.meta.hot.lastModified = "1746543965159.9758";
}
function Transactions() {
  _s();
  const {
    transactions
  } = useLoaderData();
  const [searchTerm, setSearchTerm] = (0, import_react2.useState)("");
  useFarcaster();
  const formatEther = (wei) => {
    try {
      return parseFloat(ethers_exports.formatEther(wei)).toFixed(6);
    } catch {
      return "0";
    }
  };
  const filteredTransactions = transactions.filter((tx) => tx.hash.includes(searchTerm) || tx.from.includes(searchTerm) || tx.to && tx.to.includes(searchTerm));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-blue-500 hover:text-blue-700", children: "\u2190 Back to Dashboard" }, void 0, false, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Recent Transactions" }, void 0, false, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search by tx hash, from, or to address...", className: "w-full p-2 border rounded-md", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }, void 0, false, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tx Hash" }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "From" }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "To" }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Value" }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredTransactions.map((tx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/transactions/${tx.hash}`, children: [
          tx.hash.substring(0, 10),
          "..."
        ] }, void 0, true, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 87,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://testnet.monadexplorer.com/block/${tx.blockNumber}`, target: "_blank", rel: "noreferrer", className: "text-blue-500 hover:underline", children: tx.blockNumber }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 92,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://testnet.monadexplorer.com/address/${tx.from}`, target: "_blank", rel: "noreferrer", className: "text-blue-500 hover:underline", children: [
          tx.from.substring(0, 8),
          "...",
          tx.from.substring(tx.from.length - 6)
        ] }, void 0, true, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: tx.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://testnet.monadexplorer.com/address/${tx.to}`, target: "_blank", rel: "noreferrer", className: "text-blue-500 hover:underline", children: [
          tx.to.substring(0, 8),
          "...",
          tx.to.substring(tx.to.length - 6)
        ] }, void 0, true, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 102,
          columnNumber: 28
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Contract Creation" }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 104,
          columnNumber: 28
        }, this) }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 101,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          formatEther(tx.value),
          " MON"
        ] }, void 0, true, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(tx.timestamp * 1e3).toLocaleString() }, void 0, false, {
          fileName: "app/routes/transactions.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this)
      ] }, tx.hash, true, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 85,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "app/routes/transactions.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/transactions.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/transactions.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(Transactions, "Hf3PqMuxO3S45UVgeiykEn9k2YM=", false, function() {
  return [useLoaderData, useFarcaster];
});
_c = Transactions;
var _c;
$RefreshReg$(_c, "Transactions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Transactions as default
};
//# sourceMappingURL=/build/routes/transactions-2EKXH2KA.js.map
