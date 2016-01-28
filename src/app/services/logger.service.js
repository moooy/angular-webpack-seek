var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var LoggerService = (function () {
    function LoggerService() {
        this.DEBUG = "[DEBUG]";
        this.INFO = "[INFO]";
        this.WARN = "[WARN]";
        this.ERROR = "[ERROR]";
    }
    LoggerService.prototype.generateMessage = function (message, levelInfo) {
        var messages = [];
        messages.push(levelInfo);
        messages.push(message);
        return messages.join(" ");
    };
    LoggerService.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.debug(this.generateMessage(message, this.DEBUG), optionalParams);
    };
    LoggerService.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.info(this.generateMessage(message, this.INFO), optionalParams);
    };
    LoggerService.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.warn(this.generateMessage(message, this.WARN), optionalParams);
    };
    LoggerService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.error(this.generateMessage(message, this.ERROR), optionalParams);
    };
    LoggerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoggerService);
    return LoggerService;
})();
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map