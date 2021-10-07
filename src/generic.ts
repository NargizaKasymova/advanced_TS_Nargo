// const cars1: string[] = ['mitsu', 'toyota']
// const cars2: Array<string> = ['ford', 'mazda']

// const promise = new Promise<string>(resolve => {
//     setTimeout( () => {
//         resolve('promise resolved')
//     }, 2000)
// })

// promise.then(data => {
//     console.log(data.toLocaleLowerCase().trim().toUpperCase())
// })

// const promise1: Promise<number> = new Promise(resolve => {
//     setTimeout( () => {
//         resolve(33)
//     }, 2000)
// })

// promise1.then(data => {
//     console.log(data.toFixed())
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}
const merged = mergeObjects({name: "Nargo"}, {job: "Deva"})
console.log(merged)
console.log(merged.name)
const merged2 = mergeObjects({model: "kjfd"}, {kind: "good"})

// const merged3 = mergeObjects({a: "aaa"}, "bbb")
// console.log(merged3)

interface ILength {
    length: number
}

function withCount <T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    } 
}

// console.log(withCount("Привет TS"))
// console.log(withCount(['I', 'am', 'array']))
// console.log(withCount(20))
// console.log(withCount({length: 20}))

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
const person = {
    name: 'Asel',
    job: 'Accountant',
    age: 23
}
// //person.age: number = 23
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'job'))
// console.log(getObjectValue(person, "age"))

class Collection<T> {
    
    constructor(private _items: T[] = []) {}
    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
    
}

const strings = new Collection(['I', 'am', 'strings'])
strings.add('!')
strings.remove('am')
// console.log(strings.items)

const numbers = new Collection([1, 2, 3, 4])
numbers.add(11)
numbers.remove(1)
// console.log(numbers.items)

// const objs = new Collection([{a: 'ya'}, {b: 'a'}])
// objs.remove({b: 'a'})
// console.log(objs.items)

interface Car {
    model: string,
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial <Car> = {}
    if(model.length > 3) {
        car.model = model
    }
    if(year > 2000) {
        car.year = year
    }

    return car as Car
}

const cars: Readonly< Array<string>> = ['mazda', 'nexia']
// cars.shift()
// cars[1]

const ford: Readonly<Car> = {
    model: 'ford',
    year: 2021
}
// ford.model = "ferrari"