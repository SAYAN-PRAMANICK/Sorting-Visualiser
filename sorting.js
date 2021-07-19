create_bars();

function swap(el1,el2){
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2;
    el2.style.height = transform1;
}

async function disable_button(id){
    document.getElementById(id).disabled=true;
}
async function enable_button(id){
    document.getElementById(id).disabled=false;
}

function delay_(msec=50){
    return new Promise(resolve => setTimeout(() => {resolve()},msec));
}

function create_array(){
    var array=[];
    for(i=0;i<100;i++){
        array[i]=Math.floor(Math.random()*101);
    }
    return array;
}

function create_bars(){
    
    array = create_array();
    div_main = document.getElementById("bar_container");
    var divs = [];
    for(i=0;i<100;i++){
        divs[i]=document.createElement("div");
        divs[i].style.height=`${array[i]}%`;
        divs[i].classList.add("bar");
        div_main.append(divs[i]);
    }
}

function update_bars()
{
    hr=document.getElementById("xoxo")
    hr.style.backgroundColor="yellowgreen";
    hr.style.borderColor="yellowgreen"
    array = create_array();
    divs = document.getElementsByClassName("bar");
    for(i=0;i<100;i++)
    {
        divs[i].style.height = `${array[i]}%`;
        divs[i].style.backgroundColor = "greenyellow";
    }
}

document.getElementById("narray").addEventListener("click",update_bars);
document.getElementById("bsort").addEventListener("click", function(){bubble_sort(array);});
document.getElementById("isort").addEventListener("click", function(){insertion_sort(array);});
document.getElementById("ssort").addEventListener("click", function(){selection_sort(array);});
document.getElementById("qsort").addEventListener("click", function(){quick(array);});
document.getElementById("msort").addEventListener("click", function(){sort(array);});