async function insertion_sort(array){

    disable_button("narray")
    disable_button("bsort")
    disable_button("isort")
    disable_button("ssort")
    disable_button("qsort")
    disable_button("msort")
    //-----------------------------------------------------------------------------------------------
    hr=document.getElementById("xoxo")
    div_bars=document.getElementsByClassName("bar");
    len=div_bars.length;
    for(i=0;i<len;i++){
        
        while((array[i-1]>array[i]) && (i>0)){
            div_bars[i-1].style.backgroundColor="red";
            div_bars[i].style.backgroundColor="blue";
            if(i%2==0){
                hr.style.backgroundColor="yellowgreen";
                hr.style.borderColor="yellowgreen"
            }
            await delay_(1);
            swap(div_bars[i],div_bars[i-1]);
            [array[i],array[i-1]]=[array[i-1],array[i]]
            div_bars[i].style.backgroundColor = 'greenyellow';
            div_bars[i-1].style.backgroundColor = 'greenyellow';
            hr.style.backgroundColor="green";
            hr.style.borderColor="green"
            i-=1
        }

    }
    for(i=0;i<len;i++){
        await delay_(1);
        div_bars[i].style.backgroundColor="green";
    }

    //-----------------------------------------------------------------------------------------------
    hr.style.backgroundColor="green";
    hr.style.borderColor="green";
    enable_button("narray");
    enable_button("bsort");
    enable_button("isort");
    enable_button("ssort");
    enable_button("qsort");
    enable_button("msort");
}