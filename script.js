const input = document.querySelector(".list input");
const addBtn = document.querySelector(".list button");
const td = document.querySelector(".Todo");
const clear = document.querySelector(".footer button")


addBtn.onclick = ()=>{
    let userdata = input.value;
    getlocalStorage = localStorage.getItem("New Todo");

    if(getlocalStorage == null){
        listArr=[];

    }
    else{
        listArr = JSON.parse(getlocalStorage);
    }

    

    listArr.push(userdata);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showtasks();
}

//add list
function showtasks(){

    let getlocalStorage=localStorage.getItem("New Todo");
    if(getlocalStorage == null){
        listArr=[];

    }
    else{
        listArr = JSON.parse(getlocalStorage);
    }

    const pend = document.querySelector(".pending");
    pend.textContent = listArr.length;

    let newlitag= "";
    listArr.forEach((element,index) => {
        newlitag += `<li>${element}<span onclick="deletetask(${index})" class="fa fa-trash"></span></li>`;
    });

    td.innerHTML = newlitag;
    input.value="";


}

//delete particular items

function deletetask(index){
    let getlocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalStorage);
    listArr.splice(index,1);

    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showtasks();

}

clear.onclick = ()=>{
    listArr = [];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showtasks();

}
