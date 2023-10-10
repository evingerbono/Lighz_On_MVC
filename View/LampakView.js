import LampaElem from "./LampaElemView.js";
class Lampak {
    constructor() {
        for (let index = 1; index <= 9; index++) {
            this.LAMPA = new LampaElem($(".jatekM"), index);
        } 
    }
}
export default Lampak;