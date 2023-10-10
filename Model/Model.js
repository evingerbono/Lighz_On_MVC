
class Model{
    #lista=[];

    getList(){
        return this.#lista;
    }

    setSzin(id){
        $(`#${id}`).css("background-color","red");
    }
}
export default Model;