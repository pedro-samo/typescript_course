export default class DateHour {
    constructor(elementDate = document.querySelector("#datetime .calendarDate"), elementHour = document.querySelector("#datetime time")) {
        this.elementDate = elementDate;
        this.elementHour = elementHour;
        this.render();
        setInterval(() => this.render(), 1000);
    }
    render() {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleDateString("pt-BR", {
            month: "long",
        });
        const year = currentDate.getFullYear();
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes().toString().padStart(2, "0");
        const twoDots = currentDate.getSeconds() % 2 === 0 ? ":" : " ";
        this.date = `${day} ${month} ${year}`;
        this.hour = `${hour}${twoDots}${minutes}`;
    }
    set date(data) {
        if (this.elementDate) {
            this.elementDate.innerHTML = data;
        }
    }
    set hour(data) {
        if (this.elementHour) {
            this.elementHour.innerHTML = data;
        }
    }
}
//# sourceMappingURL=DateHour.js.map