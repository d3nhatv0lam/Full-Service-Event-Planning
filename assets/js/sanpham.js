

document.addEventListener('DOMContentLoaded', () => {
    loadSanPhamPage();
});

function loadSanPhamPage() 
{ 
    if (document.getElementById('sanpham') == null) return;

    const goiButtons = document.querySelectorAll('.sanpham-goi');
    goiButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productID = button.dataset.productid;
            const rank = button.dataset.rank;
            addToCart(productID, rank);
        });
    });
}
