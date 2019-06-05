var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var studentC = /** @class */ (function () {
    function studentC() {
        this.name = "srinivas";
        this.email = "anushamanda@gmail.com";
        this.phone = 7330919021;
    }
    studentC.prototype.getData = function () {
        console.log(this.name, this.email, this.phone);
    };
    return studentC;
}());
var studentDataC = /** @class */ (function (_super) {
    __extends(studentDataC, _super);
    function studentDataC() {
        var _this = _super.call(this) || this;
        _this.adress = "hyderabad";
        return _this;
    }
    studentDataC.prototype.getFullData = function () {
        console.log(this.adress);
        this.getData();
    };
    return studentDataC;
}(studentC));
var student = new studentDataC();
student.getFullData();
