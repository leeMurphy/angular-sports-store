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
const router_1 = require("@angular/router");
const auth_service_1 = require("../model/auth.service");
let AuthComponent = class AuthComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    authenticate(form) {
        if (form.valid) {
            this.auth.authenticate(this.username, this.password)
                .subscribe(response => {
                if (response) {
                    this.router.navigateByUrl("/admin/main");
                }
                this.errorMessage = "Authentication Failed";
            });
        }
        else {
            this.errorMessage = "Form Data Invalid";
        }
    }
};
AuthComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "auth.component.html"
    }), 
    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
], AuthComponent);
exports.AuthComponent = AuthComponent;
