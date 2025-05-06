import {
  require_monad
} from "/build/_shared/chunk-7CTKQPSG.js";
import {
  ethers_exports
} from "/build/_shared/chunk-ZK4T36K7.js";
import {
  dist_exports,
  init_dist,
  require_node
} from "/build/_shared/chunk-2SY6O744.js";
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
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-EBWBTRXC.js";

// app/routes/blocks.tsx
var import_node = __toESM(require_node(), 1);
var import_monad = __toESM(require_monad(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\blocks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\blocks.tsx"
  );
  import.meta.hot.lastModified = "1746540209618.5894";
}
function Blocks() {
  _s();
  const {
    blocks
  } = useLoaderData();
  (0, import_react2.useEffect)(() => {
    try {
      const sdk = (init_dist(), __toCommonJS(dist_exports));
      sdk.actions.ready();
    } catch (error) {
      console.log("Farcaster SDK not available");
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-blue-500 hover:text-blue-700", children: "\u2190 Back to Dashboard" }, void 0, false, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Recent Blocks" }, void 0, false, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blocks.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block" }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Hash" }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Txs" }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Used" }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Gas Limit" }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: blocks.map((block) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://testnet.monadexplorer.com/block/${block.number}`, target: "_blank", rel: "noreferrer", className: "hover:underline", children: block.number }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          block.hash.substring(0, 10),
          "...",
          block.hash.substring(block.hash.length - 8)
        ] }, void 0, true, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(block.timestamp * 1e3).toLocaleString() }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: block.transactions.length }, void 0, false, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          ethers_exports.formatUnits(block.gasUsed, "gwei"),
          " Gwei"
        ] }, void 0, true, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          ethers_exports.formatUnits(block.gasLimit, "gwei"),
          " Gwei"
        ] }, void 0, true, {
          fileName: "app/routes/blocks.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this)
      ] }, block.hash, true, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 74,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "app/routes/blocks.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blocks.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/blocks.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blocks.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(Blocks, "R7mwJW1tg8zG9FtVAnWp9m1EzmM=", false, function() {
  return [useLoaderData];
});
_c = Blocks;
var _c;
$RefreshReg$(_c, "Blocks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Blocks as default
};
//# sourceMappingURL=/build/routes/blocks-YWYJ5LEY.js.map
