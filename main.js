'use strict';

//let cart = [];
//const cartDOM = document.querySelector('.cart');
//const addToCartBtnsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
//
//addToCartBtnsDOM.forEach(addToCartBtnDOM => {
//	addToCartBtnDOM.addEventListener('click', () => {
//		const productDOM = addToCartBtnDOM.parentNode;
//		const product = {
//			image:productDOM.querySelector('.product__image').getAttribute('src'),
//			name:productDOM.querySelector('.product__name').innerText,
//			price:productDOM.querySelector('.product__price').innerText
//		};
//		
//		
//		const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);
//		
//		if (!isInCart){
//				cartDOM.insertAdjacentHTML('beforeend', `
//				<div class="cart__item">
//					<img class="cart__item__image" src="${product.image}" alt="${product.name}">
//					<h3 class="cart__item__name">${product.name}</h3>
//					<h3 class="cart__item__price">${product.price}</h3>
//				</div>
//			`);
//
//			cart.push(product);
//			addToCartBtnDOM.innerText = 'In Cart';
//		}
//		
//	});
//});

let cart = [];
const cartDOM = document.querySelector('.cart');
const addToCartBtnsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

for(let i = 0; i < addToCartBtnsDOM.length; i++){
	
	addToCartBtnsDOM[i].addEventListener('click', () => {
		const productDOM = addToCartBtnsDOM[i].parentNode;
		const product = {
			image: productDOM.querySelector('.product__image').getAttribute('src'),
			name: productDOM.querySelector('.product__name').innerText,
			price: productDOM.querySelector('.product__price').innerText
		}
		
		cart.forEach(cartItem => {
			console.log(cartItem.name === product.name)
		});
		
		cartDOM.insertAdjacentHTML('beforeend', `
		<div class="cart__item">
			<img class="cart__item__image" src="${product.image}" alt="">
			<h3 class="cart__item__name">${product.name}</h3>
			<h3 class="cart__item__price">${product.price}</h3>
		</div>
	`);
		cart.push(product);
		addToCartBtnsDOM[i].innerText = "In Cart";
	});
	
}
