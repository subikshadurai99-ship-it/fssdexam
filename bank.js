"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineTranasaction = exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction(id, amount, types, details) {
        this.id = id;
        this.amount = amount;
        this.types = types;
        this.details = details;
    }
    Transaction.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Amount: ").concat(this.amount, ", Type: ").concat(this.types, ", Date: ").concat(this.details[0], ", Note: ").concat(this.details[1]);
    };
    return Transaction;
}());
exports.Transaction = Transaction;
var OnlineTranasaction = /** @class */ (function (_super) {
    __extends(OnlineTranasaction, _super);
    function OnlineTranasaction(id, amount, types, details, platform) {
        var _this = _super.call(this, id, amount, types, details) || this;
        _this.platform = platform;
        return _this;
    }
    OnlineTranasaction.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Platform: ").concat(this.platform);
    };
    return OnlineTranasaction;
}(Transaction));
exports.OnlineTranasaction = OnlineTranasaction;
