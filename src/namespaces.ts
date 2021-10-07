// console.log('hi')

/// <reference path="formNameSpace.ts"/>

namespace Form {

class MyForm {
    private type: FormType = "inline"
    private state: FormState = 'active'

    constructor(public email: string) {

    }
    getInfo(): FormInfo {
        return {
            type: this.type,
            state: this.state
        }
    }
}

export const myForm = new MyForm('nargokasymova@mail.ru')
// console.log(myForm)
}
console.log(Form.myForm)