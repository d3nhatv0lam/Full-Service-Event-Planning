function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const goiButtons = document.querySelectorAll('.sanpham-goi');

goiButtons.forEach(button => {
    button.addEventListener('click', () => {
        const label = toTitleCase(button.querySelector('.label').textContent);
        const box = button.closest('.sanpham-box');
        const product = box.querySelector('h2').textContent;

        const nametoID = {
            "Hội Thảo": "sp001",
            "Lễ Kỷ Niệm": "sp002",
            "Sự Kiện Khai Trương": "sp003",
            "Sự Kiện Âm Nhạc": "sp004"
        };
        const productID = nametoID[product];

        const rankMap = {
            "CƠ BẢN": "standard",
            "NÂNG CAO": "advance"
        }
        const rank = rankMap[label.toUpperCase];

        const confirmAdd = confirm(`Bạn có muốn thêm "${product} - Gói ${label}" vào giỏ hàng không?`);
        if (confirmAdd) {
            alert(`Đã thêm gói vào giỏ hàng.`);
            addToCart(productID, rank);
        }
    });
});