
class Model{
    #lista=[];
    #allapot;

    constructor(){
        this.#allapot=false;
        for (let index = 1; index <= 9; index++) {
            this.#lista.push(this.#allapot);
        }
    }
    setSzin(id){
        $(`#${id}`).css("background-color","red");
    }

    setSzomszed(id){
        this.#lista[id]=true;
        console.log(this.#lista);
        for (let index = 0; index <= 9; index++) {
            if (this.#lista[index]!==true) {
                $(`#${id+1}`).css("background-color","blue");
                $(`#${id-1}`).css("background-color","blue");
            }
        }
    }

    getList(){
        return this.#lista;
    }
}
export default Model;