var hoes = document.createElement('div');
hoes.style.display='flex';
document.querySelector(".colour-option").appendChild(hoes);
howHoes=[
    "img/products/p1.avif",
    "img/productKeAndar/p1.avif"
];
for(let i=0;i<howHoes.length;i++){
    var displayProduct=document.createElement("div");
    displayProduct.style.backgroundImage="url("+howHoes[i]+")";
    displayProduct.style.backgroundSize='cover';
    displayProduct.style.width = "4rem";
    displayProduct.style.height = "4rem";
    displayProduct.style.margin = "2px";
    
    if(i===0) displayProduct.style.borderBottom="4px solid black";
    
    
    hoes.appendChild(displayProduct);

    (function (currentHoe){
        currentHoe.addEventListener('mouseover',function(){
            currentHoe.style.borderBottom="4px solid black";
        })
        currentHoe.addEventListener('mouseleave',function(){
            currentHoe.style.borderBottom="none";
        })
    })(displayProduct);
}