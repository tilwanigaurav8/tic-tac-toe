
function showgame(){
    game.style.display='block';
    for(const x of listselect){
        x.classList.remove('disabled');
        x.innerHTML='';
    }
    count=0;
    windis.style.display='none';
    
    activeplayer=0;
    winner=[
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ];
    console.clear();
}
function gameover(){
    for(let i=0;i<3;i++){
        if(winner[i][0]>0 && winner[i][0]===winner[i][1] &&
        winner[i][1]===winner[i][2]
        ){
            return winner[i][0];
        }
    }

    for(let i=0;i<3;i++){
        if(winner[0][i]>0 && winner[0][i]===winner[1][i] &&
        winner[1][i]===winner[2][i]
        ){
            return winner[0][i];
        }
    }
    if(winner[0][0]===winner[1][1] && winner[1][1]===winner[2][2] && winner[0][0]>0){
        return winner[0][0];
    }

    if(winner[0][2]===winner[1][1] && winner[1][1]===winner[2][0] && winner[0][2]>0){
        return winner[0][2];
    }

    if(count===9){
        return -1;
    }

    return 0;
    
}

function marksymb(event){
    let act=activeplayer;
    if(activeplayer<9){
       if(activeplayer%2===0){
            if(event.target.innerHTML===''){
                event.target.innerHTML='X';
                count++;
                activeplayer=activeplayer+1;
                event.target.classList.add('disabled');
            }
            else if(event.target.innerHTML==="O"){
                event.target.innerHTML='O';
            }
            else{
                event.target.innerHTML='X';
            }
        }
        else{
            if(event.target.innerHTML===''){
                event.target.innerHTML='O';
                count++;
                activeplayer=activeplayer+1;
                event.target.classList.add('disabled');
            }
            else if(event.target.innerHTML==="O"){
                event.target.innerHTML='O';
            }
            else{
                event.target.innerHTML='X';
            }
        }
    }

    const selrow=event.target.dataset.row-1;
    const selcol=event.target.dataset.col-1;
    winner[selrow][selcol]=(act%2)+1;
    
    let n=gameover();
    console.log(n);
    if(n===-1){
        fwin.innerHTML="Both as nobody is winner";
        activeplayer=15;
        windis.style.display='block';
    }
    if(n===1){
        fwin.innerHTML=w1.children[1].innerHTML;
        activeplayer=15;
        windis.style.display='block';
    }
    if(n===2){
        fwin.innerHTML=w2.children[1].innerHTML;
        activeplayer=15;
        windis.style.display='block';
    }

}