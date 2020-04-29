export default class Signup {
    constructor() {
        this._boxSignup = document.createElement("div");
        this.inputName = document.createElement("input");
        this.inputName.setAttribute("placeholder", "Enter your Name")
        this.inputSurname = document.createElement("input");
        this.inputSurname.setAttribute("placeholder", "Enter your Surname")
        this.inputEmail = document.createElement("input");
        this.inputEmail.setAttribute("type", "email");
        this.inputEmail.setAttribute("placeholder", "Enter your email")
        this.inputPassword = document.createElement("input");
        this.inputPassword.setAttribute("type", "password");
        this.inputPassword.setAttribute("placeholder", "Enter your password")
        this.signupButton = document.createElement("button");
        this.signupButton.innerHTML = "Sign Up"
        this._boxSignup.append(this.inputName);
        this._boxSignup.append(this.inputSurname);
        this._boxSignup.append(this.inputEmail);
        this._boxSignup.append(this.inputPassword);
        this._boxSignup.append(this.signupButton);

    }
    get html() {
        return this._boxSignup;
    }
}