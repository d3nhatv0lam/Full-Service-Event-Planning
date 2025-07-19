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
        const productID = button.dataset.productID;
        const rank = button.dataset.rank;
        addToCart(productID, rank, label, product);
    });
});