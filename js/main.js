// index menu toggle start
const MenuItems = document.getElementById("menu__items");
MenuItems.style.maxHeight = "0px";

const menutoggle = () => {
    MenuItems.style.maxHeight = MenuItems.style.maxHeight == "0px" ? "200px" : "0px";
};
// index menu toggle end

//account - form start
const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const Indicator = document.getElementById("Indicator");

const register = () => {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
};

const login = () => {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
};
// account - form end

// Product gallery start
const ProductImg = document.getElementById("ProductImg");
const [first, second, third, fourth] = document.getElementsByClassName("small-img");

first.onclick = function () {
    ProductImg.src = first.src;
}

second.onclick = function () {
    ProductImg.src = second.src;
}

third.onclick = function () {
    ProductImg.src = third.src;
}

fourth.onclick = function () {
    ProductImg.src = fourth.src;
}
// Product gallery end