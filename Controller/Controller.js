import Lampak from "../View/LampakView.js";
import Model from "../Model/Model.js";
class Controller{
    constructor(){
        this.LAMPAK=new Lampak();
        this.MODEL=new Model();
        $(window).on("kapcs", (event) => {
            console.log(event.detail);
            this.MODEL.setSzin(event.detail);
            this.MODEL.setSzomszed(event.detail);
        }); 
    }
}
export default Controller;