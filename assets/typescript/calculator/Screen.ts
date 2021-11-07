export default class Screen {
  constructor(
    private element: HTMLDivElement | null = document.querySelector("#values")
  ) {
    this.value = "0";
  }

  set value(data: string) {
    if (data.toString().length > 12) {
      data = "Error";
    }
    if (this.element) {
      this.element.innerHTML = data.replace(".", ",");
    }
  }

  get value(): string {
    return this.element ? this.element.innerHTML : "0";
  }
}
