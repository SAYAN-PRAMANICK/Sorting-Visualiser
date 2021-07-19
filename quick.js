var hr=document.getElementById("xoxo")
async function partition(array,left,right)
{
    divBars = document.getElementsByClassName("bar");
    if(left == right) 
    {
        divBars[right].style.backgroundColor = "green";
        return;
    }
    var pivot = array[right];
    var divider = left-1;
    divBars[right].style.backgroundColor = "pink";
    for(var i = left;i<=right;i++)
    {
        divBars[i].style.backgroundColor = 'blue';
        await delay_(10);
        if(array[i] <= pivot)
        {
            if(divider>=left) divBars[divider].style.backgroundColor = 'yellow';
            swap(divBars[divider+1],divBars[i]);
           [ array[divider+1], array[i] ] = [ array[i], array[divider+1] ];
           hr.style.backgroundColor="green";
           hr.style.borderColor="green"
           if(divider>=left) divBars[divider].style.backgroundColor = 'greenyellow';
           divider++;
        }
        divBars[i].style.backgroundColor = 'greenyellow';
        

    }
    divBars[right].style.backgroundColor = 'greenyellow';
    divBars[divider].style.backgroundColor = 'green';
    hr.style.backgroundColor="yellowgreen";
    hr.style.borderColor="yellowgreen"
    return divider;
}

async function quick(array)
{
    var left = 0, right = array.length-1;
    disable_button('narray');
    disable_button('bsort');
    disable_button('ssort');
    disable_button('isort');
    disable_button('qsort');
    disable_button('msort');
    await quickSort(array,left,right);
    hr.style.backgroundColor="green";
    hr.style.borderColor="green";
    enable_button('narray');
    enable_button('bsort');
    enable_button('ssort');
    enable_button('isort');
    enable_button('qsort');
    enable_button('msort');

}
async function quickSort(array, left, right)
{
    if(left<right)
    {
        var divider = await partition(array,left,right);
        await quickSort(array,left, divider-1);
        await quickSort(array,divider+1,right);
    }
    if(left==right) await partition(array,left,right);
}