import ToDoList from "./ToDoList"
import Signup from "./components/Signup"
import Menu from "./components/Menu"
export default class App {
    constructor() {
        const todo = new ToDoList()
        this._box = todo.html
        const signup = new Signup()
        this._boxSignup = signup.html
        const menu = new Menu()
        this.todoEvent = this.todoEvent.bind(this)
        this.signupEvent = this.signupEvent.bind(this)
        console.log(menu)
        menu.todoButton.addEventListener("click", this.todoEvent)
            // menu.signupEvent = menu.signupEvent.call(this)
        menu.signupButton.addEventListener("click", this.signupEvent)

        this._boxMenu = menu.html

    }
    todoEvent() {
        this._box.style.display = "block"
        this._boxSignup.style.display = "none"

    }
    signupEvent() {
        console.log(this)
        this._box.style.display = "none"
        this._boxSignup.style.display = "block"

    }
    get html() {
        return this._box
    }
    get signupHtml() {
        return this._boxSignup;
    }
    get menuHtml() {
        return this._boxMenu
    }
}