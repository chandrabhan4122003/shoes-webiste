

  // supernova.js
(function() {
//image
var baseImages = [
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a59091b1969544ed8a85cd29738902e8_9366/Supernova_Stride_Shoes_White_IG8314_HM1.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd8b8f8faa2a44e79e011d9bc59fadfd_9366/Supernova_Stride_Shoes_Blue_IG8311_HM1.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/780e166ab6e4403a977804ede9cb88af_9366/Supernova_Stride_Shoes_Green_IG8283_HM1.jpg",
  "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/a60dd09c810e4ec19d592b249c670695_9366/supernova-rise-shoes.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f1375f34b2641d2bcca2ebdac8c9a77_9366/Supernova_Rise_Shoes_White_IF3015_HM1.jpg",
  "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/12bad7a2bac7441ea8351d82ecfa815d_9366/supernova-solution-shoes.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/66e5cd034ca845b1bfd6994472084bd4_9366/Supernova_Rise_Shoes_Black_IG5844_HM1.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/486a66b8ef544c9a8d210471fed6ed02_9366/Supernova_Rise_Shoes_Green_ID2779_HM1.jpg",
];

var imageURL = [
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/59a8aae856c340c59ae36dff1ad73407_9366/Supernova_Stride_Shoes_White_IG8314_HM3_hover.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0b5c8d042447466fb17768cca69c8e3f_9366/Supernova_Stride_Shoes_Blue_IG8311_HM3_hover.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3660df1c563a47388809a18a5e2bfb60_9366/Supernova_Stride_Shoes_Green_IG8283_HM3_hover.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50f06fee61814804870a9f83e13357d0_9366/Supernova_Rise_Shoes_Blue_IF9837_HM3_hover.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/48bb4e6b74c7473490c9d9b31e567bc9_9366/Supernova_Rise_Shoes_White_IF3015_HM3_hover.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d84bd7751a4c4f00a8797c3f4804bcc2_9366/Supernova_Solution_Shoes_Black_IF3005_HM3_hover.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf9477ac6a354447a74a17913ed06140_9366/Supernova_Rise_Shoes_Black_IG5844_HM3_hover.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/724b3c1feeb34dae92897d5cabc7e60a_9366/Supernova_Rise_Shoes_Green_ID2779_HM3_hover.jpg",
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

document.querySelector('.body').appendChild(products);

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
  for (let i = 0; i < baseImages.length; i++) {
      createProduct(baseImages[i], shoesName[i], discription[i], colors[i], prices[i], imageURL[i]);
  }
})();
