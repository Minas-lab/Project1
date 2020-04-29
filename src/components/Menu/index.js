export default class Menu {
    constructor() {
        // this.todo = this.todo.call(this)
        // this._boxSignup;
        this._boxMenu = document.createElement("div")
        this.todoButton = document.createElement("button")
            // this.todoButton.addEventListener("click", this.todo)
        this.todoButton.innerText = "Todo List"
        this.signupButton = document.createElement("button")
        this.signupButton.innerText = "Sign up Page"
            // this.signupButton.addEventListener("click", this.signup)
        this._boxMenu.append(this.todoButton)
        this._boxMenu.append(this.signupButton)
    }


    get html() {
        return this._boxMenu
    }
}