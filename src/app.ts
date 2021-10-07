// console.log("App.ts!")

class Person {
    constructor(private name: string) {}
}

const max = new Person('Maxim')

//demo comment

const btn = document.querySelector("#btn")!

btn.addEventListener('click', () => {
    console.log('Btn clicked')
})
// const map = new Map()
let anyFlag
function logInfo(data: string) {
    console.log(data)
    anyflag = true
    console.log(anyFlag)
}
logInfo('I am log string')