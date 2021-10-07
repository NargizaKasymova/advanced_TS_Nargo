// console.log("App.ts!")

class Person {
    constructor(private name: string) {}
}

const max = new Person('Maxim')

//demo comment

// const btn = document.querySelector("#btn")!

// btn.addEventListener('click', () => {
//     console.log('Btn clicked')
// })
// const map = new Map()
let anyFlag
const global = "Message"

function logInfo(data: string, _?: number) {
    console.log(data)
    // const message = "String"
    anyFlag = true
    console.log(anyFlag)
}
logInfo('I am log string')

function multiple(a: number, b: number): number {
    if(a && b) {
        return a * b
    } 
return 0
}