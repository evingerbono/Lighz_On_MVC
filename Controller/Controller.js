import Lampak from "../View/LampakView.js";
import Model from "../Model/Model.js";
class Controller{
    constructor(){
        let meret=9;
        this.LAMPAK=new Lampak(meret);
        this.MODEL=new Model(meret);
        $(window).on("kapcs", (event) => {
            console.log(event.detail);
            this.MODEL.setSzin(event.detail);
            this.MODEL.setSzomszed(event.detail);
        }); 
    }
}
export default Controller;