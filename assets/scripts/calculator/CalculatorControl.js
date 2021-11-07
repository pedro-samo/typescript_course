import DateHour from "./DateHour.js";
import Operation from "./Opetations.js";
import Screen from "./Screen.js";
export default class CalculatorControl {
    constructor(screen = new Screen(), operation = new Operation({
        onCalculate: (result) => (this.screen.value = result),
    })) {
        this.screen = screen;
        this.operation = operation;
        new DateHour();
        this.buttonEvents();
    }
    buttonEvents() {
        const buttons = document.querySelectorAll("#keyboard button");
        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const target = event.target;
                switch (target.id) {
                    case "zero":
                    case "one":
                    case "two":
                    case "three":
                    case "four":
                    case "five":
                    case "six":
                    case "seven":
                    case "eight":
                    case "nine":
                        this.addNumber(Number(target.dataset.value));
                        break;
                    case "plus":
                    case "minus":
                    case "division":
                    case "multiplication":
                        this.addOperator(target.dataset.value);
                        break;
                    case "dot":
                        break;
                    case "clear":
                        break;
                    case "undo":
                        break;
                    case "percentege":
                        break;
                    case "equal":
                        this.calculate();
                        break;
                }
            });
        });
    }
    calculate() {
        this.operation.calculate();
    }
    addOperation(value) {
        this.operation.add(value);
        console.log(this.operation.length);
    }
    addNumber(number) {
        if (isNaN(+this.operation.lastPosition)) {
            this.addOperation(number.toString());
        }
        else {
            number = +(this.operation.lastPosition.toString() + number.toString());
            this.operation.lastPosition = number.toString();
        }
        this.screen.value = number.toString();
    }
    addOperator(operator) {
        if (isNaN(+this.operation.lastPosition)) {
            this.operation.lastPosition = operator;
        }
        else {
            if (this.operation.length === 0) {
                this.addOperation("0");
            }
            this.addOperation(operator);
        }
    }
}
//# sourceMappingURL=CalculatorControl.js.map