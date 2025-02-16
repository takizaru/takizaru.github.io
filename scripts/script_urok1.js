let vagno1=document.querySelector('#vagno1');
let vpravo1=document.querySelector('#vpravo');
let vlevo1=document.querySelector('#vlevo');
function addvagno1(){

    vagno1.innerHTML =' <img id="vpravo" src="image/vpravo.svg" alt=""><p>가다 - обозначает движение по направлению от говорящего, либо независимо от направления (уходить)</p><p>어디에 갑니까? - Куда Вы идете?</p><img src="/image/Speaker.svg" alt=""><p>나는 도서관에 갑니다. - Я иду в библиотеку.</p><img src="image/vlevo.svg" alt="" id="vlevo2">';
}
vlevo1.addEventListener('click', addvagno1);

function removevagno1(){
    vagno1.innerHTML="";
}
vpravo1.addEventListener('click', removevagno1);


let vpravo2=document.querySelector('#vpravo2');
let vlevo2=document.querySelector('#vlevo2');
function addvagno1_2(){

    vagno1.innerHTML =' <img id="vpravo2" src="image/vpravo.svg" alt=""> <p>오다 -  обозначает движение по направлению к говорящему (приходить)</p><p>어디에서 옵니까?  - Откуда Вы идете?</p><img src="/image/Speaker.svg" alt=""><p>나는 기숙사에서 옵니다. - Я иду из общежития.</p><img src="/image/Speaker.svg" alt="">';
}
vlevo2.addEventListener('click', addvagno1_2);

function removevagno1_2(){
    vagno1.innerHTML="";
}
vpravo2.addEventListener('click', removevagno1_2);