function toggleText(cardNum) {
    var textId = "text" + cardNum;
    var btnId = "readMoreBtn" + cardNum;

    var textElement = document.getElementById(textId);
    var btnElement = document.getElementById(btnId);

    if (textElement.classList.contains("expanded")) {
        textElement.classList.remove("expanded");
        btnElement.textContent = "閱讀更多";
    } else {
        textElement.classList.add("expanded");
        btnElement.textContent = "收回";
    }
}