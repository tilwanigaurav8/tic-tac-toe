function openconfig(event){
    selectname=+event.target.dataset.player;
    contoverlay.style.display='block';
    backoverlay.style.display='block';
}

function closecon(){
    contoverlay.style.display='none';
    backoverlay.style.display='none';
    ername.innerHTML="";
    player.value="";
}

function playerinfo(event){
    event.preventDefault();
    const formdata=new FormData(event.target);
    const edata=formdata.get('plname').trim();
    if(!edata){
        ername.innerHTML="Please enter a valid name!";
        return;
    }
    const selected=document.getElementById('pl'+selectname);
    selected.children[1].textContent=edata;
    contoverlay.style.display='none';
    backoverlay.style.display='none';
    ername.innerHTML="";
    player.value="";
    selectname=0;
}