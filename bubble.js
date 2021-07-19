async function bubble_sort(array){

    disable_button("narray");
    disable_button("bsort");
    disable_button("isort");
    disable_button("ssort");
    disable_button("qsort");
    disable_button("msort");
    hr=document.getElementById("xoxo")
    div_bars= document.getElementsByClassName("bar");
    len=div_bars.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){

            div_bars[j].style.backgroundColor="red";
            div_bars[j+1].style.backgroundColor="red";
            if(i%2==0){
                hr.style.backgroundColor="yellowgreen";
                hr.style.borderColor="yellowgreen"
            }
            await delay_(1);
            if (array[j]>array[j+1]){
                swap(div_bars[j],div_bars[j+1]);
                [ array[j], array[j+1] ] = [array[j+1], array[j]];
                hr.style.backgroundColor="green";
                hr.style.borderColor="green"
            }
            div_bars[j].style.backgroundColor="greenyellow";
            div_bars[j+1].style.backgroundColor="greenyellow";
        }
        div_bars[len-1-i].style.backgroundColor="green";
    }
    hr.style.backgroundColor="green";
    hr.style.borderColor="green";
    enable_button("narray");
    enable_button("bsort");
    enable_button("isort");
    enable_button("ssort");
    enable_button("qsort");
    enable_button("msort");

}
