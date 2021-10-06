"use strict";
// console.log("App.ts!")
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person('Maxim');
const btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    console.log('Btn clicked');
});
// const map = new Map()
//# sourceMappingURL=app.js.map