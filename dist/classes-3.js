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
// *** Define a class of Vehicle ***
var Vehicle = /** @class */ (function () {
    function Vehicle(vehicleName, passengers) {
        this.name = vehicleName;
        this.numPassengers = passengers;
        this.hornSound = 'beep-beep';
    }
    Vehicle.prototype.honk = function () {
        console.log(this.name + " says " + this.hornSound);
    };
    Vehicle.prototype.turboBoost = function (boostLevel) {
        console.log("My " + this.name + " is turbo boosted by " + boostLevel + " bars!");
    };
    return Vehicle;
}());
// *** Extend a vehicle ***
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(vehicleName, passengers) {
        var _this = _super.call(this, vehicleName, passengers) || this;
        _this.hornSound = 'HONK-HONK!'; // overrides Vehicle's hornSound
        return _this;
    }
    Truck.prototype.haul = function (payload) {
        console.log("hauling a bunch of " + payload);
    };
    return Truck;
}(Vehicle));
// *** Instantiate a Vehicle ***
var hondaCivic = new Vehicle('honda civic', 4);
hondaCivic.honk();
hondaCivic.turboBoost(16);
// hondaCivic.haul('azz');
// *** Instantiate a Truck ***
var fordF150 = new Truck('ford F150', 3);
fordF150.honk();
fordF150.turboBoost(5);
fordF150.haul('dirt');
