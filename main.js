// add remove and cart total calc ########################
const cartCount = document.querySelector(".cart-shopping-count");
const cartIcon = document.querySelector(".fa-cart-shopping");
// .fa-cart-shopping 
const cartProductContainer = document.querySelector(".cart__product-container");
const cartTotal = document.getElementById("cart__total");
const cartPayBtn = document.querySelector(".cart__pay-btn");

let shoppingCart = [];

const updateCart = () => {
    cartProductContainer.innerHTML = cartPopulate();
    cartCount.innerHTML = `${shoppingCart.length}`;
    cartIcon.classList.add("cart-count-changed")
    cartTotal.innerHTML = `Total: $${cartTotalCalc(shoppingCart)}`;
    cartPayBtn.disabled = !shoppingCart.length;
    setTimeout(()=>{
        cartIcon.classList.remove("cart-count-changed")
    }, 500)
};

const cartTotalCalc = (allProducts) => {
    return allProducts.reduce((accumulator, product) => {
        return accumulator + product.price * product.count;
    }, 0);
};
const addProductToCart = (productId) => {
    let product = productsData.find((product) => product.id === productId);
    let is_productInCart = shoppingCart.find(
        (product) => product.id === productId
    );
    if (!is_productInCart) {
        shoppingCart.unshift({ ...product, count: 1 });
        updateCart();
    }
};

const removeProductFromCart = (productId) => {
    shoppingCart = shoppingCart.filter((product) => product.id !== productId);
    updateCart();
};

const changeProductInCart = (event, productId) => {
    let productInCart = shoppingCart.find(
        (product) => product.id === productId
    );
    productInCart.count = event.target.value;
    cartTotal.innerHTML = `Total: $${cartTotalCalc(shoppingCart)}`;
    cartPayBtn.disabled = !shoppingCart.length;
    console.log("changeProductInCart")
};

const cartPopulate = () => {
    return shoppingCart
        .map((item) => {
            let is_productAvailabel = productsData.find(
                (product) => product.id === item.id
            );
            if (is_productAvailabel) {
                return `
            <div class="product-card">
                <img src="img/car2.webp" alt="product image" />
                <div class="product-card-info">
                    <h3>${item.title}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus, ullam?
                    </p>
                    <div class="product-card-price">
                    <p>Price: $${item.price}</p>
                    <p>X</p>
                    <input type="number" onchange="changeProductInCart(event, ${item.id})" name="number" id="number" min="1" value="${item.count}">
                    </div>
                </div>
                <button onclick="removeProductFromCart(${item.id})" class="btn">remove</button>
            </div>
            `;
            } else {
                return `
                <div class="product-card">
                    <img src="img/car2.webp" alt="product image" />
                    <div class="product-card-info">
                        <h3>Product Not Availabel</h3>
                    </div>
                    <button class="btn">remove</button>
                </div>
            `;
            }
        })
        .join("");
};

updateCart();
