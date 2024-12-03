document.addEventListener('DOMContentLoaded', function () {
    const cartItemsList = document.getElementById('cart-items-list'); // 購物車物品列表
    const totalPriceElement = document.getElementById('total-price'); // 顯示總金額的元素

    // 從 localStorage 讀取購物車資料
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    let totalPrice = 0;

    // 顯示購物車內容
    Object.keys(cart).forEach(itemName => {
        const item = cart[itemName];
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `
            <img src="${item.image}" alt="${itemName}" style="width: 50px; height: 50px; margin-right: 10px;">
            <div>
                <strong>${itemName}</strong><br>
                <span>NT$${item.price}</span><br>
                <span>數量: ${item.quantity}</span>
            </div>
        `;
        
        cartItemsList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    // 顯示總價格
    totalPriceElement.textContent = `NT$${totalPrice.toFixed(2)}`;
});
