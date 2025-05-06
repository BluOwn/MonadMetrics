import {
  require_monad
} from "/build/_shared/chunk-7CTKQPSG.js";
import {
  ComparisonChart
} from "/build/_shared/chunk-XYNCWX2A.js";
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

// app/routes/compare.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\compare.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\compare.tsx"
  );
  import.meta.hot.lastModified = "1746540244702.0562";
}
function Compare() {
  _s();
  const {
    chainComparisons
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
        fileName: "app/routes/compare.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800 mt-2", children: "Chain Comparisons" }, void 0, false, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Compare Monad Testnet with other blockchain networks" }, void 0, false, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/compare.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComparisonChart, { data: chainComparisons, metric: "tps", title: "Transactions Per Second (TPS)", color: "#8884d8" }, void 0, false, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComparisonChart, { data: chainComparisons, metric: "blockTime", title: "Block Time (seconds)", color: "#82ca9d" }, void 0, false, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComparisonChart, { data: chainComparisons, metric: "finality", title: "Finality Time (seconds)", color: "#ffc658" }, void 0, false, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Performance Comparison" }, void 0, false, {
          fileName: "app/routes/compare.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Chain" }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "TPS" }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Block Time (s)" }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 77,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Finality (s)" }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/compare.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/compare.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: chainComparisons.map((chain) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: chain.name === "Monad Testnet" ? "bg-blue-50" : "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: chain.name === "Monad Testnet" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: chain.name }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 84,
              columnNumber: 57
            }, this) : chain.name }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 83,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.tps.toLocaleString() }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 86,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.blockTime }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 89,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: chain.finality }, void 0, false, {
              fileName: "app/routes/compare.tsx",
              lineNumber: 92,
              columnNumber: 21
            }, this)
          ] }, chain.name, true, {
            fileName: "app/routes/compare.tsx",
            lineNumber: 82,
            columnNumber: 48
          }, this)) }, void 0, false, {
            fileName: "app/routes/compare.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/compare.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/compare.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/compare.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/compare.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/compare.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(Compare, "Hlo14zWW4Nl4W0q9ZbdvkT3z4sw=", false, function() {
  return [useLoaderData];
});
_c = Compare;
var _c;
$RefreshReg$(_c, "Compare");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Compare as default
};
//# sourceMappingURL=/build/routes/compare-5Z22KF4J.js.map
