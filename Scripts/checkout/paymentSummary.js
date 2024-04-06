import { cart } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";


export function renderPaymentSummary() {
    let productPrice = 0;
    let shippingPrice = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPrice += product.price * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPrice += deliveryOption.price;
    });

    console.log(productPrice);
    console.log(shippingPrice);
}