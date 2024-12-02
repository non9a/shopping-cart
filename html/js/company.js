
const items = document.querySelectorAll('.btn');
const details = document.querySelectorAll('.details');
const editbtn = document.querySelector('.edit-btn');
const present = document.querySelector('.present');
const edit = document.querySelector('.edit');
const buydeta=document.querySelectorAll('.buydata');

// 为每个列表项添加点击事件
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        // 隐藏所有详细资料
        details.forEach(detail => detail.classList.remove('active'));

        // 显示当前点击项的详细资料
        details[index].classList.add('active');
    });
});

// 点击编辑按钮的事件
editbtn.addEventListener("click", () => {
    present.classList.add('details'); // 隐藏当前的“个人信息”
    edit.classList.add('active'); // 显示编辑界面
});

