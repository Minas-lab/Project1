import { admin } from "./app"
admin.btn.addEventListener("click", handler);
admin.inp.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        handler();
    }
});



function updateP() {
    let ps = document.querySelectorAll("p");
    for (let i = 0; i < ps.length; i++) {
        if (ps[i].getAttribute("pName") == admin.updateIndex) {
            ps[i].innerText = admin.inp.value;
            admin.editInpVal = "";
            admin.inp.value = "";
            admin.updateIndex = ""
        }
    }
}

function handler() {
    if (admin.inp.value) {
        if (admin.editInpVal) {
            updateP();
        } else {
            admin.createDiv();
        }
    }
}