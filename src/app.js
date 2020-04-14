export let admin = {}
admin.index = 0;
admin.editInpVal;
admin.updateIndex;

let root = document.getElementById("root")
let btn = document.createElement("button")
let inp = document.createElement("input")
admin.inp = inp
admin.btn = btn
btn.innerText = "Add"
root.appendChild(inp);
root.appendChild(btn);

admin.createDiv = function() {
    let div = document.createElement("div");
    admin.index++;
    let p = document.createElement("p");
    p.setAttribute("pName", admin.index)
    let removeBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    btn.after(div);
    div.appendChild(p);
    div.appendChild(editBtn);
    div.appendChild(removeBtn);
    p.innerText = admin.inp.value;
    editBtn.innerText = "Edit";
    removeBtn.innerText = "Remove";
    editBtn.addEventListener("click", function() {
        admin.editInpVal = this.parentElement.firstChild.innerText;
        admin.inp.value = admin.editInpVal;
        admin.updateIndex = this.parentElement.firstChild.getAttribute("pName")
    });
    admin.inp.value = "";
    removeBtn.addEventListener("click", function() {
        div.remove();
    });
}