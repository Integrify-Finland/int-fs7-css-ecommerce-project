const allPages = document.getElementById("allPages");
const { products, cart, login, detail } = allPages.children;

const pages = {
    products,
    cart,
    login,
    detail
};

const selectPage = (event, showPage) => {
    event.preventDefault();
    for (const page in pages) {
        pages[page].style.display = "none";
    }
    pages[showPage].style.display = "block";
};