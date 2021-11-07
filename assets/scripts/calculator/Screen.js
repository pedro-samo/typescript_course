export default class Screen {
    constructor(element = document.querySelector("#values")) {
        this.element = element;
        this.value = "0";
    }
    set value(data) {
        if (data.toString().length > 12) {
            data = "Error";
        }
        if (this.element) {
            this.element.innerHTML = data.replace(".", ",");
        }
    }
    get value() {
        return this.element ? this.element.innerHTML : "0";
    }
}
//# sourceMappingURL=Screen.js.map