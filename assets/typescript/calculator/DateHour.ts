export default class DateHour {
  constructor(
    private elementDate: HTMLDivElement | null = document.querySelector(
      "#datetime .calendarDate"
    ),
    private elementHour: HTMLTimeElement | null = document.querySelector(
      "#datetime time"
    )
  ) {
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

  set date(data: string) {
    if (this.elementDate) {
      this.elementDate.innerHTML = data;
    }
  }

  set hour(data: string) {
    if (this.elementHour) {
      this.elementHour.innerHTML = data;
    }
  }
}
