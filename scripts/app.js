let activeplayer=0;
let count=0;
let winner=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
]
const players=[
    {
        s:'X'
    },
    {
        s:'O'
    },
];

const editp1=document.getElementById('ep1');
const editp2=document.getElementById('ep2');
const ername=document.getElementById('errormess');
const formele=document.querySelector('form');
const player=document.getElementById('plname');
const windis=document.getElementById('over');
let selectname=0;
const newgame=document.getElementById('btn');
const game=document.getElementById('playarea');
let listselect=document.querySelectorAll('#gameboard li');
const fwin=document.getElementById('plwin');
const w1=document.getElementById('pl1');
const w2=document.getElementById('pl2');

const contoverlay=document.getElementById('config');
const backoverlay=document.getElementById('bshad');
const cancelbt=document.getElementById('closeconfig');

editp1.addEventListener('click',openconfig);
editp2.addEventListener('click',openconfig);
cancelbt.addEventListener('click',closecon);
formele.addEventListener('submit',playerinfo);

for(const gele of listselect){
    gele.addEventListener('click',marksymb);
}
