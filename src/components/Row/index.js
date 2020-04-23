export default class Row {
    constructor(value, removeCallback) {
        this.value = value
        this.deleted = false
        this.remove = this.remove.bind(this, removeCallback);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this)
        this._box = document.createElement("div");
        this.paragraf = document.createElement("p")
        this.paragraf.innerText = this.value
        this.editBox = document.createElement("input")
        console.log(this)
        this._box.append(this.editBox)
        this._box.append(this.paragraf)
        this.removeButton = document.createElement("button");
        this.editButton = document.createElement("button");
        this.editButton.innerText = "Edit"
        this.editButton.addEventListener("click", this.edit);

        this._box.append(this.editButton)
        this.saveButton = document.createElement("button")
        this.saveButton.innerText = "Save"
        this.saveButton.addEventListener("click", this.save)

        this.removeButton.innerText = "Remove"
        this.removeButton.addEventListener("click", this.remove);
        this._box.append(this.removeButton)


    }

    remove(removeCallback, event) {
        console.log(arguments)
        console.log(removeCallback)
        this.deleted = true
        console.log(this)
        this._box.remove()
        removeCallback && removeCallback(this.deleted)
    }
    edit() {
        this._box.append(this.saveButton)
        this.editBox.style.display = "inline-block"
        this.paragraf.style.display = "none"
        this.editBox.value = this.paragraf.innerText
        this.editButton.style.display = "none"
        this.saveButton.style.display = "inline-block"
    }
    save() {
        this.paragraf.style.display = "block"
        this.editButton.style.display = "inline-block"
        this.paragraf.innerText = this.editBox.value
        this.editBox.style.display = "none"
        this.saveButton.style.display = "none"
    }
    get html() {
        return this._box ? this._box : null
    }
}