let btns = document.querySelector('#btns');
btns.addEventListener('click', function(e){
    e.preventDefault(); 
    document.querySelector('.modalG').style.display = 'block';
    document.querySelector('.first_survey').style.display = 'block';
    document.querySelector('.backward').style.display = 'none';
    document.querySelector('.wrapcontent').style.overflow = "visible";
    document.querySelector('.windows').style.display = 'block';
   
    ;
   });
   let win = document.querySelector('.windows').addEventListener('click',()=>{
         win.style.display = 'none';
   });

let backward = document.querySelector(".backward"),
main = document.querySelector('.main_block'),
mainchildren = main.children ,
i = 0,
number = 5,
progress = 0,
progressscale = 0 ,
div = document.querySelector(".wrap").children,
list = document.querySelector(".modalG__right_one_list_h5"),
listh5 = list.children;
let arrayobject = [];
function divcolor (n){
    
   for(let y = 0 ; y < n ; y++){
      
    
      div[y].style.background = 'linear-gradient(to top, #cf2a35 10% ,#ec6268  100%)';
   }
}
function decolor(n){
   
    
    for(let y = progressscale ; y <div.length ; y++){
       
       div[y].style.background = '#f0f0f0';
    }
}
let bottom = document.querySelector(".active").addEventListener("click",()=>{
    
   for(let item of Array.from(mainchildren) ){
       item.style.display = 'none';
   }
   for(let item of Array.from(listh5) ){
      item.style.display = 'none';
  }
  list.append(listh5[0]);
  listh5[0].style.display = 'block';

   main.append(mainchildren[0]);
   mainchildren[0].style.display = "block";
   arrayobject.push(i++);
   
   document.querySelector(".modalG__left_p_span").innerHTML = `Осталось ${--number} вопросов `;
   document.querySelector("#modalG__right_one_div_h6").innerHTML = `Готово ${progress+=10} % `;
   divcolor(++progressscale);
   if(i == 5){
      main.style.display = 'none';
      
      document.querySelector(".buttons").style.display = "none";
      document.querySelector(".modalG__right_one").style.display = 'none';
      document.querySelector(".data").style.display = 'flex';
   }
 
 if(i > 0){
   document.querySelector('.backward').style.display = 'block';
 }
 else{
   document.querySelector('.backward').style.display = 'none';
 }  
 
});
backward.addEventListener("click",()=>{
   for(let item of Array.from(mainchildren) ){
        item.style.display = 'none';
        
    }
    for(let item of Array.from(listh5) ){
      item.style.display = 'none';
  }
  list.prepend(listh5[listh5.length-1]);
  listh5[0].style.display = 'block';

    main.prepend(mainchildren[div.length-1]);
    mainchildren[0].style.display = "block";
    arrayobject.pop(--i);
   
     backward.style.display = "block";
     document.querySelector(".modalG__left_p_span").innerHTML = `Осталось ${++number} вопросов `;
     document.querySelector("#modalG__right_one_div_h6").innerHTML = `Готово ${progress-=10} % `;
    console.log(mainchildren);
    console.log(i);
    decolor(--progressscale);
    
});
 
     if(i > 0){
      document.querySelector('.backward').style.display = 'none';
     }
    
 

console.log(div);
 