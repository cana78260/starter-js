"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cours_1 = require("./cours");
class MyCours extends cours_1.MyClass {
    constructor() {
        super(...arguments);
        this.myBar = 'barre';
    }
}
