// 定義購物車數據結構
var cart = [];

// 添加商品到購物車
$(".add-to-cart").click(function () {
  var product = $(this).closest(".product");
  var productName = product.find(".PR-name").text();
  var productPrice = parseFloat(
    product.find(".PR-price").text().replace("NT$", "")
  );
  $(".shopping-cart").addClass("fa-shake");
  setTimeout(function(){
    $(".shopping-cart").removeClass("fa-shake");
  },500)
 //   bootstrap toast
  $("#toastClock").toast("show");
  // 檢查商品是否已經在購物車中
  const existingItem = cart.find((item) => item.name === productName);

  if (existingItem) {
    // 如果商品已經在購物車中，增加數量
    existingItem.quantity++;
  } else {
    // 如果商品不在購物車中，添加新的購物車項目
    cart.push({
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  // 更新購物車內容和商品總數量
  updateCart();
});

// 清空購物車按鈕單擊事件
// $(".clear-cart").click(function () {
//   // 使用splice方法清空購物車數據
//   cart.splice(0, cart.length);

//   // 更新購物車內容和商品總數量
//   updateCart();
// });


// 結帳按鈕單擊事件
$(".checkout-button").click(function () {
  // 執行結帳操作，例如向後端發送訂單等

  // 將購物車數量加1
  const cartQuantity = $(".cart-quantity");
  const currentQuantity = parseInt(cartQuantity.text(), 10);
  cartQuantity.text(currentQuantity + 1);
  // 清空購物車數據
  cart.length = 0;

  // 更新購物車內容和商品總數量
  updateCart();
});



// 更新購物車內容和商品總數量
function updateCart() {
  var cartItems = $(".cart-items");
  var cartTotal = $(".cart-total");
  var cartQuantity = $(".cart-quantity");

  // 清空購物車
  cartItems.empty();

  // 重新計算總價和總數量
  let total = 0;
  let quantity = 0;

  for (const item of cart) {
    cartItems.append(`<li class="list-group-item">${item.name}: NT$${item.price} x ${item.quantity}</li>`);
    total += item.price * item.quantity;
    quantity += item.quantity;
  }

  // 顯示總價和總數量
  cartTotal.text(`NT$${total.toFixed(2)}`);
  cartQuantity.text(quantity);
}
