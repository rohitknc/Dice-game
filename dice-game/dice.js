let pe1=document.getElementById("pe1");
let pe2=document.getElementById("pe2");
let s=document.getElementById("win");
let m1=1;
let m2=7;
let n1=Math.floor(Math.random()*(m2-m1)+m1);
let n2=Math.floor(Math.random()*(m2-m1)+m1);
function execute()
{
    console.log(n1,n2,pe1);

   if(n1==n2)
   {
    
      pe1.setAttribute("src",`./images/dice${n1}.png`);
      pe2.setAttribute("src",`./images/dice${n2}.png`);
      s.innerHTML="Draw";
    
   }
   else if(n1>n2)
   {
    pe1.setAttribute("src",`./images/dice${n1}.png`);
    pe2.setAttribute("src",`./images/dice${n2}.png`);
    s.innerHTML="Winner is Player 1";
   }
   else
   {
    pe1.setAttribute("src",`./images/dice${n1}.png`);
    pe2.setAttribute("src",`./images/dice${n2}.png`);
    s.innerHTML="Winner is Player 2";
    
   }
}