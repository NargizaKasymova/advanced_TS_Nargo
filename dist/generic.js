"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: "Nargo" }, { job: "Deva" });
console.log(merged);
console.log(merged.name);
const merged2 = mergeObjects({ model: "kjfd" }, { kind: "good" });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Asel',
    job: 'Accountant',
    age: 23
};
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
const numbers = new Collection([1, 2, 3, 4]);
numbers.add(11);
numbers.remove(1);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['mazda', 'nexia'];
const ford = {
    model: 'ford',
    year: 2021
};
//# sourceMappingURL=generic.js.map