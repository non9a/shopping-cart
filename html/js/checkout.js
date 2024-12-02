document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-item');
    
    // 移除商品
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.cart-item');
            item.remove();
            updateOrderSummary();
        });
    });

    // 計算訂單總金額
    function updateOrderSummary() {
        let totalPrice = 0;
        const cartItems = document.querySelectorAll('.cart-item');
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.product-price').textContent.replace('NT$', ''));
            const quantity = item.querySelector('.product-quantity').value;
            totalPrice += price * quantity;
        });
        const shipping = 100;
        const total = totalPrice + shipping;

        document.querySelector('.order-summary').innerHTML = `
            <h2>訂單總覽</h2>
            <p>商品總金額: NT$ ${totalPrice}</p>
            <p>運費: NT$ ${shipping}</p>
            <p>總計: NT$ ${total}</p>
        `;
    }

    updateOrderSummary();
});
