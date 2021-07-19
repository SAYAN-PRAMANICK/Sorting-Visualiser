async function merge(array, left, mid, right) 
{
    hr=document.getElementById("xoxo")
    divBars = document.getElementsByClassName('bar');
    var a1 = [];
    var a2 = [];
    var i=0,j=0,k=0;
    for(var x=left;x<=mid;x++)
    {
        a1[i++] = array[x];
    }   
    i=0;
    for(var x=mid+1;x<=right;x++)
    {
        a2[i++] = array[x];
    }
    i=0;
    while(i<a1.length && j<a2.length)
    {
        divBars[left+k].style.backgroundColor = 'red';
        divBars[mid+1+j].style.backgroundColor = 'red';
        hr.style.backgroundColor="green";
        hr.style.borderColor="green"
        await delay_(10);
        if(a1[i] <= a2[j])
        {
            array[left+k] = a1[i];
            divBars[left+k].style.height = `${a1[i]}%`;
            divBars[left+k].style.backgroundColor = 'green';
            divBars[mid+1+j].style.backgroundColor = 'green';
            hr.style.backgroundColor="yellowgreen";
            hr.style.borderColor="yellowgreen"
            i++;
        }
        else
        {
            array[left+k] = a2[j];
            divBars[left+k].style.height = `${a2[j]}%`;
            divBars[left+k].style.backgroundColor = 'green';
            divBars[mid+1+j].style.backgroundColor = 'green';
            hr.style.backgroundColor="yellowgreen";
            hr.style.borderColor="yellowgreen"
            j++;
        }
        k++;
    }
    while(i<a1.length)
    {
        divBars[left+k].style.backgroundColor = 'red';
        await delay_(10);
        divBars[left+k].style.height = `${a1[i]}%`;
        array[left+k] = a1[i];
        divBars[left+k].style.backgroundColor = 'green';
        k++;
        i++;
    }
    while(j<a2.length)
    {
        divBars[left+k].style.backgroundColor = 'red';
        await delay_(10);
        divBars[left+k].style.height = `${a2[j]}%`;
        array[left+k] = a2[j];
        divBars[left+k].style.backgroundColor = 'green';
        k++;
        j++;
    }
}


async function sort(array) {
    var left = 0, right = array.length-1;
    disable_button('narray');
    disable_button('bsort');
    disable_button('ssort');
    disable_button('isort');
    disable_button('qsort');
    disable_button('msort');
    await mergeSort(array, left, right);
    hr.style.backgroundColor="green";
    hr.style.borderColor="green";
    enable_button('narray');
    enable_button('bsort');
    enable_button('ssort');
    enable_button('isort');
    enable_button('qsort');
    enable_button('msort');
}

async function mergeSort(array, left, right){
    var mid;
    if(left>=right) return;
    // alert(`${left}---${right}`);
    mid = Math.floor((left + right) / 2);
    await mergeSort(array,left,mid);
    await mergeSort(array,mid+1,right);
    await merge(array,left,mid,right);
}
