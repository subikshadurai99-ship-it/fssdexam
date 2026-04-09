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
// Base Patient Class
var Patient = /** @class */ (function () {
    function Patient(id, name, diagnosis, type) {
        this.patientID = id;
        this.name = name;
        this.diagnosis = diagnosis;
        this.patientType = type;
    }
    Patient.prototype.admit = function () {
        console.log(this.name, "is admitted");
    };
    Patient.prototype.discharge = function () {
        console.log(this.name, "is discharged");
    };
    Patient.prototype.generateBill = function () {
        return 0;
    };
    return Patient;
}());
// InPatient class
var InPatient = /** @class */ (function (_super) {
    __extends(InPatient, _super);
    function InPatient(id, name, diagnosis, roomCharge, days) {
        var _this = _super.call(this, id, name, diagnosis, "InPatient") || this;
        _this.roomCharge = roomCharge;
        _this.days = days;
        return _this;
    }
    InPatient.prototype.generateBill = function () {
        return this.roomCharge * this.days;
    };
    return InPatient;
}(Patient));
// OutPatient class
var OutPatient = /** @class */ (function (_super) {
    __extends(OutPatient, _super);
    function OutPatient(id, name, diagnosis, fee) {
        var _this = _super.call(this, id, name, diagnosis, "OutPatient") || this;
        _this.consultationFee = fee;
        return _this;
    }
    OutPatient.prototype.generateBill = function () {
        return this.consultationFee;
    };
    return OutPatient;
}(Patient));
// Emergency Patient class
var EmergencyPatient = /** @class */ (function (_super) {
    __extends(EmergencyPatient, _super);
    function EmergencyPatient(id, name, diagnosis, charge) {
        var _this = _super.call(this, id, name, diagnosis, "Emergency") || this;
        _this.emergencyCharge = charge;
        return _this;
    }
    EmergencyPatient.prototype.generateBill = function () {
        return this.emergencyCharge;
    };
    return EmergencyPatient;
}(Patient));
// Creating patients
var p1 = new InPatient(101, "Ravi", "Surgery", 5000, 3);
var p2 = new OutPatient(102, "Meena", "Fever", 800);
var p3 = new EmergencyPatient(103, "Kumar", "Accident", 7000);
// Operations
p1.admit();
console.log("Bill:", p1.generateBill());
p1.discharge();
p2.admit();
console.log("Bill:", p2.generateBill());
p2.discharge();
p3.admit();
console.log("Bill:", p3.generateBill());
p3.discharge();
