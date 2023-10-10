
class Model{
    #lista=[];
    #allapot;

    constructor(n){
        this.#allapot=false;
        for (let index = 1; index <= n; index++) {
            this.#lista.push(this.#allapot);
        }
    }
    setSzin(id){
        $(`#${id}`).css("background-color","blue");
    }

    setSzomszed(id){
        this.#lista[id]=true;
        //console.log(this.#lista);
        for (let index = 0; index <= this.#lista.length; index++) {
            if (this.#lista[index]!==true) {
                $(`#${id+1}`).css("background-color","red");
                $(`#${id-1}`).css("background-color","red");
            }
        }
    }

    getList(){
        return this.#lista;
    }
}
export default Model;