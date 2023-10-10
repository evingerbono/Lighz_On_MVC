
class LampaElem{
    #index;
    constructor(szuloElem, index){
        this.szuloElem=szuloElem;
        this.#index=index;
        this.#htmlOsszerak(this.#index);
        this.elem = $(".lampa:last-child");
        this.pElem = this.elem.children("p:last-child");
        this.elem.on("click", () => {
                this.#esemenyTrigger("kivalaszt");
        });
    }

    #htmlOsszerak(index) {
        let txt = "";
        txt += `<div class="lampa" id=${index}><p></p></div>`;
        this.szuloElem.append(txt);
    }

    setSzin(szin){
        this.pElem.html(szin);
    }
    #esemenyTrigger(esemenyNev){
        const esemeny = new CustomEvent(esemenyNev, { detail: this });
        window.dispatchEvent(esemeny);
    }
}
export default LampaElem;