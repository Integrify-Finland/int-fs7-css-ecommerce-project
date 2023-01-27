const productContainer = document.querySelector(".product-container");

const productsData = [
    { id: 1, title: "cool car1", price: 12000 },
    { id: 2, title: "cool car2", price: 11000 },
    { id: 3, title: "cool car3", price: 10000 },
    { id: 4, title: "cool car4", price: 9000 },
    { id: 5, title: "cool car5", price: 8000 },
    { id: 6, title: "cool car6", price: 7000 }
];
const productsPopulate = productsData
    .map((product) => {
        return `<div class="product-card">
                <img onclick="showDetail(event,${product.id})" src="img/car2.webp" alt="product image" />
                <div class="product-card-info">
                    <h3 onclick="showDetail(event, ${product.id})"><a>${product.title}</a></h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus, ullam?
                    </p>
                    <p>$${product.price}</p>
                    <button onclick="addProductToCart(${product.id})" class="btn btn-aqua product__add-btn">
                        Add to cart
                    </button>
                </div>
            </div>`;
    })
    .join("");

productContainer.innerHTML = productsPopulate;
