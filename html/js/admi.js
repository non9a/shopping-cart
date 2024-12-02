
const items = document.querySelectorAll('.btn');
const details = document.querySelectorAll('.details');
const editbtn = document.querySelector('.edit-btn');
const present = document.querySelector('.present');
const edit = document.querySelector('.edit');
const buydeta=document.querySelectorAll('.buydata');
const perstrg=document.querySelector('.perstrg')
const comptrg=document.querySelector('.comptrg')
const personres=document.querySelector('.personres')
const companyres=document.querySelector('.companyres')

// 为每个列表项添加点击事件
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        // 隐藏所有详细资料
        details.forEach(detail => detail.classList.remove('active'));

        // 显示当前点击项的详细资料
        details[index].classList.add('active');
    });
});



perstrg.addEventListener('change', function() {
    if (perstrg.checked) {
        personres.style.display = 'block'; // 顯示買家資料a
        companyres.style.display = 'none'; // 隱藏賣家資料
    }
});

// 當選擇"賣家"時顯示companyres，隱藏personres

comptrg.addEventListener('change', function() {
    if (comptrg.checked) {
        personres.style.display = 'none'; // 隱藏買家資料
        companyres.style.display = 'block'; // 顯示賣家資料
    }});
