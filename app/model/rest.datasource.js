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
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
const PROTOCOL = "http";
const PORT = 3500;
let RestDataSource = class RestDataSource {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    authenticate(user, pass) {
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(response => {
            let r = response.json();
            this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    }
    getProducts() {
        return this.sendRequest(http_1.RequestMethod.Get, "products");
    }
    saveProduct(product) {
        return this.sendRequest(http_1.RequestMethod.Post, "products", product, true);
    }
    updateProduct(product) {
        return this.sendRequest(http_1.RequestMethod.Put, `products/${product.id}`, product, true);
    }
    deleteProduct(id) {
        return this.sendRequest(http_1.RequestMethod.Delete, `products/${id}`, null, true);
    }
    getOrders() {
        return this.sendRequest(http_1.RequestMethod.Get, "orders", null, true);
    }
    deleteOrder(id) {
        return this.sendRequest(http_1.RequestMethod.Delete, `orders/${id}`, null, true);
    }
    updateOrder(order) {
        return this.sendRequest(http_1.RequestMethod.Put, `orders/${order.id}`, order, true);
    }
    saveOrder(order) {
        return this.sendRequest(http_1.RequestMethod.Post, "orders", order);
    }
    sendRequest(verb, url, body, auth = false) {
        let request = new http_1.Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }
};
RestDataSource = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], RestDataSource);
exports.RestDataSource = RestDataSource;
