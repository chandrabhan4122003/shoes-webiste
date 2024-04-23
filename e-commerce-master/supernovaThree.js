//image
(function(){
    var baseImages = [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc477c2ed18c447abacaaf9c00a2711f_9366/Supernova_2.0_Shoes_White_GV9029_01_standard.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/301330c49d7d45219f9dae2a008185cf_9366/Supernova_2_Running_Shoes_White_GW9089_01_standard.jpg",
        "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/a6abb2596e914140b902af5d009b4e57_9366/supernova-2.0-shoes.jpg",
        "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddd7c2fceb18476f9115ae2a008922db_9366/supernova-2-running-shoes.jpg",
      ];
      
      var imageURL = [
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/586e6395b7a04d31b938afbd0080bc8b_9366/supernova-2.0-shoes.jpg",
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d1a5f768edd14dfc8a5aae2a0081945d_9366/supernova-2-running-shoes.jpg",
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ac13610129764afb99bbaf5d009b5db3_9366/supernova-2.0-shoes.jpg",
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d27a9ab359d94f67a5beae2a008932ce_9366/supernova-2-running-shoes.jpg",
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
      
      document.querySelector('.bodyThree').appendChild(products);
      
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