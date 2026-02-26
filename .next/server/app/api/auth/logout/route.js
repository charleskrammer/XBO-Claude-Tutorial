"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/logout/route";
exports.ids = ["app/api/auth/logout/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Fcharleskr%2FDesktop%2FXBO%2FAI-Plateforme%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcharleskr%2FDesktop%2FXBO%2FAI-Plateforme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Fcharleskr%2FDesktop%2FXBO%2FAI-Plateforme%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcharleskr%2FDesktop%2FXBO%2FAI-Plateforme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_charleskr_Desktop_XBO_AI_Plateforme_src_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/logout/route.ts */ \"(rsc)/./src/app/api/auth/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/logout/route\",\n        pathname: \"/api/auth/logout\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/logout/route\"\n    },\n    resolvedPagePath: \"/Users/charleskr/Desktop/XBO/AI-Plateforme/src/app/api/auth/logout/route.ts\",\n    nextConfigOutput,\n    userland: _Users_charleskr_Desktop_XBO_AI_Plateforme_src_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/logout/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmxvZ291dCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmNoYXJsZXNrciUyRkRlc2t0b3AlMkZYQk8lMkZBSS1QbGF0ZWZvcm1lJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmNoYXJsZXNrciUyRkRlc2t0b3AlMkZYQk8lMkZBSS1QbGF0ZWZvcm1lJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXRyYWluaW5nLXBvcnRhbC8/YmIyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY2hhcmxlc2tyL0Rlc2t0b3AvWEJPL0FJLVBsYXRlZm9ybWUvc3JjL2FwcC9hcGkvYXV0aC9sb2dvdXQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9sb2dvdXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2NoYXJsZXNrci9EZXNrdG9wL1hCTy9BSS1QbGF0ZWZvcm1lL3NyYy9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL2xvZ291dC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Fcharleskr%2FDesktop%2FXBO%2FAI-Plateforme%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcharleskr%2FDesktop%2FXBO%2FAI-Plateforme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/logout/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/auth/logout/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/session */ \"(rsc)/./src/lib/session.ts\");\n\n\nasync function POST(req) {\n    // Do NOT delete the session from the DB on logout.\n    // Sessions expire naturally after 24h via expiresAt, and are cleaned up\n    // by getSessionUser() when accessed. Deleting here would erase login history\n    // and break the manager dashboard's logins-in-7-days count (auto-logout at\n    // 23:59 would wipe every day's session before the metrics query runs).\n    // Just clear the cookie so the browser is no longer authenticated.\n    const res = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n    res.cookies.set(_lib_session__WEBPACK_IMPORTED_MODULE_1__.SESSION_COOKIE, \"\", {\n        maxAge: 0,\n        path: \"/\"\n    });\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ291dC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDVDtBQUV4QyxlQUFlRSxLQUFLQyxHQUFnQjtJQUN6QyxtREFBbUQ7SUFDbkQsd0VBQXdFO0lBQ3hFLDZFQUE2RTtJQUM3RSwyRUFBMkU7SUFDM0UsdUVBQXVFO0lBQ3ZFLG1FQUFtRTtJQUNuRSxNQUFNQyxNQUFNSixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1FBQUVDLElBQUk7SUFBSztJQUN6Q0YsSUFBSUcsT0FBTyxDQUFDQyxHQUFHLENBQUNQLHdEQUFjQSxFQUFFLElBQUk7UUFBRVEsUUFBUTtRQUFHQyxNQUFNO0lBQUk7SUFDM0QsT0FBT047QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXRyYWluaW5nLXBvcnRhbC8uL3NyYy9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzP2QyNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgU0VTU0lPTl9DT09LSUUgfSBmcm9tIFwiQC9saWIvc2Vzc2lvblwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIC8vIERvIE5PVCBkZWxldGUgdGhlIHNlc3Npb24gZnJvbSB0aGUgREIgb24gbG9nb3V0LlxuICAvLyBTZXNzaW9ucyBleHBpcmUgbmF0dXJhbGx5IGFmdGVyIDI0aCB2aWEgZXhwaXJlc0F0LCBhbmQgYXJlIGNsZWFuZWQgdXBcbiAgLy8gYnkgZ2V0U2Vzc2lvblVzZXIoKSB3aGVuIGFjY2Vzc2VkLiBEZWxldGluZyBoZXJlIHdvdWxkIGVyYXNlIGxvZ2luIGhpc3RvcnlcbiAgLy8gYW5kIGJyZWFrIHRoZSBtYW5hZ2VyIGRhc2hib2FyZCdzIGxvZ2lucy1pbi03LWRheXMgY291bnQgKGF1dG8tbG9nb3V0IGF0XG4gIC8vIDIzOjU5IHdvdWxkIHdpcGUgZXZlcnkgZGF5J3Mgc2Vzc2lvbiBiZWZvcmUgdGhlIG1ldHJpY3MgcXVlcnkgcnVucykuXG4gIC8vIEp1c3QgY2xlYXIgdGhlIGNvb2tpZSBzbyB0aGUgYnJvd3NlciBpcyBubyBsb25nZXIgYXV0aGVudGljYXRlZC5cbiAgY29uc3QgcmVzID0gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KTtcbiAgcmVzLmNvb2tpZXMuc2V0KFNFU1NJT05fQ09PS0lFLCBcIlwiLCB7IG1heEFnZTogMCwgcGF0aDogXCIvXCIgfSk7XG4gIHJldHVybiByZXM7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiU0VTU0lPTl9DT09LSUUiLCJQT1NUIiwicmVxIiwicmVzIiwianNvbiIsIm9rIiwiY29va2llcyIsInNldCIsIm1heEFnZSIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/logout/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLEtBQ1hGLGdCQUFnQkcsTUFBTSxJQUN0QixJQUFJSix3REFBWUEsQ0FBQztJQUNmSyxLQUFLQyxLQUFzQyxHQUFHO1FBQUM7UUFBUztLQUFPLEdBQUcsQ0FBUztBQUM3RSxHQUFHO0FBRUwsSUFBSUEsSUFBcUMsRUFBRUwsZ0JBQWdCRyxNQUFNLEdBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktdHJhaW5pbmctcG9ydGFsLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9O1xuXG5leHBvcnQgY29uc3QgZGIgPVxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFtcImVycm9yXCIsIFwid2FyblwiXSA6IFtcImVycm9yXCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IGRiO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJkYiIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/session.ts":
/*!****************************!*\
  !*** ./src/lib/session.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SESSION_COOKIE: () => (/* binding */ SESSION_COOKIE),\n/* harmony export */   SESSION_MAX_AGE: () => (/* binding */ SESSION_MAX_AGE),\n/* harmony export */   getSessionUser: () => (/* binding */ getSessionUser)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"(rsc)/./src/lib/db.ts\");\n\n\nconst SESSION_COOKIE = \"sid\";\nconst SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours in seconds\n/** Read the current session from the cookie and return the user, or null. */ async function getSessionUser() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    const sessionId = cookieStore.get(SESSION_COOKIE)?.value;\n    if (!sessionId) return null;\n    const session = await _db__WEBPACK_IMPORTED_MODULE_1__.db.session.findUnique({\n        where: {\n            id: sessionId\n        },\n        include: {\n            user: true\n        }\n    });\n    if (!session) return null;\n    if (session.expiresAt && session.expiresAt < new Date()) {\n        await _db__WEBPACK_IMPORTED_MODULE_1__.db.session.delete({\n            where: {\n                id: sessionId\n            }\n        }).catch(()=>{});\n        return null;\n    }\n    return {\n        id: session.user.id,\n        externalId: session.user.externalId,\n        name: session.user.name,\n        role: session.user.role,\n        teamId: session.user.teamId\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3Nlc3Npb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDYjtBQUVuQixNQUFNRSxpQkFBaUIsTUFBTTtBQUM3QixNQUFNQyxrQkFBa0IsS0FBSyxLQUFLLEdBQUcsQ0FBQyxzQkFBc0I7QUFVbkUsMkVBQTJFLEdBQ3BFLGVBQWVDO0lBQ3BCLE1BQU1DLGNBQWNMLHFEQUFPQTtJQUMzQixNQUFNTSxZQUFZRCxZQUFZRSxHQUFHLENBQUNMLGlCQUFpQk07SUFDbkQsSUFBSSxDQUFDRixXQUFXLE9BQU87SUFFdkIsTUFBTUcsVUFBVSxNQUFNUixtQ0FBRUEsQ0FBQ1EsT0FBTyxDQUFDQyxVQUFVLENBQUM7UUFDMUNDLE9BQU87WUFBRUMsSUFBSU47UUFBVTtRQUN2Qk8sU0FBUztZQUFFQyxNQUFNO1FBQUs7SUFDeEI7SUFFQSxJQUFJLENBQUNMLFNBQVMsT0FBTztJQUNyQixJQUFJQSxRQUFRTSxTQUFTLElBQUlOLFFBQVFNLFNBQVMsR0FBRyxJQUFJQyxRQUFRO1FBQ3ZELE1BQU1mLG1DQUFFQSxDQUFDUSxPQUFPLENBQUNRLE1BQU0sQ0FBQztZQUFFTixPQUFPO2dCQUFFQyxJQUFJTjtZQUFVO1FBQUUsR0FBR1ksS0FBSyxDQUFDLEtBQU87UUFDbkUsT0FBTztJQUNUO0lBRUEsT0FBTztRQUNMTixJQUFJSCxRQUFRSyxJQUFJLENBQUNGLEVBQUU7UUFDbkJPLFlBQVlWLFFBQVFLLElBQUksQ0FBQ0ssVUFBVTtRQUNuQ0MsTUFBTVgsUUFBUUssSUFBSSxDQUFDTSxJQUFJO1FBQ3ZCQyxNQUFNWixRQUFRSyxJQUFJLENBQUNPLElBQUk7UUFDdkJDLFFBQVFiLFFBQVFLLElBQUksQ0FBQ1EsTUFBTTtJQUM3QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktdHJhaW5pbmctcG9ydGFsLy4vc3JjL2xpYi9zZXNzaW9uLnRzPzhkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4vZGJcIjtcblxuZXhwb3J0IGNvbnN0IFNFU1NJT05fQ09PS0lFID0gXCJzaWRcIjtcbmV4cG9ydCBjb25zdCBTRVNTSU9OX01BWF9BR0UgPSA2MCAqIDYwICogMjQ7IC8vIDI0IGhvdXJzIGluIHNlY29uZHNcblxuZXhwb3J0IHR5cGUgU2Vzc2lvblVzZXIgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGV4dGVybmFsSWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG4gIHRlYW1JZDogc3RyaW5nO1xufTtcblxuLyoqIFJlYWQgdGhlIGN1cnJlbnQgc2Vzc2lvbiBmcm9tIHRoZSBjb29raWUgYW5kIHJldHVybiB0aGUgdXNlciwgb3IgbnVsbC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uVXNlcigpOiBQcm9taXNlPFNlc3Npb25Vc2VyIHwgbnVsbD4ge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKTtcbiAgY29uc3Qgc2Vzc2lvbklkID0gY29va2llU3RvcmUuZ2V0KFNFU1NJT05fQ09PS0lFKT8udmFsdWU7XG4gIGlmICghc2Vzc2lvbklkKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZGIuc2Vzc2lvbi5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2Vzc2lvbklkIH0sXG4gICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXG4gIH0pO1xuXG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIG51bGw7XG4gIGlmIChzZXNzaW9uLmV4cGlyZXNBdCAmJiBzZXNzaW9uLmV4cGlyZXNBdCA8IG5ldyBEYXRlKCkpIHtcbiAgICBhd2FpdCBkYi5zZXNzaW9uLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBzZXNzaW9uSWQgfSB9KS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgZXh0ZXJuYWxJZDogc2Vzc2lvbi51c2VyLmV4dGVybmFsSWQsXG4gICAgbmFtZTogc2Vzc2lvbi51c2VyLm5hbWUsXG4gICAgcm9sZTogc2Vzc2lvbi51c2VyLnJvbGUsXG4gICAgdGVhbUlkOiBzZXNzaW9uLnVzZXIudGVhbUlkLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJkYiIsIlNFU1NJT05fQ09PS0lFIiwiU0VTU0lPTl9NQVhfQUdFIiwiZ2V0U2Vzc2lvblVzZXIiLCJjb29raWVTdG9yZSIsInNlc3Npb25JZCIsImdldCIsInZhbHVlIiwic2Vzc2lvbiIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwiaW5jbHVkZSIsInVzZXIiLCJleHBpcmVzQXQiLCJEYXRlIiwiZGVsZXRlIiwiY2F0Y2giLCJleHRlcm5hbElkIiwibmFtZSIsInJvbGUiLCJ0ZWFtSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/session.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2Fcharleskr%2FDesktop%2FXBO%2FAI-Plateforme%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcharleskr%2FDesktop%2FXBO%2FAI-Plateforme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();