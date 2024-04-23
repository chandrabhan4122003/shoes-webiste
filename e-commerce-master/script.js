//image
(function() {
var baseImages = [
  "img/products/p1.avif",
  "img/products/p2.avif",
  "img/products/p3.avif",
  "img/products/p4.avif",
  "img/products/p5.avif",
  "img/products/p6.avif",
  "img/products/p7.avif",
  "img/products/p8.avif",
];

var imageURL = [
  "img/products/p1display.avif",
  "img/products/p2display.avif",
  "img/products/p3display.avif",
  "img/products/p4display.avif",
  "img/products/p5display.avif",
  "img/products/p6display.avif",
  "img/products/p7display.avif",
  "img/products/p8display.avif",
];

var shoesName = [
  "adidas TRX Vintage Shoes",
  "Stan Smith Bonega Shoes",
  "MYSTERE SHOES",
  "Retropy F2 SHOES",
  "Top Ten RB Shoes",
  "Top Ten RB Shoes",
  "Nizza Trek Shoes",
  "Stan Smith CS Shoes"
];

var discription = [
  "Lifestyle",
  "Women Lifestyle","",
  "Men Lifestyle",
  "Men Basketball",
  "Men Basketball",
  "Women Lifestyle",
  "Men originals"
];

var colors = [
  "2 colours","",
  "3 colours",
  "2 colours",
  "2 colours",
  "2 colours","",
  "4 colours"
];

var interior = [
  "productDetail.html"
]

var prices = ["₹9,999", "₹9,999", "₹9,999", "₹9,999", "₹9,999", "₹9,999", "₹9,999", "₹9,999"];

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

  var price=document.createElement("p");
  price.textContent=prices[i];
  price.style.fontSize="14px";
  price.style.marginTop="-1.5rem";
  price.style.backgroundColor="#fff";
  price.style.width="50%";

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

  productDetails.appendChild(price);
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

  productItems.addEventListener('click', function() {
    if (shoesName[i] === "adidas TRX Vintage Shoes") {
        window.location.href = "productDetail.html"; // Redirect to productDetail.html
    }
});
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

      deleteButton.addEventListener('click', function (event) {
        productPP.remove();
        
        // Call updateGross() after deleting an item
        updateGross();
      });

      updateGross();
  })
})(productImage);

// Function to calculate gross amount
function calculateGross() {
  var total = 0;
  var cartItems = document.querySelectorAll(".cart .cart-content .products .product");
  cartItems.forEach(function(item) {
    var productId = parseInt(item.dataset.productId); // Convert productId to integer
    var price = parseFloat(prices[productId].replace(/[^0-9.]/g, '')); // Parse price to float
    total += price;
  });
  return total.toFixed(2); // Round to 2 decimal places
}


// Update gross amount in the cart
function updateGross() {
  var grossAmount = calculateGross();
  var grossDisplay = document.querySelector('.cart .cart-content .gross');
  if (grossDisplay) {
    grossDisplay.textContent = "Gross Amount: ₹" + grossAmount;
  } else {
    grossDisplay = document.createElement('p');
    grossDisplay.textContent = "Gross Amount: ₹" + grossAmount;
    grossDisplay.classList.add('gross');
    document.querySelector('.cart .cart-content').appendChild(grossDisplay);
  }
}
  
  function getRandomSize() {
      var sizes = ["US 7", "US 8", "US 9", "US 10", "US 11"];
      return sizes[Math.floor(Math.random() * sizes.length)];
  }
}
  for (let i = 0; i < baseImages.length; i++) {
      createProduct(baseImages[i], shoesName[i], discription[i], colors[i], prices[i], imageURL[i]);
  }
})();