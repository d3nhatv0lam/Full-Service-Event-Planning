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

function zoomImage(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
