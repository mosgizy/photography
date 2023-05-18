'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
exports.__esModule = true;
var link_1 = require("next/link");
var Cart_1 = require("../components/Cart");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var hooks_1 = require("../../../../store/hooks");
var formSlice_1 = require("../../../../store/slice/formSlice");
var react_2 = require("next-auth/react");
var react_3 = require("react");
var user_1 = require("../../../../store/slice/user");
var cart_1 = require("../../../../store/slice/cart");
var toast_1 = require("../../../../hooks/toast");
var Page = function () {
    var _a;
    var _b = react_1.useReducer(function (state, action) {
        return __assign(__assign({}, state), action);
    }, {
        email: '',
        name: '',
        walletType: '',
        city: '',
        country: '',
        postalCode: 0,
        phoneNumber: 0,
        getUpdate: false
    }), formData = _b[0], updateFormData = _b[1];
    var _c = react_2.useSession(), session = _c.data, status = _c.status;
    var push = navigation_1.useRouter().push;
    var dispatch = hooks_1.useAppDispatch();
    var items = hooks_1.useAppSelector(function (store) { return store.cart; }).items;
    var modal = hooks_1.useAppSelector(function (state) { return state.user; }).modal;
    var handleCheckout = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newItems, res, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newItems = items.map(function (item) {
                        return { price: item.id, quantity: item.quantity };
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('/api/payment', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newItems)
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _a.sent();
                    setStripeUrl(data);
                    push(data);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleUpadateFormdata = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            dispatch(formSlice_1.getFormData(formData));
            status === 'authenticated' && handleCheckout();
            status === 'unauthenticated' && dispatch(user_1.setModal(true));
            return [2 /*return*/];
        });
    }); };
    var handleAutoFill = function () {
        updateFormData({
            email: 'johndoes@gmail.com',
            name: 'john doe',
            walletType: 'MetaMask',
            city: 'Lagos',
            country: 'Nigeria',
            postalCode: 116600,
            phoneNumber: 123456789,
            getUpdate: false
        });
    };
    var _d = react_3.useState(''), stripeUrl = _d[0], setStripeUrl = _d[1];
    status === 'authenticated' &&
        session &&
        dispatch(user_1.addUserData(session === null || session === void 0 ? void 0 : session.user));
    var notify = toast_1["default"]("" + (status === 'authenticated' && 'Welcome ' + ((_a = session.user) === null || _a === void 0 ? void 0 : _a.name))).notify;
    react_3.useEffect(function () {
        var func = function () {
            dispatch(cart_1.clearCart());
            if (window) {
                localStorage.clear();
            }
            notify();
            push(stripeUrl);
        };
        status === 'authenticated' && stripeUrl !== '' && func();
    }, [status]);
    react_3.useEffect(function () {
        if ((status !== 'authenticated' &&
            status !== 'loading' &&
            items.length === 0) ||
            items.length === 0) {
            push('/cart');
        }
    }, []);
    return (React.createElement("section", { className: "section" },
        React.createElement("header", { className: "md:hidden" },
            React.createElement("p", { className: "text-fadeText" },
                "Home/ Marketplace/ Cart ",
                React.createElement("span", { className: "text-black" }, "Shipping"))),
        React.createElement("div", { className: "md:flex md:gap-16" },
            React.createElement("div", { className: "md:flex-1" },
                React.createElement("form", { onSubmit: handleUpadateFormdata, className: "mt-6" },
                    React.createElement("div", { className: "input-container" },
                        React.createElement("label", { htmlFor: "email" }, "Your Email"),
                        React.createElement("div", { className: "w-full" },
                            React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: function (e) { return updateFormData({ email: e.target.value }); }, placeholder: "youremail@email.com", className: "input", required: true }),
                            React.createElement("div", { className: "flex gap-2 items-center mt-2" },
                                React.createElement("input", { type: "checkbox", name: "check", 
                                    // value={formData.getUpdate}
                                    onChange: function (e) {
                                        updateFormData({ getUpdate: e.target.checked });
                                    }, className: "rounded-md bg-[#d9d9d9]" }),
                                React.createElement("span", { className: "text-xs" }, "Get updates about new drops & exclusive offers")))),
                    React.createElement("div", { className: "input-container mt-6" },
                        React.createElement("label", { htmlFor: "name" }, "Your full name"),
                        React.createElement("input", { type: "text", name: "name", value: formData.name, onChange: function (e) { return updateFormData({ name: e.target.value }); }, placeholder: "Enter your name", className: "input", required: true })),
                    React.createElement("div", { className: "input-container mt-6" },
                        React.createElement("label", { htmlFor: "choose wallet" }, "Choose a wallet"),
                        React.createElement("select", { name: "choose wallet", onChange: function (e) { return updateFormData({ walletType: e.target.value }); }, value: formData.walletType, className: "input select" },
                            React.createElement("option", { value: "default" }, "default"),
                            React.createElement("option", { value: "MetaMask" }, "MetaMask"),
                            React.createElement("option", { value: "Coinbase" }, "Coinbase"))),
                    React.createElement("div", { className: "input-container mt-6" },
                        React.createElement("label", { htmlFor: "city" }, "City"),
                        React.createElement("select", { name: "city", value: formData.city, onChange: function (e) { return updateFormData({ city: e.target.value }); }, className: "input select" },
                            React.createElement("option", { value: "default" }, "default"),
                            React.createElement("option", { value: "Lagos" }, "Lagos"))),
                    React.createElement("div", { className: "md:flex gap-3" },
                        React.createElement("div", { className: "input-container mt-6 md:flex-1" },
                            React.createElement("label", { htmlFor: "country" }, "Country"),
                            React.createElement("select", { name: "country", value: formData.country, onChange: function (e) { return updateFormData({ country: e.target.value }); }, className: "input select" },
                                React.createElement("option", { value: "default" }, "default"),
                                React.createElement("option", { value: "Nigeria" }, "Nigeria"))),
                        React.createElement("div", { className: "input-container mt-6 md:flex-1" },
                            React.createElement("label", { htmlFor: "postal code" }, "Postal code"),
                            React.createElement("input", { type: "numeric", value: formData.postalCode, onChange: function (e) {
                                    return updateFormData({ postalCode: e.target.value });
                                }, name: "postal code", className: "input" }))),
                    React.createElement("div", { className: "input-container mt-6" },
                        React.createElement("label", { htmlFor: "phone number" }, "Phone number"),
                        React.createElement("input", { type: "numeric", value: formData.phoneNumber, onChange: function (e) {
                                return updateFormData({ phoneNumber: e.target.value });
                            }, name: "phone number", className: "input" })),
                    React.createElement("div", { className: "btn-container" },
                        React.createElement("button", { type: "submit", className: "btn md:w-full" }, "Proceed to payment"),
                        React.createElement(link_1["default"], { href: "cart", className: "link md:hidden" }, "Go back to cart"))),
                React.createElement("div", { className: "btn-container md:mt-0" },
                    React.createElement("button", { onClick: handleAutoFill, className: "btn md:w-full md:mt-6" }, "Auto fill"))),
            React.createElement("div", { className: "hidden md:block md:flex-1" },
                React.createElement(Cart_1["default"], { btn: false })))));
};
exports["default"] = Page;
