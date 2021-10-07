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

function getObjectValue(<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
const person = {
    name: 'Nargo',
    job: 'Deva'
}
console.log(getObjectValue(person, 'name'))