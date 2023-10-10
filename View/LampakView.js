import LampaElem from "./LampaElemView.js";
class Lampak {
    constructor() {
        for (let index = 0; index < 9; index++) {
            this.Lampak = new LampaElem($(".jatekM"), index);
        }
    }
}
export default Lampak;