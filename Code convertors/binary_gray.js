
function execute1()
{
   
   let m= document.querySelector('[name="a"]').value 
   let b3=m[0]
   let b2=m[1]
   let b1=m[2]
   let b0=m[3]
   let g3=b3
   let g2=calc(b3,b2)
   let g1=calc(b2,b1)
   let g0=calc(b1,b0)

   alert ("Gray code is: "+g3+" "+g2+" "+g1+" "+g0)
}

function execute2()
{
   let n= document.querySelector('[name="b"]').value 
   let g3=n[0]
   let g2=n[1]
   let g1=n[2]
   let g0=n[3]
   let b3=g3
   let b2=calc(g3,g2)
   let b1=calc(g2,g1)
   let b0=calc(g1,g0)
   alert (b3+" "+b2+" "+b1+" "+b0)
}

function calc(x,y)
{
   if (x==y)
 {
   return 0
 }
  if (x!=y)
 {
   return 1
 }
}

 
