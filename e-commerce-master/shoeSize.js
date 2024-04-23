//shoes-sizes
for(let i=1;i<=11;i++){
    var shoeSize=document.createElement("div");
    shoeSize.textContent=i;
    shoeSize.style.height="2rem";
    shoeSize.style.width="4rem";
    shoeSize.style.border="2px solid #ECEFF1";
    shoeSize.style.display='flex';
    shoeSize.style.textAlign="center";
    shoeSize.style.justifyContent="center";
    
    document.querySelector(".size .shoe-sizes").appendChild(shoeSize);
    
    (function(currentShoe){
        currentShoe.addEventListener('mouseover',function(){
            currentShoe.style.backgroundColor='black';
            currentShoe.style.color='#fff';
        });
        currentShoe.addEventListener('mouseleave',function(){
            currentShoe.style.backgroundColor='white';
            currentShoe.style.color='#000';
        });
    })(shoeSize);
  }