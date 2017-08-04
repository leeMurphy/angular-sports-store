"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const rest_datasource_1 = require("./rest.datasource");
require("rxjs/add/operator/map");
let AuthService = class AuthService {
    constructor(datasource) {
        this.datasource = datasource;
    }
    authenticate(username, password) {
        return this.datasource.authenticate(username, password);
    }
    get authenticated() {
        return this.datasource.auth_token != null;
    }
    clear() {
        this.datasource.auth_token = null;
    }
};
AuthService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
], AuthService);
exports.AuthService = AuthService;
