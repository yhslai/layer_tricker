/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'photoshop'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

console.log("Eyedropper Switcher Loaded!");
var app = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'photoshop'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var batchPlay = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'photoshop'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var SAMPLE_SHEET = {
    ALL_LAYERS: 0,
    CURRENT_LAYER: 1,
};
function getCurrentToolOptions() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, batchPlay([
                        {
                            "_obj": "get",
                            "_target": [
                                {
                                    "_property": "currentToolOptions"
                                },
                                {
                                    "_ref": "application",
                                    "_enum": "ordinal",
                                    "_value": "targetEnum"
                                }
                            ],
                            "_options": {
                                "dialogOptions": "dontDisplay"
                            }
                        }
                    ], {
                        "synchronousExecution": false,
                    })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result[0].currentToolOptions];
            }
        });
    });
}
var listener = function (event, descriptor) { return __awaiter(void 0, void 0, void 0, function () {
    var doc, options, target, layers, layer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                doc = app.activeDocument;
                return [4 /*yield*/, getCurrentToolOptions()];
            case 1:
                options = _a.sent();
                console.log(options);
                target = descriptor._target;
                if (target.length == 1 && target[0]._ref == 'layer') {
                    layers = doc.activeLayers;
                    if (layers.length == 1) {
                        layer = layers[0];
                        switch (layer.blendMode) {
                            case 'multiply':
                            case 'linearDodge':
                            case 'overlay':
                            case 'softLight':
                            case 'hardLight':
                                break;
                            default:
                        }
                        // console.log(layer.blendMode);
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'photoshop'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(["select"], listener);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFHbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBRTNDLElBQU0sR0FBRyxHQUFHLHdJQUFhLENBQUM7QUFDMUIsSUFBTSxTQUFTLEdBQUcsd0lBQTBCLENBQUM7QUFHN0MsSUFBTSxZQUFZLEdBQUc7SUFDakIsVUFBVSxFQUFFLENBQUM7SUFDYixhQUFhLEVBQUUsQ0FBQztDQUNuQixDQUFDO0FBRUYsU0FBZSxxQkFBcUI7Ozs7O3dCQUNqQixxQkFBTSxTQUFTLENBQzFCO3dCQUNJOzRCQUNJLE1BQU0sRUFBRSxLQUFLOzRCQUNiLFNBQVMsRUFBRTtnQ0FDUDtvQ0FDSSxXQUFXLEVBQUUsb0JBQW9CO2lDQUNwQztnQ0FDRDtvQ0FDSSxNQUFNLEVBQUUsYUFBYTtvQ0FDckIsT0FBTyxFQUFFLFNBQVM7b0NBQ2xCLFFBQVEsRUFBRSxZQUFZO2lDQUN6Qjs2QkFDSjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1IsZUFBZSxFQUFFLGFBQWE7NkJBQ2pDO3lCQUNKO3FCQUNKLEVBQUU7d0JBQ0gsc0JBQXNCLEVBQUUsS0FBSztxQkFDRCxDQUFDOztvQkFwQjNCLE1BQU0sR0FBRyxTQW9Ca0I7b0JBQ2pDLHNCQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBQzs7OztDQUN2QztBQUdELElBQUksUUFBUSxHQUFHLFVBQU8sS0FBVSxFQUFFLFVBQTRCOzs7OztnQkFDdEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7Z0JBRWYscUJBQU0scUJBQXFCLEVBQUU7O2dCQUF2QyxPQUFPLEdBQUcsU0FBNkI7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBR2pCLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUNoQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO29CQUU3QyxNQUFNLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDOUIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDaEIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsUUFBUSxLQUFLLENBQUMsU0FBUyxFQUFFOzRCQUNyQixLQUFLLFVBQVUsQ0FBQzs0QkFDaEIsS0FBSyxhQUFhLENBQUM7NEJBQ25CLEtBQUssU0FBUyxDQUFDOzRCQUNmLEtBQUssV0FBVyxDQUFDOzRCQUNqQixLQUFLLFdBQVc7Z0NBQ1osTUFBTTs0QkFDVixRQUFRO3lCQUNYO3dCQUNELGdDQUFnQztxQkFDbkM7aUJBQ0o7Ozs7S0FDSjtBQUNELHdJQUF3QyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91eHAtdGVtcGxhdGUtZGVmYXVsdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3V4cC10ZW1wbGF0ZS1kZWZhdWx0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91eHAtdGVtcGxhdGUtZGVmYXVsdC1zdGFydGVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGhvdG9zaG9wIGZyb20gJ3Bob3Rvc2hvcCc7XHJcbiAgICBcclxuXHJcbmNvbnNvbGUubG9nKFwiRXllZHJvcHBlciBTd2l0Y2hlciBMb2FkZWQhXCIpO1xyXG5cclxuY29uc3QgYXBwID0gcGhvdG9zaG9wLmFwcDtcclxuY29uc3QgYmF0Y2hQbGF5ID0gcGhvdG9zaG9wLmFjdGlvbi5iYXRjaFBsYXk7XHJcblxyXG5cclxuY29uc3QgU0FNUExFX1NIRUVUID0ge1xyXG4gICAgQUxMX0xBWUVSUzogMCxcclxuICAgIENVUlJFTlRfTEFZRVI6IDEsXHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VG9vbE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBiYXRjaFBsYXkoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIl9vYmpcIjogXCJnZXRcIixcclxuICAgICAgICAgICAgICAgIFwiX3RhcmdldFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9wcm9wZXJ0eVwiOiBcImN1cnJlbnRUb29sT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX3JlZlwiOiBcImFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX2VudW1cIjogXCJvcmRpbmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCI6IFwidGFyZ2V0RW51bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiX29wdGlvbnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlhbG9nT3B0aW9uc1wiOiBcImRvbnREaXNwbGF5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sIHtcclxuICAgICAgICBcInN5bmNocm9ub3VzRXhlY3V0aW9uXCI6IGZhbHNlLFxyXG4gICAgICAgIH0gYXMgQmF0Y2hQbGF5Q29tbWFuZE9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdFswXS5jdXJyZW50VG9vbE9wdGlvbnM7XHJcbn1cclxuXHJcblxyXG52YXIgbGlzdGVuZXIgPSBhc3luYyAoZXZlbnQ6IGFueSwgZGVzY3JpcHRvcjogQWN0aW9uRGVzY3JpcHRvcikgPT4ge1xyXG4gICAgbGV0IGRvYyA9IGFwcC5hY3RpdmVEb2N1bWVudDtcclxuICAgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBhd2FpdCBnZXRDdXJyZW50VG9vbE9wdGlvbnMoKTtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIHNldEV5ZWRyb3BwZXJTYW1wbGUoKTtcclxuICAgIGxldCB0YXJnZXQgPSBkZXNjcmlwdG9yLl90YXJnZXQ7XHJcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PSAxICYmIHRhcmdldFswXS5fcmVmID09ICdsYXllcicpIHtcclxuXHJcbiAgICAgICAgbGV0IGxheWVycyA9IGRvYy5hY3RpdmVMYXllcnM7XHJcbiAgICAgICAgaWYgKGxheWVycy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSBsYXllcnNbMF07XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGF5ZXIuYmxlbmRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtdWx0aXBseSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5lYXJEb2RnZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdvdmVybGF5JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NvZnRMaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdoYXJkTGlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGF5ZXIuYmxlbmRNb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxucGhvdG9zaG9wLmFjdGlvbi5hZGROb3RpZmljYXRpb25MaXN0ZW5lcihbXCJzZWxlY3RcIl0sIGxpc3RlbmVyKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9