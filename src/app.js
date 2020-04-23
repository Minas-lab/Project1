import ToDoList from "./ToDoList"

export default class App {
    constructor() {
        const todo = new ToDoList()
        this._box = todo.html
    }
    get html() {
        return this._box
    }
}










// export let admin = {}

// let root = document.getElementById("root")
// let btn = document.createElement("button")
// let inp = document.createElement("input")
// admin.inp = inp
// admin.btn = btn
// btn.innerText = "Add"
// root.appendChild(inp);
// root.appendChild(btn);
// admin.createDiv = function() {

//     let div = document.createElement("div");
//     let p = document.createElement("p");
//     let removeBtn = document.createElement("button");
//     let editBtn = document.createElement("button");
//     btn.after(div);
//     div.appendChild(p);
//     div.appendChild(editBtn);
//     div.appendChild(removeBtn);
//     p.innerText = admin.inp.value;
//     editBtn.innerText = "Edit";
//     removeBtn.innerText = "Remove";
//     let inpEdit = document.createElement("input")
//     editBtn.addEventListener("click", function() {
//         let pEdit = this.parentElement.querySelector("p")
//         pEdit.style.display = "none"
//         editBtn.style.display = "none"
//         this.parentElement.prepend(inpEdit)
//         inpEdit.value = pEdit.innerText
//         let saveBtn = document.createElement("button");
//         saveBtn.innerText = "Save"
//         div.appendChild(saveBtn)
//         saveBtn.addEventListener("click", function() {
//             inpEdit.style.display = "none"
//             saveBtn.style.display = "none"
//             pEdit.style.display = "block"
//             editBtn.style.display = "block"
//             pEdit.innerHTML = inpEdit.value
//         })
//     });
//     admin.inp.value = "";
//     removeBtn.addEventListener("click", function() {
//         div.remove();
//     });
// }

// export class ToDo {
//     constructor() {
//         this.root = document.getElementById("root")
//         this.btn = document.createElement("button")
//         this.inp = document.createElement("input")
//         this.inpEdit = document.createElement("input")
//         this.drowInp()

//     }
//     drowInp() {
//         this.btn.innerText = "Add"
//         this.root.appendChild(this.inp);
//         this.root.appendChild(this.btn);
//         let createDiv = this.drowDiv.bind(this)
//         this.btn.addEventListener("click", createDiv)
//     }
//     drowDiv() {
//         let div = document.createElement("div");
//         let p = document.createElement("p");
//         let removeBtn = document.createElement("button");
//         let editBtn = document.createElement("button");
//         this.btn.after(div);
//         div.appendChild(p);
//         div.appendChild(editBtn);
//         div.appendChild(removeBtn);
//         p.innerText = this.inp.value;
//         editBtn.innerText = "Edit";
//         const editBtnFunc = this.editBtnFunction.bind(this)
//         editBtn.addEventListener('click', editBtnFunc)
//             //     let pEdit = this.parentElement.querySelector("p")
//             //     pEdit.style.display = "none"
//             //     editBtn.style.display = "none"
//             //     this.parentElement.prepend(this.inpEdit)
//             //     inpEdit.value = pEdit.innerText
//             //     let saveBtn = document.createElement("button");
//             //     saveBtn.innerText = "Save"
//             //     div.appendChild(saveBtn)
//             // })
//         removeBtn.innerText = "Remove";
//         removeBtn.addEventListener("click", () => div.remove())
//         this.inp.value = ""
//     }
//     editBtnFunction() {
//         console.log(window.querySelector("p"))
//         let pEdit = this.querySelector("p")
//         pEdit.style.display = "none"
//         editBtn.style.display = "none"
//         this.parentElement.prepend(this.inpEdit)
//         inpEdit.value = pEdit.innerText
//         let saveBtn = document.createElement("button");
//         saveBtn.innerText = "Save"
//         div.appendChild(saveBtn)
//     }
//     saveBtn() {
//         inpEdit.style.display = "none"
//         saveBtn.style.display = "none"
//         pEdit.style.display = "block"
//         editBtn.style.display = "block"
//         pEdit.innerHTML = inpEdit.value
//     }
// }