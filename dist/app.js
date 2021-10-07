"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person('Maxim');
const btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
    console.log('Btn clicked');
});
function logInfo(data) {
    console.log(data);
}
logInfo('I am log string');
//# sourceMappingURL=app.js.map