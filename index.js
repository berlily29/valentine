var yes = document.querySelector("#yes");
var no = document.querySelector('#no');
var reply = document.querySelector('#comment')
var size = 2

no.addEventListener('click',()=> {
    console.log(yes.innerHTML);
    if (yes.innerHTML == 'YES') {
        yes.innerHTML = 'PLEASE?'
        size += .5;
        yes.style.fontSize = size + 'em';
    }
    else if (yes.innerHTML =='PLEASE?') {
        yes.innerHTML = 'Come on'
         size += .5;
        yes.style.fontSize = size + 'em';
    }
    else if (yes.innerHTML =='Come on') {
        yes.innerHTML = 'PLEASE??!?'
        size += .5;
        yes.style.fontSize = size + 'em';
    }
    else {
        yes.innerHTML = 'PLEASE?'
        size += .5;
        yes.style.fontSize = size + 'em';
    }
})

yes.addEventListener('click', ()=> {
    reply.style.display = 'flex';
})