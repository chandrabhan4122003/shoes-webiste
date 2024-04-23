//image
(function(){
var baseImages = [
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6939e8ca1b1245e0a340be69b1d87501_9366/Supernova_Solution_Shoes_Blue_IG5849_HM1.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63b6bc4fae734392a72d34de83e8ef7d_9366/Supernova_Rise_Shoes_Blue_IG7512_HM1.jpg",
    "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b6292b324a540558a1d7a42e82e67b7_9366/own-the-run-3-stripes-jacket.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/53e7c3576a1f45d1b7cf8cfa19fe930f_9366/Supernova_Rise_Shoes_Blue_ID0377_HM1.jpg",
    "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b97d8762bc6b4887bb18349658e434ef_9366/supernova-solution-shoes.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/290f013379bf49109bb345d4d7fc9718_9366/Supernova_Rise_Shoes_Black_IG5846_HM1.jpg",
    "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d60b2d9250d4e97bbb5cc98f67b4f3e_9366/supernova-rise-shoes.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00136430d3ee4f63ab8f2020168fedf9_9366/Own_The_Run_Long_Sleeve_Tee_Pink_IN8333_21_model.jpg",
  ];
  
  var imageURL = [
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1bcb98200333438090fad9217aa6a6bc_9366/Supernova_Solution_Shoes_Blue_IG5849_HM3_hover.jpg",
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce3b512ae50e4b97a23a3b741621d5d5_9366/supernova-rise-shoes.jpg",
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b702ca998dde40108af21c4ef99ff976_9366/own-the-run-3-stripes-jacket.jpg",
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ffd3320a4314a8fb61fcd3febc386f5_9366/supernova-rise-shoes.jpg",
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab6e457317c546518aea3c86c52d5686_9366/supernova-solution-shoes.jpg",
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fae64d233a64e8799ab262a8c0d8650_9366/supernova-rise-shoes.jpg",
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/03f6f4b2a3fb45949750346437ef8297_9366/supernova-rise-shoes.jpg",
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1891d10576534037adbd9dabcf79a850_9366/own-the-run-long-sleeve-tee.jpg",
  ];
  
  var shoesName = [
    "Supernova Stride Shoes",
    "Supernova Stride Shoes",
    "Supernova Stride Shoes",
    "Supernova Rise Shoes",
    "Supernova Rise Shoes",
    "Supernova Solution Shoes",
    "Supernova Rise Shoes",
    "Supernova Rise Shoes"
  ];
  
  var discription = [
    "Men Running",
    "Men Running",
    "Women Running",
    "Men Running",
    "Men Running",
    "Men Running",
    "Men Running",
    "Men Running"
  ];
  
  var colors = [
    "2 colours","",
    "3 colours",
    "2 colours",
    "2 colours",
    "2 colours","",
    "4 colours"
  ];
  
  var prices = [120, 150, 100, 180, 200, 180, 160, 140];
  
  
  var products=document.createElement("div");
  products.style.display='flex';
  products.style.flexWrap='wrap';
  products.style.justifyContent="space-between";
  products.style.marginTop="10px";
  
  document.querySelector('.bodyTwo').appendChild(products);
  
  for(let i=0;i<baseImages.length;i++){
  
    var productItems=document.createElement("div");
    productItems.style.display='flex';
    productItems.style.flexFlow="column";
  
    products.appendChild(productItems);
  
    var productImage=document.createElement("div");
    productImage.style.width="19.7rem";
    productImage.style.height="20rem";
    productImage.style.backgroundSize="cover";
    productImage.style.backgroundImage="url("+baseImages[i]+")";
  
    productItems.appendChild(productImage);
  
    var productDetails=document.createElement("div");
    detail=document.createElement("p");
    detail.textContent=shoesName[i];
    detail.style.fontSize="14px";
    detail.style.margin="8px";
  
    var dis=document.createElement("p");
    dis.textContent=discription[i];
    dis.style.fontSize="12px";
    dis.style.margin="8px";
  
    var colours=document.createElement("p");
    colours.textContent=colors[i];
    colours.style.fontSize="12px";
    colours.style.margin="8px";
  
    var cart=document.createElement("p");
    cart.textContent="ADD TO CART"
    cart.style.color='green';
    cart.style.fontSize='12px';
    cart.style.margin='8px';
    cart.style.cursor='pointer';
  
    productDetails.appendChild(detail);
    productDetails.appendChild(dis);
    productDetails.appendChild(colours);
    productDetails.appendChild(cart);
  
    productItems.appendChild(productDetails);
  
    (function (currentProductItems){
      productItems.addEventListener('mouseover',function(){
        currentProductItems.style.border="2px solid black";
      })
      productItems.addEventListener('mouseleave',function(){
        currentProductItems.style.border="none";
      })
    })(productItems);
  
    (function (currentProductImage) {
      productItems.addEventListener('mouseover', function () {
        currentProductImage.style.backgroundImage="url("+imageURL[i]+")";
      });
      productItems.addEventListener('mouseleave', function () {
        currentProductImage.style.backgroundImage="url("+baseImages[i]+")";
      });
    })(productImage);
  
  
  (function (currentItem) {
      cart.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('delete-btn')) {
            var productToRemove = target.closest('.product');
            productToRemove.remove();
            return;
        }
        
        var cartContent = document.querySelector(".cart .cart-content .products");
        var existingItems = cartContent.querySelectorAll('.product');
        var isItemAlreadyAdded = false;
  
        existingItems.forEach(function (item) {
            if (item.dataset.productId === i.toString()) {
                isItemAlreadyAdded = true;
            }
        });
  
        if (isItemAlreadyAdded) {
            alert("This item is already in your cart!");
            return;
        }
  
        var emptyBagMessage = cartContent.querySelector('p');
        if (emptyBagMessage) {
            emptyBagMessage.remove();
        }
  
        var pp = document.createElement('div');
  
        pp.style.display = 'flex';
        pp.style.width="40%";
  
        var ppDetail = document.createElement('div');
  
        ppDetail.style.display = 'flex';
  
        var productPP = document.createElement("div");
        productPP.classList.add('product');
        productPP.dataset.productId = i;
        productPP.style.display = 'flex';
        productPP.style.padding = '2rem';
        productPP.style.justifyContent = 'space-between';
        productPP.style.width = '30rem';
  
        var imagePP = document.createElement("div");
        imagePP.style.backgroundImage = "url(" + baseImages[i] + ")";
        imagePP.style.width = '12rem';
        imagePP.style.height = '10rem';
        imagePP.style.backgroundSize = 'cover';
  
        var imagePPdetail = document.createElement('div');
        imagePPdetail.style.fontSize = '1rem';
        imagePPdetail.style.width = "50%";
        imagePPdetail.style.padding = "20px";
        imagePPdetail.innerHTML = `<b>${shoesName[i]}</b>`;
  
        var deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-btn');
      deleteButton.innerHTML = '<img src="img/delete.png" style="width:20px; height:20px">';
      deleteButton.style.marginLeft = '1rem';
      deleteButton.style.border='none';
      deleteButton.style.outline='none';
      deleteButton.style.backgroundColor='inherit';
      deleteButton.style.cursor='pointer';


      deleteButton.addEventListener('click', function (event) {
          productPP.remove();
      });
  
        document.querySelector(".cart .cart-content .products").appendChild(pp);
        pp.appendChild(ppDetail);
        ppDetail.appendChild(productPP);
        productPP.appendChild(imagePP);
        productPP.appendChild(imagePPdetail);
        productPP.appendChild(deleteButton);
    })
  })(productImage);
  
    
    function getRandomSize() {
        var sizes = ["US 7", "US 8", "US 9", "US 10", "US 11"];
        return sizes[Math.floor(Math.random() * sizes.length)];
    }
}
})();