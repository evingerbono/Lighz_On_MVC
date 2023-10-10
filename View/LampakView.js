import LampaElem from "./LampaElemView.js";
class Lampak {
    constructor(n) {
        for (let index = 1; index <= n; index++) {
            this.LAMPA = new LampaElem($(".jatekM"), index);
        } 
    }
}
export default Lampak;