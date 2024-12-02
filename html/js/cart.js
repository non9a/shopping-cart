document.addEventListener('DOMContentLoaded', function () {
  let cart = {}; // 用來存儲已添加商品的物品和數量
  const cartCount = document.getElementById('cart-count'); // 購物車數量顯示
  const cartDetails = document.getElementById('cart-details'); // 購物車明細視窗
  const cartItemsList = document.getElementById('cart-items-list'); // 購物車物品列表
  const totalPriceElement = document.getElementById('total-price'); // 顯示總金額的元素
  const closeCartButton = document.getElementById('close-cart'); // 關閉購物車按鈕
  const continueShoppingButton = document.getElementById('continue-shopping'); // 繼續購物按鈕
  const addToCartButtons = document.querySelectorAll('.btn-outline-dark'); // 獲取所有加入購物車的按鈕

  // 監聽加入購物車按鈕的點擊
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault(); // 防止表單提交

          // 獲取當前卡片的名稱、價格和圖片
          const cardTitle = this.closest('.card').querySelector('.card-title').textContent;
          const cardPrice = parseFloat(this.closest('.card').querySelector('.card-text').textContent.replace('NT$', '').trim());
          const cardImage = this.closest('.card').querySelector('img').src; // 獲取商品圖片

          // 如果商品已經在購物車中，則數量加 1；如果沒有，則加入
          if (!cart[cardTitle]) {
              cart[cardTitle] = { quantity: 1, price: cardPrice, image: cardImage };
          } else {
              cart[cardTitle].quantity += 1;
          }

          // 更新購物車數量顯示
          updateCartCount();

          // 更新購物車明細
          updateCartDetails();
      });
  });

  // 更新購物車數量顯示的函數
  function updateCartCount() {
      const totalItems = Object.values(cart).reduce((total, item) => total + item.quantity, 0); // 計算所有物品的總數量
      cartCount.textContent = totalItems; // 更新購物車圖示上的數量
  }

  // 更新購物車明細的函數
  function updateCartDetails() {
      cartItemsList.innerHTML = ''; // 清空現有的購物車列表
      let totalPrice = 0; // 記錄總價格

      // 遍歷購物車中的所有物品，更新列表顯示
      Object.keys(cart).forEach(itemName => {
          const item = cart[itemName];
          const listItem = document.createElement('li');
          
          // 創建商品的HTML結構，並添加數量控制按鈕和刪除按鈕
          listItem.innerHTML = `
              <img src="${item.image}" alt="${itemName}" style="width: 50px; height: 50px; margin-right: 10px;">
              <div>
                  <strong>${itemName}</strong><br>
                  <span>NT$${item.price}</span><br>
                  <button class="decrease" data-name="${itemName}">-</button>
                  <span>${item.quantity}</span>
                  <button class="increase" data-name="${itemName}">+</button>
                  <button class="delete" data-name="${itemName}">刪除</button>
              </div>
          `;
          
          cartItemsList.appendChild(listItem);
          totalPrice += item.price * item.quantity;
      });

      // 更新總價格顯示
      totalPriceElement.textContent = `NT$${totalPrice.toFixed(2)}`;
  }

  // 顯示購物車明細視窗
  document.getElementById('cart-icon').addEventListener('click', function() {
      cartDetails.style.display = 'block';
  });

  // 關閉購物車明細視窗
  closeCartButton.addEventListener('click', function() {
      cartDetails.style.display = 'none';
  });
  // 點擊結帳按鈕後跳轉到結帳頁面
    checkoutButton.addEventListener('click', function () {
  // 跳轉到結帳頁面
   window.location.href = 'checkout.html'; // 將 'checkout.html' 改為您的結帳頁面 URL
  });
  // 點擊繼續購物後關閉購物車視窗
  continueShoppingButton.addEventListener('click', function() {
      cartDetails.style.display = 'none'; // 隱藏購物車視窗
  });

  // 處理增減數量和刪除商品
  cartItemsList.addEventListener('click', function(event) {
      const button = event.target;

      if (button.classList.contains('increase')) {
          // 增加數量
          const itemName = button.getAttribute('data-name');
          if (cart[itemName]) {
              cart[itemName].quantity += 1;
              updateCartCount();
              updateCartDetails();
          }
      } else if (button.classList.contains('decrease')) {
          // 減少數量
          const itemName = button.getAttribute('data-name');
          if (cart[itemName] && cart[itemName].quantity > 1) {
              cart[itemName].quantity -= 1;
              updateCartCount();
              updateCartDetails();
          }
      } else if (button.classList.contains('delete')) {
          // 刪除商品
          const itemName = button.getAttribute('data-name');
          delete cart[itemName]; // 刪除商品
          updateCartCount();
          updateCartDetails();
      }
  });
});
