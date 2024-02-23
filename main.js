let moon=document.getElementById('moon2');
let stars=document.getElementById('stars1');
let nouvil=document.getElementById('nouvil');
let boat =document.getElementById('boat6');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let mountains7=document.getElementById('mountains7');
let river=document.getElementById('river5');
let body=document.getElementById('bo');
window.onscroll=function(){
     let value=scrollY;
     stars.style.left = value + 'px';
     moon.style.top=value*4+'px';
     mountains3.style.top=value*1.2+'px';
     mountains4.style.top=value*1.2+'px';
     river.style.top=value+'px';
     boat.style.top=value+'px';
     boat.style.left=value*5+'px';
     nouvil.style.fontSize=value+'px';
     if(value>=70){
          nouvil.style.fontSize=70+'px';
     }else{
          nouvil.style.fontSize=value+'px';    
     }
     if(value>=160){
          moon.style.display='none';
          document.querySelector('.main').style.background='linear-gradient(#9bcae6,#4f87c7)'
          if(value>=170){
               river.style.display='none';
               mountains4.style.display='none';
               
          }
          mountains3.style.display='none';
     }else{
          if(value>=60){
               nouvil.style.fontSize=60+'px';
          }
          if(value<170){
               river.style.display='block';
               mountains4.style.display='block';
          }
          moon.style.display='block';
          mountains3.style.display='block';
          document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'
     }
}