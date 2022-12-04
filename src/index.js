import "./styles.css";

const waw = {
  sto: 0,
  sss: 2
};

class lol00 {
  constructor(num, timeElem) {
    this.num = num;
    this.timeElem = timeElem;
  }

  get_time() {
    this.timeElem = this.timeElem
      .map((e) => String(e))
      .map((e) => (e.length < 2 ? "0" + e : e));
    return `${this.timeElem[0]}:${this.timeElem[1]}.${this.timeElem[2]}`;
  }

  result(sto) {
    this.results = [
      `${this.num}開始${this.get_time()}`,
      `　終了${this.get_time()}`,
      `　経過${this.get_time}`
    ];
    this.create_p = document.createElement("p");
    this.create_p.classList("Message");
    this.create_p.innerText = this.results[sto];
    this.create_div = document.getElementById("massageList");
    this.create_div.append(this.create_p);
  }
  disp_log() {}
}
